import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleLogin } from "../actions/Operation";

const CheckLogin = (props) => {
  const [text, setText] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const { name, value } = e.target;

    setText((text) => {
      return { ...text, [name]: value };
    });
    // console.log(name, value);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">QRLise - task 2</h1>
        <Form className="mt-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username :</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              value={text.username}
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={text.password}
              onChange={handleInput}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if(text.username.trim() === "" || text.password.trim() === ""){
                alert("Please Enter username and password");
                return;
              }
  
              if (text.username === "admin" && text.password === "admin") {
                dispatch(handleLogin());
              }
              setText({
                username: "",
                password: "",
              });
            }}
          >
            Login
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CheckLogin;
