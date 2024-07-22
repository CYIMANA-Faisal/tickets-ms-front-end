// src/app/components/Ticket.tsx
"use client";
import React from "react";
import { Button } from "antd";
import { useAttendTicketMutation } from "../../libs/features/api/endpoints/tickets.endpoints";

interface TicketProps {
  id: number
  referenceID: string;
  subject: string;
  meterNumber: string;
  isHeader?: boolean;
}

const Ticket: React.FC<TicketProps> = ({
  id,
  referenceID,
  subject,
  meterNumber,
  isHeader,
}) => {
  const [attendTicket, { isLoading }] = useAttendTicketMutation();

  const handleAttend = () => {
    attendTicket({
      id: id,
      data: {
        supportStaffID: 234,
        company: "chanels",
      }
    }).unwrap()
      .then((response) => {
        console.log("Ticket attended successfully", response);
      })
      .catch((error) => {
        console.error("Error attending ticket", error);
      });
  };

  return (
    <div className={`bg-white flex items-center justify-between py-3 px-6 mt-3 `}>
      <h3 className="text-md font-bold w-[10%]">{referenceID}</h3>
      <h3 className="text-md font-bold">{subject}</h3>
      <p className="w-[30%] font-bold">{meterNumber}</p>
      <div className="w-[10%] flex justify-end">
        {!isHeader && (
          <Button
            className="!text-primary !border !border-primary !rounded-full"
            onClick={handleAttend}
            disabled={isLoading}
          >
            {isLoading ? "Attending..." : "Attend"}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Ticket;
