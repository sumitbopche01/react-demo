import React, { useState } from "react";
import {
  FormContent,
  FormLabel,
  FormInput,
  FormButton,
  Container,
  FormWrap,
  FormH1,
  Text,
  Form,
  Icon,
} from "../FormElements";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
  }

  function login() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    };

    fetch("http://localhost:3001/api/v1/login", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          history.push("/home");
          window.sessionStorage.setItem("token", data.token);
          console.log("token data ", window.sessionStorage.getItem("token"));
        }
      });
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Anyfin</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Username</FormLabel>
              <FormInput
                type="text"
                required
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
              <FormButton type="submit" onClick={login}>
                Sign In
              </FormButton>
              <Text>Forgot password</Text>
              <a href="/signup">
                <Text>Sign Up</Text>
              </a>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
