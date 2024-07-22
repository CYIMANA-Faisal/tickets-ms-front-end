"use client";
import React from "react";
import { ReloadOutlined } from "@ant-design/icons";

const ReloadTickets = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div>
      <ReloadOutlined
        className="!bg-primary !border-primary !rounded-full !text-white !font-bold !text-sm !py-3 !px-3 !hover:!bg-primary-hover !focus:!bg-primary-hover !focus:!border-primary-hover !focus:!text-white !focus:!font-bold !focus:!text-sm !focus:!py-3 !focus:!px-3"
        onClick={handleReload}
      />
    </div>
  );
};

export default ReloadTickets;
