const TodoCard = ({ todo }) => {
  const { id, title, status } = todo;
  return (
    <div>
      <div>id:{id}</div>
      <div>title:{title}</div>
      <div>status:{status}</div>
    </div>
  );
};

export default TodoCard;
