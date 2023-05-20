import { Button, Modal, Divider, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ListForm } from "../ListForm";
import { ItemForm } from "../ItemForm";
import PropTypes from "prop-types";
import { API_url } from "../../../API_URL";

function CreateList({ monitorLists }) {
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

  const { token: tokenLS } = JSON.parse(localStorage.getItem("user"));
  const newList = async (body, token) => {
    try {
      const request = await fetch(`${API_url}/api/favs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const data = await request.json();
      if (data.error) {
        (() => {
          Modal.warning({
            title: "Error",
            content: "List name already exist",
          });
        })();
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const newItem = async (body, token, id) => {
    try {
      await fetch(`${API_url}/item/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.log(error);
      ((info) => {
        Modal.warning({
          title: "Error",
          content: info,
        });
      })(error);
    }
  };

  const handleSubmit = async (values) => {
    const { name, title, description, link } = values;
    const listBody = { name, user_iduser: 1 };
    const itemBody = { title, description, link };
    const currentList = await newList(listBody, tokenLS);
    const { idlist } = currentList;
    await newItem(itemBody, tokenLS, idlist);
    monitorLists();
  };

  return (
    <div onClick={preventPropagation}>
      <Button
        type="primary"
        onClick={showModal}
        icon={<PlusOutlined style={{ fontSize: "1rem" }} />}
        shape="round"
        size="default"
        style={{ background: "#00b96b" }}
      >
        Create a list
      </Button>
      <Modal
        title="NEW LIST"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={handleSubmit}>
          <Divider orientation="right">List</Divider>
          <ListForm />
          <Divider orientation="right">Item Details</Divider>
          <ItemForm />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

CreateList.propTypes = {
  monitorLists: PropTypes.func,
};

export default CreateList;
