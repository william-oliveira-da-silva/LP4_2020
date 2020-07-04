const Todo = require('./todo');

/**
 * @api {get} /tasks List all tasks
 * @apiGroup Tasks
 * @apiSuccess {Object[]} tasks Task's list
 * @apiSuccess {Number} tasks.id Task id
 * @apiSuccess {String} tasks.title Task title
 * @apiSuccess {Boolean} tasks.done Task is done?
 * @apiSuccess {Date} tasks.updated_at Update's date
 * @apiSuccess {Date} tasks.created_at Register's date
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     [{
 *      "id": 1,
 *      "title": "will",
 *      "done": false,
 *      "updated_at": "2019-02-10T15:46:51.778Z",
 *      "createt_at": "2019-02-10T15:46:51.778Z"
 *      }]
 * HTTP/1.1 200 OK
 * @apiErrorExample {json} List error
 *     HTTP/1.1 500 Internal Server Error
 */
/**
 * @api {put} /tasks/:id Change a tasks
 * @apiGroup Tasks
 * @apiSuccess {Boolean} tasks.done 
 * @apiSuccess {String} tasks.title Task title
 * @apiSuccessExample {json} Success
 *     HTTP/1.1 200 OK
 *     [{
 *      "title": "will",
 *      "done": true
 *      }]
 * @apiErrorExample {json} Error
 *     HTTP/1.1 500 Internal Server Error
 */

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({runValidators: true});

module.exports = Todo;