import "./login.scss";
import { Button, Checkbox, Form, Input, Modal, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { Signup } from "../Signup";
import { API_url } from "../../../API_URL";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { username: email, password } = values;
    const request = await fetch(`${API_url}/user/auth/local/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    const { token } = data;
    // user file in localStorage will save error or token depending on the data from the request
    localStorage.setItem("user", JSON.stringify(data));

    if (token) {
      navigate("/favs");
    } else {
      //IIFE to alert the user of invalid credentials
      (() => {
        Modal.warning({
          title: "Try Again",
          content: "Invalid credentials",
        });
      })();
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="login-form"
    >
      <Form.Item
        label="User email"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Signup className="signup-btn" />

      <Space direction="horizontal">
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Space>
    </Form>
  );
};

export default Login;
