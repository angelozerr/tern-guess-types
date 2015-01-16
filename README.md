# Tern guess types

Tern plugin which gives the capability to guess parameter types when completion is applied.

For instance if you open tern completion for document and select addEventListener : 

![Tern completion](https://github.com/angelozerr/tern-guess-types/wiki/images/TernCompletion.png)

When you apply completion, tern guess types gives the capability to retrieve variables, functions for each function parameters. Here a screenshot which shows a list of variable with string type for the addEventListener type argument : 

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
"{
 "type": "guess-types",
 "file": "#0",
 "end": {
  "ch": 10,
  "line": 0
 },
 "property": "addEventListener",
 "lineCharPositions": true
}"
```

JSON response : 

```json
"{
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
}"
```
