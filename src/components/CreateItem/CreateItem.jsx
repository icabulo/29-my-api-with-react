import { Button, Modal, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ItemForm } from "../ItemForm";
import PropTypes from "prop-types";

function CreateItem({ idlist, monitorLists }) {
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

  const newItem = async (body, token, id) => {
    try {
      const request = await fetch(`http://localhost:5000/item/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const data = await request.json();
      if (data) {
        console.log("NEW ITEM CREATED!!", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (values) => {
    console.log("handleSubmit...", values);
    await newItem(values, tokenLS, idlist);
    await monitorLists();
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
        Create an Item
      </Button>
      <Modal
        title="NEW ITEM"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={handleSubmit}>
          <ItemForm />
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

// idlist, monitorLists
CreateItem.propTypes = {
  idlist: PropTypes.number,
  monitorLists: PropTypes.func,
};

export default CreateItem;
