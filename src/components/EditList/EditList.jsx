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
  return (
    <>
      <Button type="primary" onClick={showModal} icon={<FormOutlined />}>
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
    </>
  );
}
export default EditList;
