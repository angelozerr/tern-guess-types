# Tern guess types

[![Build Status](https://secure.travis-ci.org/angelozerr/tern-guess-types.png)](http://travis-ci.org/angelozerr/tern-guess-types)
[![NPM version](https://img.shields.io/npm/v/tern-guess-types.svg)](https://www.npmjs.org/package/tern-guess-types)

[tern-guess-types](https://github.com/angelozerr/tern-guess-types) is a plugin which  gives the capability to guess parameter types when completion is applied to the JavaSript code intelligence system [Tern](http://ternjs.net/).

For instance if you open tern completion for `document` and select `addEventListener` : 

![Tern completion](https://github.com/angelozerr/tern-guess-types/wiki/images/TernCompletion.png)

When you apply completion, tern guess types gives the capability to retrieve variables, functions for each function parameters. Here a screenshot which shows a list of variable with string type for the `addEventListener` type argument : 

![Tern completion](https://github.com/angelozerr/tern-guess-types/wiki/images/TernGuessTypes.png)


# How it works?

```javascript
document. //addEventListener(type, listener, capture)
var s = "", y = "", z = 10;
var f = function(e) {

}    
var g = function() {

}
var b = true;
```
JSON request : 

```json
{
 "type": "guess-types",
 "file": "#0",
 "end": {
  "ch": 10,
  "line": 0
 },
 "property": "addEventListener",
 "lineCharPositions": true
}
```

JSON response : 

```json
{
 "args": [
  "string",
  "fn(e: Event)",
  "bool"
 ],
 "string": [
  "name",
  "s",
  "y"
 ],
 "fn(e: Event)": [],
 "bool": [
  "true",
  "false",
  "closed",
  "b"
 ]
}
```