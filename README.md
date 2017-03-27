# number-extensions ![Mocha tests status](https://raw.githubusercontent.com/ioulian/number-extensions/master/tests-badge.svg)
Collection of useful number functions to simplify your code. Written in and for ES6, can be compiled with Babel.js.

## Install

    # npm coming soon, for now, just clone the repo

## Usage

### Function usage

    import { loop } from 'number-extensions';
    console.log(loop(400, 360))
    // > 40

### Globals usage

Keep in mind that extending native objects are not a good idea, but can simplify your code if used with caution.

    import { setGlobals } from 'number-extensions';
    setGlobals();
    
    400..loop(360) // or (400).loop(360)
    // > 40

By default setGlobals() does not overwrite default prototype functions if they exist, but if you really want it, you can pass a force parameter

    setGlobals(true)


--- 

By [Ioulian](https://github.com/ioulian)

[MIT License](https://github.com/ioulian/number-extensions/blob/master/LICENSE)
