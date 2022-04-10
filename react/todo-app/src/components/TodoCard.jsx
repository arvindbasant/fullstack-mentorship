import { useEffect, useState } from "react";
import { Card, CardSubtitle, CardTitle, Modal, ModalBody } from "reactstrap";
import { fetchTodoByTodoIdService } from "../services/todoService";
import "./todoCard.css";

const TodoCard = ({ todo }) => {
  const { _id, title, status, createdAt, effort } = todo;
  const dt = new Date(createdAt);
  const [showModal, setShowModal] = useState(false);
  const [fetchingDesc, setFetchingDesc] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (fetchingDesc) {
      async function fetchTodo() {
        const todo = await fetchTodoByTodoIdService(_id);
        setSelectedTodo(todo);
        setFetchingDesc(false);
        setShowModal(true);
      }
      fetchTodo();
    }
  }, [fetchingDesc, _id]);

  return (
    <div className="todo-card" onClick={() => setFetchingDesc(true)}>
      <Card>
        <div>id:{_id}</div>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>Status:{status}</CardSubtitle>
        <div>
          Created At:
          {`${dt.getDate()}/${dt.getMonth()}/${dt.getFullYear()}`}
        </div>
        <div>Effort: {effort}</div>
      </Card>
      <Modal isOpen={showModal} toggle={toggleModal}>
        <ModalBody>{selectedTodo.description}</ModalBody>
      </Modal>
    </div>
  );
};

export default TodoCard;
