# tagParser

auto id | tag number |
start nth (ignore tag) | end nth (ignore tag)

example:
this is a<1>test</1>file，test<2>text</2>

usage:
node tagParser.js

output:
[ { id: 1, number: '1', start: 10, end: 13 },
  { id: 2, number: '2', start: 23, end: 26 } ]
