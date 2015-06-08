exports['test guess types for function'] = require('./guesstypes_fn');
exports['test guess types for function of member'] = require('./guesstypes_member_fn');
exports['test guess types for function with multi types'] = require('./guesstypes_multitypes');

if (require.main === module) require("test").run(exports);