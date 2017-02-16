var addTodoPerformance = require('./performance-tests/addtodo');
var removeTodoPerformance = require('./performance-tests/removetodo');
var updateTodoPerformance = require('./performance-tests/updatetodo');
var clearAllPerformance = require('./performance-tests/clearall');

addTodoPerformance
.runTest()
.then(removeTodoPerformance.runTest)
.then(updateTodoPerformance.runTest)
.then(clearAllPerformance.runTest)
;
