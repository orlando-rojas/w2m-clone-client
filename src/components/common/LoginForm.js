import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export default function LoginForm({ setUserLogged }) {
  const schema = yup.object().shape({
    name: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    validationSchema: schema,
    reValidateMode: "onSubmit",
  });

  async function saveUser(data) {
    try {
      setUserLogged(true);
      console.log(data);
      return;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Form
      className="d-flex flex-column align-items-center justify-content-center pt-3"
      onSubmit={handleSubmit(saveUser)}
      autoComplete="off"
      noValidate
    >
      <h3>Sign In</h3>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Your name: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          ref={register}
          name="username"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password (optional): </Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          ref={register}
          name="password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <small>
        Name/Password are only for this event.
        <br />
        New to this event? Make up a password
        <br />
        Returning? Use the same name/password
      </small>
    </Form>
  );
}
