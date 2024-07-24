"use client";

import React, { useState } from "react";
import { Button } from "antd";
import CreateTicketModal from "../components/create-ticket-modal.component";

const CreateTicketButton: React.FC = () => {
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
        className="!bg-primary !border-primary !rounded-full !text-white !font-bold !text-sm !py-5 !px-4 !hover:!bg-primary-hover !focus:!bg-primary-hover !focus:!border-primary-hover !focus:!text-white !focus:!font-bold !focus:!text-sm !focus:!py-5 !focus:!px-4"
        onClick={showModal}
      >
        Create Ticket
      </Button>
      <CreateTicketModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default CreateTicketButton;
