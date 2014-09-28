( function () {
  'use strict';

  var options = {
    highlightToolbar: false,
    inlineCodeAutoSelect: false,
    fluidbox: true
  };

  // jQuery highlight text plugins
  // It will select the text of first occurence
  // of jQuery collection of element
  jQuery.fn.selectText = function () {
    var doc = document,
      element = this[ 0 ],
      range,
      selection;

    if ( doc.body.createTextRange ) {
      range = document.body.createTextRange();
      range.moveToElementText( element );
      range.select();
    } else if ( window.getSelection ) {
      selection = window.getSelection();
      range = document.createRange();
      range.selectNodeContents( element );
      selection.removeAllRanges();
      selection.addRange( range );
    }

    return selection.toString() || range.toString();
  };

  if ( options.fluidbox ) {
    $( 'a' ).has( 'img:only-child' ).fluidbox( {
      closeTrigger: [ {
        selector: 'window',
        event: 'scroll'
      } ]
    } );
  }

  if ( options.highlightToolbar ) {
    // Adds Toogle Line number to pygment highlight
    var highlight = $( '.highlight' ),
      dict = {
        'select-all': 'Select All',
        'select-all-tip': 'Press to highlight the code',
        'expand': '&#x2190; Expand &#x2192;',
        'expand-tip': 'Press to expand',
        'ecs-expand': '&#x2192; Esc (&#9099;) &#x2190;',
        'ecs-expand-tip': 'Press to contract or Press Esc key (⎋)'
      };

    highlight
      .has( '.lineno' )
      .prepend( $( '<input />', {
        type: 'checkbox',
        class: 'toggle-lineno',
        title: 'Press to toggle line numbers',
        checked: false
      } ) );

    // Adds select text feature to pygment highlight
    highlight
      .prepend( $( '<button />', {
        class: 'select-all btn',
        text: dict[ 'select-all' ],
        title: dict[ 'select-all-top' ]
      } ) )
      .on( 'click', 'button.select-all', function () {
        var selectionText = $( this )
          .parent( '.highlight' )
          .find( 'pre' )
          .selectText();
        console.log( selectionText );
      } );


    // Adds expand Mode
    highlight
      .prepend( $( '<button />', {
        class: 'expand-mode btn',
        html: dict.expand,
        title: dict[ 'expand-tip' ],
        data: {
          expandMode: false
        }
      } ) )
      .on( 'click', 'button.expand-mode', function ( e ) {
        e.stopPropagation();
        var $this = $( this );

        // toggle expand mode
        $this
          .data( 'expandMode', !$this.data( 'expandMode' ) )
          .html( !!$this.data( 'expandMode' ) ? dict[ 'ecs-expand' ] : dict.expand )
          .parent( '.highlight' )
          .toggleClass( 'expand-mode' );

        // toggle any other distraction stuff
        $this
          .parent( '.highlight' )
          .siblings()
          .toggleClass( 'expand-mode-distraction' );

        // change title tooltip
        $this.prop( 'title', !!$this.data( 'expandMode' ) ? dict[ 'ecs-expand-tip' ] : dict[ 'expand-tip' ] );

        // Attach one event listener to expand mode
        if ( !!$this.data( 'expandMode' ) ) {
          // always attach an event if whenever the user click expand
          $( document )
            .on( 'keyup', function ( e ) {
              e.stopPropagation();
              console.log( 'keyup fired' );
              if ( e.keyCode === 27 ) /*ECS key*/ {
                // bring back all the distraction
                $( '.highlight.expand-mode' )
                  .toggleClass( 'expand-mode' )
                  .siblings()
                  .removeClass( 'expand-mode-distraction' );

                $( 'button.expand-mode' )
                  .data( 'expandMode', !$this.data( 'expandMode' ) )
                  .html( !!$this.data( 'expandMode' ) ? dict[ 'ecs-expand' ] : dict.expand );

                $( document ).off( 'keyup' );

                console.log( 'Esc pressed, event detached.' );
              }
            } );
        } else {
          // remove keyup event if user collapse by mouse click
          $( document ).off( 'keyup' );
          console.log( 'Collapse, keyup event removed' );
        }
      } );
  }

  if ( options.inlineCodeAutoSelect ) {
    // Automatically select inline code when clicked
    $( document ).on( 'click', 'code:not(.highlight code)', function () {
      var selectionText = $( this ).selectText();
      console.log( selectionText );
    } );
  }
} )();
