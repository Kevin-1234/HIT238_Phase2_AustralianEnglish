# rot-13

> `rot-13` is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
> https://en.wikipedia.org/wiki/ROT13

## Details
Converts alpha characters to there rotated-by-13 equivalent letter. Keeps cases. Ignores other characters.

```
Input:  ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
Output: NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm
```

## Example

```
Why did the chicken cross the road?
Gb trg gb gur bgure fvqr!
```

Transforming the entire text via ROT13 form, the answer to the joke is revealed:

```
Jul qvq gur puvpxra pebff gur ebnq?
To get to the other side!
```

## Usage

```js
var rot13 = require('./index.js');
console.log(rot13('abc')); // 'nop'
```

## Tests
Just run [ava](https://github.com/avajs/ava).

```sh
ava
```
