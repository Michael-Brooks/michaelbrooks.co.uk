---
title: 5 of the best programming books
date: 2017-06-10
published: true
tags: ['programming','top 5']
canonical_url: false
description: "My personal top 5 PHP books"
---

## Working Effectively with Legacy Code [Amazon.com](https://www.amazon.com/gp/product/0131177052/ref=as_li_tl?ie=UTF8&tag=michaelbrooks-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0131177052&linkId=141de70c0206cc75b09a62a95d0679e7) | [Amazon.co.uk](https://www.amazon.co.uk/gp/product/B005OYHF0A/ref=as_li_tl?ie=UTF8&tag=wedeuk05-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=B005OYHF0A&linkId=649ae44575d09f6754decf1da6e0b0aa)

Michael C. Feathers

The average book on Agile software development describes a fairyland of greenfield projects, with wall-to-wall tests that run after every few edits, and clean & simple source code.

The average software project, in our industry, was written under some aspect of code-and-fix, and without automated unit tests. And we can't just throw this code away; it represents a significant effort debugging and maintaining. It contains many latent requirements decisions. Just as Agile processes are incremental, Agile adoption must be incremental too. No more throwing away code just because it looked at us funny.

Mike begins his book with a very diplomatic definition of "Legacy". I'l skip ahead to the undiplomatic version: Legacy code is code without unit tests.

Before cleaning that code up, and before adding new features and removing bugs, such code must be de-legacified. It needs unit tests.

To add unit tests, you must change the code. To change the code, you need unit tests to show how safe your change was.

The core of the book is a cookbook of recipes to conduct various careful attacks. Each presents a particular problem, and a relatively safe way to migrate the code towards tests.

Code undergoing this migration will begin to experience the benefits of unit tests, and these benefits will incrementally make new tests easier to write. These efforts will make aspects of a legacy codebase easy to change.

It's an unfortunate commentary on the state of our programming industry how much we need this book.

[Amazon.com](https://www.amazon.com/gp/product/0131177052/ref=as_li_tl?ie=UTF8&tag=michaelbrooks-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0131177052&linkId=141de70c0206cc75b09a62a95d0679e7) | [Amazon.co.uk](https://www.amazon.co.uk/gp/product/B005OYHF0A/ref=as_li_tl?ie=UTF8&tag=wedeuk05-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=B005OYHF0A&linkId=649ae44575d09f6754decf1da6e0b0aa)

---

## Clean Code [Amazon.com](https://www.amazon.com/gp/product/0132350882/ref=as_li_tl?ie=UTF8&tag=michaelbrooks-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0132350882&linkId=608ae6a39a076017f60898ca05140f6f) | [Amazon.co.uk](https://www.amazon.co.uk/gp/product/0132350882/ref=as_li_tl?ie=UTF8&tag=wedeuk05-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=0132350882&linkId=24442b08823bdb85bcdc3fa065fa64d0)

Robert C. Martin

An extremely pragmatic method for writing better code from the start, and ultimately producing more robust applications.

[Amazon.com](https://www.amazon.com/gp/product/0132350882/ref=as_li_tl?ie=UTF8&tag=michaelbrooks-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0132350882&linkId=608ae6a39a076017f60898ca05140f6f) | [Amazon.co.uk](https://www.amazon.co.uk/gp/product/0132350882/ref=as_li_tl?ie=UTF8&tag=wedeuk05-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=0132350882&linkId=24442b08823bdb85bcdc3fa065fa64d0)

---

## Refactoring - Improving the Design of Existing Code [Amazon.com](https://www.amazon.com/gp/product/0201485672/ref=as_li_tl?ie=UTF8&tag=michaelbrooks-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0201485672&linkId=00b05ee464d1e15ef958c607c30812c4) | [Amazon.co.uk](https://www.amazon.co.uk/gp/product/0201485672/ref=as_li_tl?ie=UTF8&tag=wedeuk05-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=0201485672&linkId=3e20422c025bd9f504f2673c122151bd)

Martin Fowler, Kent Beck

Users can dramatically improve the design, performance, and manageability of object-oriented code without altering its interfaces or behavior. "Refactoring" shows users exactly how to spot the best opportunities for refactoring and exactly how to do it, step by step.

[Amazon.com](https://www.amazon.com/gp/product/0201485672/ref=as_li_tl?ie=UTF8&tag=michaelbrooks-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0201485672&linkId=00b05ee464d1e15ef958c607c30812c4) | [Amazon.co.uk](https://www.amazon.co.uk/gp/product/0201633612/ref=as_li_tl?ie=UTF8&tag=wedeuk05-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=0201633612&linkId=42806aed069b703b91e6e2278934cf0d)

---

## Design Patterns [Amazon.com](https://www.amazon.com/gp/product/0201633612/ref=as_li_tl?ie=UTF8&tag=michaelbrooks-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0201633612&linkId=ab1dd240babd8f45b5fa1038e3b189ec) | [Amazon.co.uk](https://www.amazon.co.uk/gp/product/0132350882/ref=as_li_tl?ie=UTF8&tag=wedeuk05-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=0132350882&linkId=24442b08823bdb85bcdc3fa065fa64d0)

Ralph Johnson, Erich Gamma, John Vlissides, Richard Helm

Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves. The authors begin by describing what patterns are and how they can help you design object-oriented software. They then go on to systematically name, explain, evaluate, and catalog recurring designs in object-oriented systems. With Design Patterns as your guide, you will learn how these important patterns fit into the software development process, and how you can leverage them to solve your own design problems most efficiently. Each pattern describes the circumstances in which it is applicable, when it can be applied in view of other design constraints, and the consequences and trade-offs of using the pattern within a larger design. All patterns are compiled from real systems and are based on real-world examples. Each pattern also includes code that demonstrates how it may be implemented in object-oriented programming languages like C++ or Smalltalk. 0201633612B07092001

[Amazon.com](https://www.amazon.com/gp/product/0201633612/ref=as_li_tl?ie=UTF8&tag=michaelbrooks-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0201633612&linkId=ab1dd240babd8f45b5fa1038e3b189ec) | [Amazon.co.uk](https://www.amazon.co.uk/gp/product/0201633612/ref=as_li_tl?ie=UTF8&tag=wedeuk05-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=0201633612&linkId=42806aed069b703b91e6e2278934cf0d)

---

## Patterns of Enterprise Application Architecture [Amazon.com](https://www.amazon.com/gp/product/0321127420/ref=as_li_tl?ie=UTF8&tag=michaelbrooks-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0321127420&linkId=54722d670efe3c7128b2d99926278ea7) | [Amazon.co.uk](https://www.amazon.co.uk/gp/product/0321127420/ref=as_li_tl?ie=UTF8&tag=wedeuk05-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=0321127420&linkId=0d7a8480cdb91aa48d6c3b67b17675e3)

Martin Fowler

This volume is a handbook for enterprise system developers, guiding them through the intricacies and lessons learned in enterprise application development. It provides proven solutions to the everyday problems facing information systems developers.

[Amazon.com](https://www.amazon.com/gp/product/0321127420/ref=as_li_tl?ie=UTF8&tag=michaelbrooks-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0321127420&linkId=54722d670efe3c7128b2d99926278ea7) | [Amazon.co.uk](https://www.amazon.co.uk/gp/product/0321127420/ref=as_li_tl?ie=UTF8&tag=wedeuk05-21&camp=1634&creative=6738&linkCode=as2&creativeASIN=0321127420&linkId=0d7a8480cdb91aa48d6c3b67b17675e3)

Related:

* [Top 5 Laravel Books](/post/top-5-laravel-books)
