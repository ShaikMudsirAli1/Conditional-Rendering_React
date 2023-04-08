import React from "react";
import Input from "./Input";

function Login1() {
  return (
    <form className="form">
      <Input type="text" placeholder="UserName" />
      <Input type="password" placeholder="Password" />
      <button id="my-Btn" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login1;
