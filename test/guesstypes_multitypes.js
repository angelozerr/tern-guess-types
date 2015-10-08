var util = require("./util");

exports['test String#replace '] = function() {
    
  util.assertGuessTypes(
    "var s1 = '', s2 = '', r1 = new RegExp('');" +
	"var s3 = s1.",
	"replace",
	{
	 "!args": ["string|RegExp","string"],
	 "string": ["\"\"", "''", "s1","s2"],
	 "RegExp": ["r1"]
	}, [ "ecma5"]);  
}

if (module == require.main) require('test').run(exports)
