import * as React from "react";
import { Button, Tooltip } from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";

interface Message {
  id: number;
  senderId: number;
  senderName: string;
  content: string;
  timestamp: string;
  attachments?: { name: string; url: string }[];
  isVisible: boolean;
}

interface MessagesProps {
  messages: Message[];
  currentUser: { id: number; name: string };
  onToggleVisibility: (messageId: number) => void;
}

const Messages: React.FunctionComponent<MessagesProps> = ({
  messages,
  currentUser,
  onToggleVisibility,
}) => {
  const handleToggleVisibility = (messageId: number) => {
    onToggleVisibility(messageId);
  };

  return (
    <div className="flex-1 overflow-y-auto mb-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex items-start mb-4 ${
            message.senderId === currentUser.id
              ? "justify-end"
              : "justify-start"
          }`}
        >
          {message.senderId !== currentUser.id && (
            <Tooltip
              title={message.isVisible ? "Hide message" : "Show message"}
            >
              <Button
                type="text"
                icon={
                  message.isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                }
                onClick={() => handleToggleVisibility(message.id)}
              />
            </Tooltip>
          )}
          <div
            className={`max-w-xs p-4 rounded-lg shadow ${
              message.senderId === currentUser.id
                ? "bg-slate-200 text-right"
                : "bg-white text-left border border-slate-200"
            }`}
          >
            <div className="mb-2 text-md">{message.content}</div>
            {message.attachments && (
              <div className="mt-2">
                {message.attachments.map((file, index) => (
                  <a
                    key={index}
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-primary underline mb-1"
                  >
                    <PaperClipOutlined /> {file.name}
                  </a>
                ))}
              </div>
            )}
            <div className="mt-4 text-sm">{message.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
