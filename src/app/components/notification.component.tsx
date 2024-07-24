// src/components/NotificationComponent.tsx
import React from "react";
import { notification } from "antd";
import { NotificationProps } from "../../libs/types";

const NotificationComponent: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  return <>{contextHolder}</>;
};

export default NotificationComponent;
