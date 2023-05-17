import { Button, Modal } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ListForm } from "../ListForm";

function EditList() {
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
        icon={<FormOutlined />}
        size="small"
      >
        Edit
      </Button>
      <Modal
        title="List name"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ListForm />
      </Modal>
    </div>
  );
}
export default EditList;
