## Nov 23, 2017 

### Different types of testing
* **Unit Testing:** Standalone test of a class or function that does not have an interaction with the outside world. 
* **Integration Testing:** Testing the integration of two different modules and you have a dependency.
    * **Mocking / Stubbing:** Imitation of a dependency we have in our test.
        * People tend to convert Integration Testing to Unit Testing by using _mocks_ or _stubs_.
* **E2E Tests:** You do not break down your application into pieces, you do not test it piece by piece, you use / test your application as if you were a real user (acting as a real user).

* **Acceptance Criteria:** The steps that a person or a machine needs to go through to validate a certain functionality.
* **Automated User Acceptance Testing:** Testing that is based on the _Acceptance Criteria_. A developer automates this and then every time . You treat your system as a black box, you don't care what is inside or how many hacks there are! You are not dealing with the details! You only look at the output and test that the output is what you expect!

* **The value proposition:** The value that you get our of testing. Every minute you spend is an opportunity cost!
    * Use the testing strategy that brings more value to you!
    * What value would it bring you? 

* Write your code in a way that you don't need mocks. 

* Use generated / random input for your tests to simulate the input from the millions of users that are using your application.
    * Generated Testing, as an Engineer you are very limited in the number of cases that you can come up with, but a computer can come up with millions of cases in a minute! :)

* Suggested Approach: 
    * Start from E2E tests. 
    * If E2E fail, then go to Integration Testing. 
    * If Integration Testing fail, then go to Unit Testing.

* The idea of testing is to prevent regressions. 
    * Regression is when a bug has been fixed and then it happens again! 
    * The real value of testing comes to prevent Regression! :)

* If the tests are simple and well structure, then the tests become the documentation!

* --save-dev (It is a `developer` dependency. Do not need to install this in production!)

* Unit Testing: You have inputs and you know the expected output and this is when it makes sense to write the test first and then implement the functionality.
* Tests they don't share state between them, you always start in a clean state.
* You are writing tests to save the future, your own future and the future of your business!

>> Always write your code in such a matter that the next developer who will read your code is a psycopath that knows where you live. Make sure you don't piss him off! :D

* 5x errors are server errors.
* 4x errors are errors from the user request.

**Testing Flow**
1. You create records
2. You execute an action
3. You assert on the expected result

* **The beauty of E2E tests**
    * They are very simple and they are very effective!

### Homework 
* Get 100 % code coverage on your projects! :)

