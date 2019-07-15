---
title: "Most helpful GIT command..."
date: "2017-05-23"
type: "post"
---

This little command is a lifesaver and will save you so much time when switching and merging previous branches in your GIT workflow.

\`git checkout -\`

\`git merge -\`

See the little minus symbol at the end? That basically tells GIT you want to checkout the previous branch, or merge the previous branch. This will also work with rebasing and any other command which uses branches.

Say you were in master branch and wanted to switch to that new PR request your colleague has submitted, you would do something like this...

\`git checkout new-feature\`

You look at the code and test and all looks good, so you want to switch back to master and then merge in the new feature, this will be super easy and you won't need to remember the branch names...

Switch back to master branch \`git checkout -\` then merge that new feature in \`git merge -\`. How much easier was that? You guys can thank me later when you have finished merging in all those PRs. ;)

Have any other commands you find helpful? Let us know in the comments below.
