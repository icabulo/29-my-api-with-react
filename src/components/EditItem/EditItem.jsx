import { Button, Modal } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ItemForm } from "../ItemForm";

function EditItem() {
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
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        icon={<FormOutlined />}
        size="small"
      >
        Edit item
      </Button>
      <Modal
        title="Edit this item"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ItemForm />
      </Modal>
    </>
  );
}
export default EditItem;
