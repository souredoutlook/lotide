# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at [Lighthouse Labs.](https://www.lighthouselabs.ca/) 

## Usage

**Install it:**

`npm install @souredoutlook/lotide`

**Require it:**

`const _ = require('@souredoutlook/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1,array2))`: a simple assertion tool for comparing shallow arrays. Logs passing and failing results.
* `assertEqual(value1,value2)`: a simple assertion tool for numbers, `"strings"`, boolean, `undefined` and `null`. Logs passing and failing results.
* `assertObjectEquals({a:1, b:2},{b:2, a:1})`: a simple assertion tool for shallow Objects, supports shallow arrays as values. Logs passing and failing results.
* `countLetters("string")`: given a string, returns an object containing key:value pairs that reflect letters, and their frequency of appearance in a string. Example: `{s: 1, t: 1, ...etc}` Key's are lowerCase. Count is based on `/[a-zA-Z]/`.
* `countOnly([x,y], {x: true, y: false})`: returns an object containing key:value pairs that reflect the frequency which a key appears in a given array (example: `{x: 1}`) if some variation of {'key':true} is passed as an argument.
* `eqArrays(array1, array2)`: returns true if arrays of identical lengths are found to contain identical elements in the same indices.
* `eqObjects({a: 1, b: [2]}{b: [2], a: 1}`: returns true if objects with indentical keys contain identical values. Supports shallow arrays as values.
* `findKey({"noma": {stars: 2}, "elBulli": {stars: 3}, x => x === 2)`: returns the key of an object when the callback argument returns true. Example: `noma`.
* `findKeyByValue({a:1, b:2, c:'three'}, 'three')`: returns the first key in an object that is paired with a given value. Example: `'c'`.
* `flatten([1,[2,3],4])`: will flatten an array with elements that contain shallow arrays. **IS NOT RECURSIVE.** Example: `[1,2,3,4]`
* `head([1,2,3])`: returns the 0th index of an array. Example: `[1]`
* `letterPositions("abba")`: given a string, returns an object with key:value pairs with keys that correspond to letters in a string, and values that are arrays containing the string indices of the letter as elements. Example: `{a: [0,3], b:[1,2]}`. Key's are lowerCase. Count is based on `/[a-zA-Z]/`.
* `map([1,2,3], x => x * 2)`: returns a copy of an array containing elements where the callback function evaluates to true. Can result in a new array of differing length if the callback function contains a return inside a conitional (this is by design).
* `middle([1,2,3])`: returns the middle element for arrays of odd length. Or, returns the middle two elements for arrays of even length.
* `tail([1,2,3])`: returns all but the 0th index of an array.
* `takeUntil([1,2,3], x => x > 2)`: iterates over an array  and returns it's indices in order as an array until a callback argument evaluates to true. Example: `[1,2]`.
* `without([1,2,3], ['one','two',3])`: given two arrays, will return a copy of the first array without any elements that are found to be in the second array. Example: `[1,2,]`.