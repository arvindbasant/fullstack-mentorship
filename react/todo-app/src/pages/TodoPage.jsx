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

import { useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import TodoCard from "../components/TodoCard";
import TodoForm from "../components/TodoForm";
import { fetchTodoService } from "../services/todoService";
import "./todoPage.css";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        // pass here logged in userId
        const todos = await fetchTodoService("JD1001");
        console.log(todos);
        setTodos(todos);
      } catch (error) {}
    }
    fetchTodos();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const createNewTodo = () => {
    setIsOpen(true);
  };

  return (
    <div className="todo-page">
      <div className="todo-header">
        <Button color="primary" onClick={createNewTodo}>
          Create New Todo
        </Button>
      </div>
      <div className="todo-list-container">
        <div className="todo-new">
          {todos &&
            todos
              .filter((todo) => todo.status === "new")
              .map((todo) => <TodoCard todo={todo} key={todo._id} />)}
        </div>
        <div className="todo-in-progress">
          {todos &&
            todos
              .filter((todo) => todo.status === "in progress")
              .map((todo) => <TodoCard todo={todo} key={todo._id} />)}
        </div>
        <div className="todo-done">
          {todos &&
            todos
              .filter((todo) => todo.status === "done")
              .map((todo) => <TodoCard todo={todo} key={todo._id} />)}
        </div>
      </div>
      <Modal isOpen={isOpen} toggle={toggleModal}>
        <ModalHeader>Create New Todo</ModalHeader>
        <ModalBody>
          <TodoForm />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default TodoPage;
