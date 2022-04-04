/**
 * USE CASE:
 * On page load fetch all todos for logged in user
 * show all todo title, effort, status, created date in card list
 * on selecting perticular todo show the description of selected do
 * user can add a new TODO in todo list using form
 * user should be able to update todo status -> completed, new, in-progress
 * user should be able to update to description list
 *
 *
 * introduce redux for handling todos state
 * use drag and drop for updating todos status
 *
 *
 * write unit test cases for the same
 *
 * apis
 * GET todos/user/:userId -> get all todos for logged in user
 * POST todos -> create a new todo
 * PUT todos/todo/:todoId -> update a todo by todoId
 * DELETE todos/todo/:todoId -> delete todo by todoId
 *
 * GET todos/todo/todoId -> get one todo by todoId
 */
const TodoPage = () => {
  return <div>this is todo page</div>;
};

export default TodoPage;
