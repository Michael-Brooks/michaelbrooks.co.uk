---
title: UTF-8 causing problems for Social and Email Websites Laravel
date: 2014-12-08
published: true
tags: ['Markdown','Test files']
canonical_url: false
description: "I've been developing a couple of projects which use UTF-8 encoding on my databases, but have found that this has been problematic recently. Mobile phones and tablets now use emoticons which can cause problems for us UTF-8 users.8"
---

I've been developing a couple of projects which use UTF-8 encoding on my databases, but have found that this has been problematic recently. Mobile phones and tablets now use emoticons which can cause problems for us UTF-8 users.

So how do we fix this issue?

Well let me explain below...

Recently, I was testing out one of my creations and sent a message using an emoticon. Laravel started spitting out errors and it confused me as to why this was happening. After a quick search, I found that in order to save these emoticons to the database, I need to change my encoding from UTF-8 to UTF8MB4.

I found a little snippet which allowed me to change my tables encoding

ALTER DATABASE database_name CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;

Fantastic I thought, I did this with every table which needed it and then tested my app again, I got the same error?!? :o

One thing I missed out, was that I need to set Laravel's settings to the same encoding as my database. Move on over to app/config/database.php and you will find the 'connections' array. I'm using mysql, and I found just what I was looking for...

'charset' => 'utf8', 'collation' => 'utf8',

Change this to...

'charset' => 'utf8mb4', 'collation' => 'utf8mb4_general_ci'

And you are done. Let me know if you still have any problems and your stories with how you managed to fix this issue. :)
