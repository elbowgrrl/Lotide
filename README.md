# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @elbowgrrl/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

countLetters is a function that counts the letters in a string

eqArrays is a function that checks if two arays are identical

eqObjects is a function that checks if two objects are identical

findKeyByValue is a function that, when passed an object and a string returns the key at the value that matches the string

head is a function that returns just the first element in an array

letter positions is a function that when passed a string returns an objects containing arrays that indicate the position(index) of each letter in the string

middle is a function that when passed an array returns the middle element(s)

tail is a function that when passed an array retuns the array without the first element.