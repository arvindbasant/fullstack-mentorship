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
 * GET todos/todo/todoId -> get one todo by todoId
 * POST todos -> create a new todo
 * PUT todos -> update a todo by todoId
 * DELETE todos/todo/:todoId -> delete todo by todoId
 *
 * Components
 * Todo Card
 * TODO creation form
 * Dialog for creating a new TODO
 * Header for Logged-in User Details and Create Button
 *
 *
 */

import TodoCard from "../components/TodoCard";

const TodoPage = () => {
  const todos = [
    { id: 1, title: "one", status: "new" },
    { id: 2, title: "two", status: "in progress" },
    { id: 3, title: "three", status: "done" },
  ];

  return (
    <div className="todo-page">
      <div className="todo-header">
        logged user details - create todo button
      </div>
      <div className="todo-list-container">
        <div className="todo-new">
          {todos &&
            todos
              .filter((todo) => todo.status === "new")
              .map((todo) => <TodoCard todo={todo} />)}
        </div>
        <div className="todo-in-progress">
          {todos
            .filter((todo) => todo.status === "in progress")
            .map((todo) => (
              <TodoCard todo={todo} />
            ))}
        </div>
        <div className="todo-done">
          {todos
            .filter((todo) => todo.status === "done")
            .map((todo) => (
              <TodoCard todo={todo} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
