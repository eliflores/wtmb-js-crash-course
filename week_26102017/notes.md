## Oct 26, 2017 

* This is how you should design software:
    * First design something inexistent. 
    * First design your dream, how it should look like and then go and write the actual implementation.
    * First come up with the problem, design something and then write the actual implementation.

* Every action creates an event and a browser can react with something.
* Synchronous programming: Every step happens one after another without interruption, it does not matter how long each step takes to execute and that is precisely the problem with _synchronous programming_.
* Asynchronous programming is built as a core part of JavaScript since it was designed originally for the browser.
    * This is **not** the same as multi-threaded programming. JavaScript is still single threaded. 
    * For many years we thought that multi-threaded programming was the answer to the synchronous programming problems but, oh, asynchronous programming solved our problems.
    * Asynchrnous programming is the reason why _node_ is so fast!
* Event driven programming means that you are reacting to events.
* JS is better for Async programming so the default is async.
* `Sync` vs `Async` programming is all about the order of execution.
* Chaining functions.
* Call back pyramid: Functions inside functions, inside functions! 
    * It's the biggest problem in JavaScript.
    * You will see this pattern all the time in JavaScript.
    * Also known as _Callback hell_ :-D
* `Promise` or in other languages called `Futures` (e.g. `Java`)
* Promises are something you can count on.
    * They sometimes can fail and we'll learn how to catch that.


## Homework
* Visit the homework from last week.
* Create objects from the database as we did today.
* See if the interactions between methods still work.
* Make sure that your dbs load async (async and await).
* Make sure that you have different databases for each class that you have and make them load async.