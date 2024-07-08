"use client";
import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, Upload, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import NotificationComponent from "./notification.component";
import { NotificationProps } from "../../libs/types";
import { useCreateTicketMutation } from "../../libs/features/api/endpoints/tickets.endpoints";

const { Option } = Select;

interface CreateTicketModalProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const CreateTicketModal: React.FC<CreateTicketModalProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  const [form] = Form.useForm();
  const [createTicket] = useCreateTicketMutation();

  const openNotificationWithIcon = ({
    type,
    message,
    description,
    placement = "topRight",
  }: NotificationProps) => {
    notification[type]({
      message,
      description,
      placement,
    });
  };

  const onOk = () => {
    form
      .validateFields()
      .then((values) => {
        const newTicketData = {
          ...values,
          customerID: 564,
          company: "traversal",
          uploads: [],
        };
        console.log("Form values:", newTicketData);
        // Call the createTicket mutation function
        createTicket(newTicketData)
          .then(() => {
            openNotificationWithIcon({
              type: "success",
              message: "Ticket Created",
              description: "Your ticket has been created successfully.",
            });
            handleOk();
          })
          .catch((error) => {
            console.error("Error creating ticket:", error);
            openNotificationWithIcon({
              type: "error",
              message: "Ticket Creation Failed",
              description: "There was an error creating your ticket.",
            });
          });
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <>
      <NotificationComponent />
      <Modal
        title="Create New Ticket"
        open={isModalOpen}
        onOk={onOk}
        onCancel={handleCancel}
        className="custom-modal !w-[60%] !h-auto"
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
            className="!bg-gray-300 !border !border-gray-400 !rounded-full !text-black !font-bold !text-sm !py-5 !px-4 !hover:!bg-gray-400 !hover:!text-white"
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={onOk}
            className="!bg-primary !border-primary !rounded-full !text-white !font-bold !text-sm !py-5 !px-4 !hover:!bg-blue-600 !focus:!bg-blue-600 !focus:!border-blue-600"
          >
            Create
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical" className="space-y-4 !my-4">
          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: "Please input the subject!" }]}
          >
            <Input className="!w-full !p-2 !border !rounded-md !border-gray-300" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Please input the description!" },
            ]}
          >
            <Input.TextArea
              rows={4}
              className="!w-full !p-2 !border !rounded-md !border-gray-300"
            />
          </Form.Item>
          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: "Please input the location!" }]}
          >
            <Input className="!w-full !p-2 !border !rounded-md !border-gray-300" />
          </Form.Item>
          <Form.Item
            name="severity"
            label="Severity"
            rules={[{ required: true, message: "Please select the severity!" }]}
          >
            <Select>
              <Option value="normal">Normal</Option>
              <Option value="high">High</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="uploads"
            label="Uploads"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          >
            <Upload
              // action="http://example.com/upload"
              listType="text"
              fileList={[]}
              onChange={(info) => {
                // Handle file list change if needed
              }}
              onRemove={(file) => {
                // Handle file removal from fileList
                // This function will be called when clicking the delete (cross) button
              }}
            >
              <Button
                icon={<UploadOutlined />}
                className="!bg-gray-300 !text-black"
              >
                Upload
              </Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CreateTicketModal;
