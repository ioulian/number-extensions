# number-extensions
![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Mocha tests](https://img.shields.io/badge/tests-24%2F24-brightgreen.svg)

Collection of useful number functions to simplify your code. Written in and for ES6, can be compiled with Babel.js.

## Install

```bash
# npm coming soon, for now, just clone the repo
```

## Usage

### Function usage
```javascript
import { loop } from 'number-extensions';
console.log(loop(400, 360))
// > 40
```

### Globals usage

Keep in mind that extending native objects is not a good idea, but can simplify your code if used with caution.

```javascript
import { setGlobals } from 'number-extensions';
setGlobals();

400..loop(360) // or (400).loop(360)
// > 40
```

By default setGlobals() does not overwrite default prototype functions if they exist, but if you really want it, you can pass a force parameter.

```javascript
setGlobals(true);
```

## Functions

These are the functions that are included. Please read the comments on how and when to use them.

### Cycle
```javascript
console.log(1..cycle(3, [-2, 3]))
```

### scale
```javascript
console.log(0.75.scale(50, 150))
```
    
### random
```javascript
console.log(50..random())
```
    
### floor
```javascript
console.log(3.4.floor())
```
    
### round
```javascript
console.log(3.4.round())
```
    
### ceil
```javascript
console.log(3.4.ceil())
````
    
### clamp
```javascript
console.log(-4..clamp(0, 100));
```
    
### toRad
```javascript
console.log(90..toRad())
```
    
### toDeg
```javascript
console.log(1.5707963267948966.toDeg())
```
    
### abs
```javascript
console.log(-1..abs())
```
    
### pow
```javascript
console.log(2..pow(3))
```
    
### sqrt
```javascript
console.log(16..sqrt())
```
    
### wholeCenter
```javascript
console.log(5..wholeCenter(true))
```
    
### loop
```javascript
console.log(400..loop(360))
```

## Tests

```bash
npm test
```

--- 

By [Ioulian](https://github.com/ioulian)

[MIT License](https://github.com/ioulian/number-extensions/blob/master/LICENSE)
