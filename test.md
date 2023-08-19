---
title: Testing Your Code
layout: default.njk
---

The `Test[]` method in the VisionScript standard library provides a method for testing your code. The standard library contains methods that you can use in your code but must be imported before use.

To test a program, first import the `Test` module:

```
import["Test"]
```

To write a test, use the `Test[]` method.

In the following script, we test that the number of cats in a provided image is greater than 3:

```
Detect["./cats.jpg"]
Count[]
Test[Count[] > 3]
```

Tests are counted in two global values:

- `PassedTests`: The number of tests that have passed.
- `FailedTests`: The number of tests that have failed.

To read the number of passed and failed tests, use the `PassedTests` and `FailedTests` methods:

```
Say["Passed tests:"]
Say[PassedTests[]]

Say["Failed tests:"]
Say[FailedTests[]]
```