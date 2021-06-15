import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";

// interface Base {
//     id:number
// }

// interface Person extends Base {
//     name:string
// }

// const p:person={
//     name:'123',
//     id:123
// }
const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
  const { login, user } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      {user ? <div>登录成功，用户名:{user?.name}</div> : null}
      {/* <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={"username"} />
      </div> */}
      <div children={<><label htmlFor="username" >用户名</label>
            <input type="text" id={'username'}/></>} />
      <div>
        <label htmlFor="password">密码</label>
        <input type="text" id={"password"} />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
};
