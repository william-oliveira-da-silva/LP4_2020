const Todo = require('./Todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({runValidators: true});

module.exports = Todo;