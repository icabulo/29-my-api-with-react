import { Button, Modal, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ListForm } from "../ListForm";
import { ItemForm } from "../ItemForm";

function CreateList() {
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
        <Divider orientation="right">List</Divider>
        <ListForm />
        <Divider orientation="right">Item Details</Divider>
        <ItemForm />
      </Modal>
    </div>
  );
}
export default CreateList;
