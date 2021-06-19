import { useAuth } from "context/auth-context";
import React, { FormEvent } from "react";
import { Form, Input, Button } from "antd";
import { LongButton } from "unauthenticated-app";
import { useAsync } from "utils/use-async";

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

export const LoginScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { login, user } = useAuth();
  const { run, isLoading } = useAsync();

  const handleSubmit = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      await run(login(values));
    } catch (e) {
      onError(e);
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      {/* <div
        children={
          <>
            <label htmlFor="username">用户名</label>
            <Input type="text" id={"username"} />
          </>
        }
      /> */}
      <Form.Item
        name="password"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType={"submit"} type={"primary"} loading={isLoading}>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  );
};
