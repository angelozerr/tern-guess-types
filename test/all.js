exports['test guess types for function'] = require('./guesstypes_fn.js');
exports['test guess types for function of member'] = require('./guesstypes_member_fn.js');

if (require.main === module) require("test").run(exports);