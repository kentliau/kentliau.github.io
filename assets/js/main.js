// VanillaJS text highlight
// require a DOM element as parameter
function selectText(element) {
    var doc = document
        , text = element
        , range, selection
    ;
    if (doc.body.createTextRange) { //ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { //all others
        selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

// jQuery highlight text plugins
// It will select the text of first occurence
// of jQuery collection of element
jQuery.fn.selectText = function(){
    var doc = document
        , element = this[0]
        , range, selection
    ;
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    return selection.toString() || range.toString();
};


$(function () {
  $("a").has('img:only-child').fluidbox({
    closeTrigger: [
      {
        selector: "window",
        event: "scroll"
      }
    ]
  });

  // Adds Toogle Line number to pygment highlight
  var highlight = $('.highlight');
  highlight
    .has('.lineno')
    .prepend( $('<input />',
    {
      type: 'checkbox',
      class: 'toggle-lineno',
      checked: true
    }));
    // We use CSS checkbox to toggle the effect
    // No Event attached, Yay!
    // .on('change', '.toggle-lineno', function(e) {
    //   $(this)
    //     .parent('.highlight')
    //     .toggleClass('hide-lineno');
    // });

  // Adds select text feature to pygment highlight
  highlight
    .prepend( $('<button />', {
      class: 'select-all btn',
      text: 'Select All'
    }))
    .on('click', 'button.select-all', function(e) {
      var selectionText = $(this)
                            .parent('.highlight')
                            .find('pre')
                            .selectText();
      console.log(selectionText);
    });

  // Adds Zen Mode
  highlight
    .prepend( $('<button />', {
      class: 'zen-mode btn',
      text: 'Zen Mode',
      data: {
        zenMode: false
      }
    }))
    .on('click', 'button.zen-mode', function(e) {
      $this = $(this);

      $this
        .data( 'zenMode', !$this.data('zenMode') )
        .text( !!$this.data('zenMode') ? 'Exit Zen Mode' : 'Zen Mode' )
        .parent( '.highlight' )
        .toggleClass( 'zen-mode' );

      $this
        .parent('.highlight')
          .siblings()
          .toggleClass('zen-mode-distraction');
    });

  // Keyboard Exit Zen Mode
  $(document)
    .on('keyup', function(e) {
      if( e.keyCode === 27 ) /*ECS key*/
      {
        $('.highlight.zen-mode')
          .toggleClass('zen-mode')
            .siblings()
            .toggleClass('zen-mode-distraction');

        $('button.zen-mode')
          .data( 'zenMode', !$this.data('zenMode') )
          .text( !!$this.data('zenMode') ? 'Exit Zen Mode' : 'Zen Mode' );

      }
    });

  // Automatically select inline code when clicked
  $(document)
    .on('click', 'code:not(.highlight code)', function(){
      var selectionText = $(this).selectText();
      console.log(selectionText);
    });

});