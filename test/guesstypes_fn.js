var util = require("./util");

exports['test Array '] = function() {
    
  util.assertGuessTypes(
    "var s1 = '', s2 = '', n = 5;" +
	"new ",
	"Array",
	{
	 "!args": ["number"],
	 "number": ["Infinity","NaN","devicePixelRatio","pageYOffset","pageXOffset","scrollY","scrollX","screenTop",
	            "screenLeft","screenY","screenX","innerWidth","innerHeight","outerWidth","outerHeight",
	            "n"]
	}, [ "ecma5", "browser" ]);
  
  util.assertGuessTypes(
    "var s1 = '', s2 = '', n = 5;" +
	"new Arr",
	"Array", 
	{
	 "!args": ["number"],
	 "number": ["Infinity","NaN","devicePixelRatio","pageYOffset","pageXOffset","scrollY","scrollX","screenTop",
	            "screenLeft","screenY","screenX","innerWidth","innerHeight","outerWidth","outerHeight",
	            "n"]
	}, [ "ecma5", "browser" ]);  
}

if (module == require.main) require('test').run(exports)
