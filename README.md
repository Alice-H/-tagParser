# tagParser<br>
<br>
auto id | tag number |<br>
start nth (ignore tag) | end nth (ignore tag)<br>
<br>
example:<br>
this is a<1>test</1>file，test<2>text</2><br>
<br>
usage:<br>
node tagParser.js<br>
<br>
output:<br>
[ { id: 1, number: '1', start: 10, end: 13 },<br>
  { id: 2, number: '2', start: 23, end: 26 } ]<br>
