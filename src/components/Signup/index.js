import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  FormContent,
  FormLabel,
  FormInput,
  FormButton,
  Container,
  FormWrap,
  FormH1,
  Form,
  Icon,
} from "../FormElements";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
  }

  function signup() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };
    fetch("http://localhost:3001/api/v1/signup", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status == true) {
          history.push("/");
        } else {
          alert(data.message);
        }
      });
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Brand</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Create your account</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput
                type="text"
                required
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></FormInput>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></FormInput>
              <FormButton type="submit" onClick={signup}>
                Sign Up
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
