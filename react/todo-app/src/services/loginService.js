import axios from "axios";

const loginService = async (username, password) => {
  try {
    const { data } = await axios.post("http://localhost:3001/login", {
      username,
      password,
    });
    return data;
  } catch (error) {}
};

export default loginService;
