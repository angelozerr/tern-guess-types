var util = require("./util");

exports['test document.addEventListener '] = function() {
    
  util.assertGuessTypes(
    "var s1 = '', s2 = '', b = true;" +
	"document.",
	"addEventListener", 
	{
	 "args": ["string", "fn(e: Event)", "bool"],
	 "string": ["name", "s1", "s2"],
	 "fn(e: Event)": [],
	 "bool": ["true", "false", "closed", "b"]
	}, [ "ecma5", "browser" ]);
  
  util.assertGuessTypes(
    "var s1 = '', s2 = '', b = true;" +
	"document.add",
	"addEventListener", 
	{
	 "args": ["string", "fn(e: Event)", "bool"],
	 "string": ["name", "s1", "s2"],
	 "fn(e: Event)": [],
	 "bool": ["true", "false", "closed", "b"]
	}, ["ecma5", "browser" ]);  
}

exports['test variable not defined '] = function() {
    
  // here document variable doesn't exists, because browser JSON Type Definition is not loaded.
  util.assertGuessTypes(
    "var s1 = '', s2 = '', b = true;" +
	"document.",
	"addEventListener", 
	{}, ["ecma5"]);
  
 }
if (module == require.main) require('test').run(exports)
