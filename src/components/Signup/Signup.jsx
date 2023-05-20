import { Button, Modal, Form, Input } from "antd";
import { useState } from "react";
import { API_url } from "../../../API_URL";

function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const preventPropagation = (event) => {
    // If you don't want click extra trigger collapse, you can prevent this:
    event.stopPropagation();
  };

  const handleSubmit = async (values) => {
    const body = values;
    try {
      const request = await fetch(`${API_url}user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await request.json();
      if (data.userEmail) {
        (() => {
          Modal.info({
            title: "ok",
            content: "User created, go to login",
          });
        })();
      } else {
        //IIFE to alert the user of invalid credentials
        ((info) => {
          Modal.warning({
            title: "Singup error",
            content: info,
          });
        })(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={preventPropagation}>
      <Button onClick={showModal} shape="round" size="small">
        Signup
      </Button>
      <Modal
        title="Create your user"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={handleSubmit} name="signup">
          <Form.Item
            label="User email"
            name="email"
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

          <Form.Item
            label="Confirm-Password"
            name="repassword"
            rules={[
              {
                required: true,
                message: "Please input your password confirmation!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Signup;
