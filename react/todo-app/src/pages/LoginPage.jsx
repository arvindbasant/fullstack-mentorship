import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import loginService from "../services/loginService";

/**
 * data for component -> state of component
 *
 * username
 * password
 * isValidForm -> len 5 - alpha numeric - one special char - regex
 *success or error validation message

 useState -> hook for creating component level state/data -> accessible within the comp
 */

const LoginPage = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = useState({
    username: "",
    password: "",
    isValid: false,
    validationMessage: "",
  });

  const handleOFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = async () => {
    const { username, password } = form;
    if (username && password) {
      const { message } = await loginService(username, password);
      console.log({ message });
      if (message === "success") {
        setForm({ ...form, isValid: true });
      } else {
        setForm({
          ...form,
          isValid: false,
          validationMessage: "username or password is wrong",
        });
      }
    } else {
      setForm({
        ...form,
        isValid: false,
        validationMessage: "please enter username and password",
      });
    }
  };

  const onLoginSubmit = () => {
    validateForm();
    if (form.isValid) {
      // post the data
    }
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col sm={3}>
            <FormGroup>
              <Label for="username">UserName</Label>
              <Input
                onChange={handleOFormChange}
                name="username"
                value={form.username}
              />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                onChange={handleOFormChange}
                name="password"
                value={form.password}
              />
            </FormGroup>
          </Col>
          <Col sm={3}>
            <FormGroup>
              <Button type="button" onClick={onLoginSubmit} color="primary">
                Submit
              </Button>
              <label>
                {!form.isValid ? form.validationMessage : "success"}
              </label>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default LoginPage;
