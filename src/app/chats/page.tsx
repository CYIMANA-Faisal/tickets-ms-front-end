"use client";
import * as React from "react";
import { Input, Button, Avatar, Upload } from "antd";
import Messages from "../components/messages.components";
import {
  PlusOutlined,
  SendOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";

const chats = [
  { id: 1, name: "Faisal", date: "2020-04-21", status: "Open" },
  { id: 1, name: "Faisal", date: "2020-04-21", status: "Open" },
  { id: 3, name: "Bob", date: "2020-04-23", status: "Open" },
  { id: 2, name: "Alice", date: "2020-04-22", status: "Closed" },
  { id: 3, name: "Bob", date: "2020-04-23", status: "Open" },
];

const Page: React.FunctionComponent = () => {
  const [selectedChat, setSelectedChat] = React.useState(chats[0]);
  const [messages, setMessages] = React.useState([
    {
      id: 1,
      senderId: 1,
      senderName: "C.faisal",
      content:
        "Hello @chanels, Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      timestamp: "2024-05-23 08:00 PM",
      attachments: [
        {
          name: "https://drive.google.com/file/d/14hYIN2NZCI6JZsmF0tIXdxar1UmWpNAv/view?usp=drive_link",
          url: "https://drive.google.com/file/d/14hYIN2NZCI6JZsmF0tIXdxar1UmWpNAv/view?usp=drive_link",
        },
      ],
      isVisible: true,
    },
    {
      id: 2,
      senderId: 2,
      senderName: "chanels",
      content:
        "Hey Faisal! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: "2024-05-23 08:05 PM",
      isVisible: true,
    },
    {
      id: 3,
      senderId: 1,
      senderName: "C.faisal",
      content:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      timestamp: "2024-05-23 08:10 PM",
      isVisible: true,
    },
  ]);

  const currentUser = {
    id: 1,
    name: "C.faisal",
  };

  const handleToggleVisibility = (messageId: number) => {
    const updatedMessages = messages.map((message) =>
      message.id === messageId
        ? { ...message, isVisible: !message.isVisible }
        : message
    );
    setMessages(updatedMessages);
  };

  return (
    <div className="flex h-screen pt-3 gap-3">
      <div className="bg-white w-[30%] h-full p-4">
        <h2 className="text-lg font-semibold mb-4">Chats</h2>
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search"
            className="text-md !rounded-full !p-2 !border !border-slate-200 !w-full !h-11 !bg-white !text-black !placeholder-gray-500 !focus:outline-none !focus:ring-2 !focus:ring-blue-500 text-center"
          />
        </div>
        <div className="mb-4">
          <div className="flex gap-2">
            <button className="rounded-full px-4 py-1 border border-gray-300 hover:bg-blue-100 hover:border-blue-200">
              All
            </button>
            <button className="rounded-full px-4 py-1 border border-gray-300 hover:bg-blue-100 hover:border-blue-200">
              Open
            </button>
            <button className="rounded-full px-4 py-1 border border-gray-300 hover:bg-blue-100 hover:border-blue-200">
              Closed
            </button>
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100%-200px)]">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center justify-between mb-2 p-2 hover:bg-gray-100 cursor-pointer rounded ${
                selectedChat.id === chat.id ? "bg-gray-200" : ""
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="flex items-center gap-2">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUzn-f5EWBRa42Qu-eno0jjBy2_WNvlxIRg&s"
                  className=""
                  icon={<UserOutlined />}
                />
                <div>
                  <div className="font-semibold">{chat.name}</div>
                  <div className="text-sm text-gray-500">{chat.date}</div>
                </div>
              </div>
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  chat.status === "Open"
                    ? "bg-blue-100 text-blue-500"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {chat.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white w-[70%] h-full p-4 flex flex-col relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Messages</h2>
          <div className="flex gap-3">
            <Button
              type="primary"
              className="!bg-primary !text-white !rounded-full"
              icon={<PlusOutlined />}
            >
              Add People
            </Button>
            <Button
              type="primary"
              className="!bg-red-400 !text-white !rounded-full"
            >
              Close
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto mb-16">
          <Messages
            messages={messages}
            currentUser={currentUser}
            onToggleVisibility={handleToggleVisibility}
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full bg-white p-4 border-t border-gray-300 flex items-center">
          <Upload className="!mr-2">
            <Button icon={<UploadOutlined />} />
          </Upload>
          <Input
            type="text"
            placeholder="Type here"
            className="flex-1 !rounded-full !p-2 !border !border-gray-300 !bg-gray-100 !text-black !placeholder-gray-500 !focus:outline-none !focus:ring-2 !focus:ring-blue-500"
          />
          <Button
            type="primary"
            shape="circle"
            icon={<SendOutlined />}
            className="!bg-blue-500 !text-white !rounded-full ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
