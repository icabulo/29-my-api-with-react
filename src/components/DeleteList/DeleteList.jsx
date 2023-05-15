import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

function DeleteList() {
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
        icon={<DeleteOutlined style={{ fontSize: "1rem" }} />}
        danger
        size="small"
      >
        Delete
      </Button>
      <Modal
        title="CAUTION"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Confirm permanent delete by clicking ok</p>
      </Modal>
    </div>
  );
}
export default DeleteList;
