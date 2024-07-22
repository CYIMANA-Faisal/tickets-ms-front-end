"use client";
import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, Upload, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import NotificationComponent from "./notification.component";
import { NotificationProps } from "../../libs/types";
import { useCreateTicketMutation } from "../../libs/features/api/endpoints/tickets.endpoints";
import { RcFile } from "antd/lib/upload/interface";
import axios from 'axios';


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
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

  const createTicketWithAxios = async (formData: any) => {
    try {
      console.log( "url", `${baseURL}/tickets`)
      const response = await axios.post(`${baseURL}/tickets`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Response:', response.data);
      openNotificationWithIcon({
        type: "success",
        message: "Ticket Created",
        description: "Your ticket has been created successfully.",
      });
      handleOk();
      return response.data;
    } catch (error) {
      console.error('Error creating ticket:', error);
      openNotificationWithIcon({
        type: "error",
        message: "Ticket Creation Failed",
        description: "There was an error creating your ticket.",
      });
      throw error; 
    }
  };

  const onOk = () => {
    form
      .validateFields()
      .then((values) => {
        const formData = new FormData();
        formData.append("subject", values.subject);
        formData.append("description", values.description);
        formData.append("meterNumber", values.meterNumber);
        formData.append("customerID", "564");
        formData.append("company", "chanels");

        if (values.uploads) {
          values.uploads.forEach((file: RcFile) => {
            formData.append("uploads", file);
          });
        }

        // Log the FormData entries
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
        createTicketWithAxios(formData)

        // createTicket(formData)
        //   .then(() => {
        //     openNotificationWithIcon({
        //       type: "success",
        //       message: "Ticket Created",
        //       description: "Your ticket has been created successfully.",
        //     });
        //     handleOk();
        //   })
        //   .catch((error) => {
        //     console.error("Error creating ticket:", error);
        //     openNotificationWithIcon({
        //       type: "error",
        //       message: "Ticket Creation Failed",
        //       description: "There was an error creating your ticket.",
        //     });
        //   });
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
            name="meterNumber"
            label="Meter Number"
            rules={[{ required: true, message: "Please select the meter number!" }]}
          >
            <Select
              showSearch
              placeholder="Search to Select"
              optionFilterProp="label"
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              options={[
                { value: '2344', label: 'MT-2344' },
                { value: '4353', label: 'MT-4353' },
                { value: '5423', label: 'MT-5423' },
                { value: '4677', label: 'MT-4677' },
                { value: '6578', label: 'MT-6578' },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="uploads"
            label="Uploads"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          >
            <Upload
              listType="text"
              fileList={[]}
              beforeUpload={() => false} // prevent automatic upload
              onChange={(info) => {
                form.setFieldsValue({ uploads: info.fileList });
              }}
              onRemove={(file) => {
                const newFileList = form.getFieldValue("uploads").filter((item: RcFile) => item.uid !== file.uid);
                form.setFieldsValue({ uploads: newFileList });
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
