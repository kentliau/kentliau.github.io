---
layout: post
title: Git Commands
date: 2014-07-08
category: code
tags: [git, cli]
---


Few years ago, source control is never heard off.

Coding standards are optional

In more commercial environments, many things are often missing:

There are no proper specs

Things are released or delivered "when they are ready"

This is not a sustainable environment

Some really useful git commands that essential tutorial will never teach.

Undoing a wrong commit
{% highlight bash %}
git reset --soft HEAD~1
vim
git add .
git commit -c ORIG_HEAD
{% endhighlight %}

This is what you want to undo.
This is most often done when you remembered what you just committed is incomplete, or you misspelled your commit message, or both. Leaves working tree as it was before "reset". (The quotes may or may not be required in your shell)

Make corrections to working tree files.
Stage changes for commit.
"reset" copies the old head to .git/ORIG_HEAD; redo the commit by starting with its log message. If you do not need to edit the message further, you can give -C option instead.

Commit correction
{% highlight bash %}
vim #do something to your files
git commit --amend
{% endhighlight %}

Undo staged/added file, provide filename to specific file or nothing for everything
{% highlight bash %}
git reset [file]
{% endhighlight %}

Show a list of of commit
{% highlight bash %}
git reflog
{% endhighlight %}