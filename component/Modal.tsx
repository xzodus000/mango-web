import React from "react";
import { Modal } from "antd";
import start_btn from "../public/assets/image.png";
import Image from "next/image";
import ImageUpload from "./ImageUpload";
interface CustomModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <Image
          src={start_btn} // Path relative to the public directory
          alt="start-search"
        ></Image>
      </button>
      <Modal
        title="Basic Modal"
        visible={isModalOpen} // Changed from 'open' to 'visible'
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{ style: { display: "none" } }}
      >
        <ImageUpload />
      </Modal>
    </>
  );
};

export default CustomModal;
