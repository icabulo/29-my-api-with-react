import { Button, Modal } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import PropTypes from "prop-types";

function DeleteList({ idlist, monitorLists }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const { token: tokenLS } = JSON.parse(localStorage.getItem("user"));

  const deleteList = async (token, id) => {
    try {
      const request = await fetch(`http://localhost:5000/api/favs/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await request.json();
      if (data) {
        console.log("LIST DELETED!!", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOk = async () => {
    await deleteList(tokenLS, idlist);
    await monitorLists();
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

DeleteList.propTypes = {
  idlist: PropTypes.number,
  monitorLists: PropTypes.func,
};

export default DeleteList;
