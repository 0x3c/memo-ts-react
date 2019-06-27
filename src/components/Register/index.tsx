import React, { useState } from "react";
import { RegisterProps } from "./index.d";
import "./index.css";
import { auth } from "../../utils/api";

type InputValueType = string | undefined;

const Register = (props: RegisterProps) => {
  const [username, setUsr] = useState(undefined as InputValueType);
  const [password, setPsw] = useState(undefined as InputValueType);

  const signUpHandler = async () => {
    const info = await auth.signUp({ username, password });
    if (info.ok) {
      props.history.push("/login");
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
        <a href="/login">sign in</a>
        <button onClick={signUpHandler}>注册</button>
      </div>
    </div>
  );
};
export default Register;
