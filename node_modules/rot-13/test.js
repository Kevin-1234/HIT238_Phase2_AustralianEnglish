var rot13 = require('./index.js');
import test from 'ava';

test('abc', t => {
  t.is(rot13('abc'), 'nop');
});

test('2x', t => {
  t.is(rot13(rot13('abc')), 'abc');
});

test('spaces, non-ascii', t => {
  t.is(rot13('😀f😁 😂'), '😀s😁 😂');
});
