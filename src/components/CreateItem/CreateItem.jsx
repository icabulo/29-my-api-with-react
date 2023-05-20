import { Button, Modal, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ItemForm } from "../ItemForm";
import PropTypes from "prop-types";
import { API_url } from "../../../API_URL";

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
    }
  };

  const handleSubmit = async (values) => {
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
