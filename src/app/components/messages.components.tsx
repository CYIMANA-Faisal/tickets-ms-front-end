import * as React from "react";
import { Button, Tooltip } from "antd";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  PaperClipOutlined,
} from "@ant-design/icons";
import { Document, Page } from "@react-pdf/renderer";

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

  const renderAttachmentPreview = (attachment: {
    name: string;
    url: string;
  }) => {
    const fileExtension = attachment.name.split(".").pop()?.toLowerCase();
    console.log(fileExtension);
    if (fileExtension === "pdf") {
      return (
        <Document file={attachment.url}>
          <Page pageNumber={1} width={200} />
        </Document>
      );
    } else if (["jpg", "jpeg", "png", "gif"].includes(fileExtension || "")) {
      return (
        <img
          src={attachment.url}
          alt={attachment.name}
          className="w-full mb-2"
        />
      );
    }
    return null;
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
            {message.attachments && message.attachments.length > 0 && (
              <div className="mb-2">
                {message.attachments.map((attachment, index) => (
                  <div key={index}>
                    {renderAttachmentPreview(attachment)}
                    <a
                      href={attachment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary underline mb-1"
                    >
                      <PaperClipOutlined /> {attachment.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
            <div className="mb-2 text-md">{message.content}</div>
            <div className="mt-4 text-sm">{message.timestamp}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
