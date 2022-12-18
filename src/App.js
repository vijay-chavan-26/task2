import React, { useEffect } from "react";
import LoginForm from "./Components/LoginForm";
import EmployeeOperation from "./Components/EmployeeOperation";
import { useSelector } from "react-redux";

function App() {
  const isLogin = JSON.parse(useSelector((state) => state.setLogin));
  useEffect(() =>{
    localStorage.setItem("loginStatus", isLogin)
  },[isLogin])
  return (
    <>
      { isLogin !== true ? <LoginForm /> : <EmployeeOperation /> }
    </>
  );
}

export default App;
