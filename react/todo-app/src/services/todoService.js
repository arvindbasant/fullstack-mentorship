import axios from "axios";

const fetchTodoService = async (userId) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3001/todo/user/${userId}`
    );
    console.log({ data });
    return data;
  } catch (error) {}
};

const fetchTodoByTodoIdService = async (todoId) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/todo/${todoId}`);
    console.log({ data });
    return data;
  } catch (error) {}
};

export { fetchTodoService, fetchTodoByTodoIdService };
