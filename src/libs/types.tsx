export interface ITicket {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  referenceID: string;
  subject: string;
  location: string;
  description: string;
  severity: string;
  customerID: number;
  uploads: string[];
  supportStaffID: number;
  internalStaffID: number | null;
  status: string;
}

export interface IApiResponse<T> {
  message: string;
  payload: T;
}

export interface IApiError {
  message: string[];
  error: string;
  statusCode: number;
  timestamp: string;
}

export type NotificationType = "success" | "info" | "warning" | "error";
export type NotificationPlacement =
  | "topRight"
  | "top"
  | "topLeft"
  | "bottom"
  | "bottomLeft"
  | "bottomRight"
  | undefined;

export interface NotificationProps {
  type: NotificationType;
  message: string;
  description: string;
  placement?: NotificationPlacement;
}
