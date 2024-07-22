"use client";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../libs/store"; // Adjust the import path
import { useGetTicketsQuery } from "../../libs/features/api/endpoints/tickets.endpoints";
import Ticket from "./ticket.component";
import { ITicket } from "../../libs/types";
import useMqtt from "../hooks/useMqtt";
import { addTicket, removeTicket } from "../../libs/features/tickets/ticketsSlice"; // Adjust the import path
import handle from "mqtt/lib/handlers/index";

const Tickets: React.FC = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state: RootState) => state.tickets.tickets);
  const { data, error, isLoading } = useGetTicketsQuery({});

  useEffect(() => {
    if (data) {
      data.items.forEach((ticket: ITicket) => {
        dispatch(addTicket(ticket));
      });
    }
  }, [data, dispatch]);

  const handleNewTicket = useCallback(
    (message: string) => {
      console.log("New ticket message:", message);
      try {
        const newTicket: ITicket = JSON.parse(message); // Adjust based on the message format
        dispatch(addTicket(newTicket));
      } catch (error) {
        console.error("Failed to parse new ticket message", error);
      }
    },
    [dispatch]
  );

  const handleAttendedTicket = useCallback(
    (message: string) => {
      console.log("Attended ticket message:", message);
      try {
        const attendedTicket: ITicket = JSON.parse(message); // Adjust based on the message format
        dispatch(removeTicket(attendedTicket.id));
      } catch (error) {
        console.error("Failed to parse attended ticket message", error);
      }
    },
    [dispatch]
  );

  useMqtt({
    topic: "ticket-ms/chanels/new-tickets",
    onMessage: handleNewTicket,
  });

  useMqtt({
    topic: "ticket-ms/chanels/attend-tickets",
    onMessage: handleAttendedTicket,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading tickets: {error.toString()}</div>;
  }

  return (
    <div className="h-[80%] w-full overflow-auto mt-5">
      <Ticket
          key={Math.random()}
          id={Math.random()}
          referenceID="REFERENCE ID"
          subject="SUBJECT"
          meterNumber="METER NUMBER"
          isHeader={true}
        />
      {tickets.map((ticket: ITicket) => (
        <Ticket
          key={ticket.id}
          id={ticket.id}
          referenceID={ticket.referenceID}
          subject={ticket.subject}
          meterNumber={ticket.meterNumber}
          isHeader={false}
        />
      ))}
    </div>
  );
};

export default Tickets;
