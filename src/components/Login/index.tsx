import React, { useState } from "react";
import { LoginProps } from "./index.d";
import { auth } from "../../utils/api";
import { setAuth } from "../../utils/Header";
import "./index.css";

type InputValueType = string | undefined;

const Login = (props: LoginProps) => {
  const [username, setUsr] = useState(undefined as InputValueType);
  const [password, setPsw] = useState(undefined as InputValueType);
  const loginHandler = async () => {
    const info = await auth.login({ username, password });
    if (info.ok) {
      setAuth(info.data.token);
      props.history.push("/");
    }
  };
  return (
    <div className="loginWrapper">
      <div>
        <input
          name="username"
          value={username}
          onChange={e => setUsr(e.target.value)}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPsw(e.target.value)}
        />
      </div>

      <div>
        <a href="/register">注册</a>
        <button onClick={loginHandler}>login</button>
      </div>
    </div>
  );
};
export default Login;
