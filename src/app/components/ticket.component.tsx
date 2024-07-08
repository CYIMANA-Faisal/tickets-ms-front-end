import { Button, Tag } from "antd";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";

interface TicketProps {
  id: number;
  referenceID: string;
  subject: string;
  location: string;
  severity: string;
}

const Ticket: React.FC<TicketProps> = ({
  id,
  referenceID,
  subject,
  location,
  severity,
}) => {
  return (
    <div className="bg-white flex items-center justify-between py-3 px-6 mt-3">
      <h3 className="text-md font-bold w-[5%]">{id}</h3>
      <h3 className="text-md font-bold w-[10%]">{referenceID}</h3>
      <p className="text-left w-[50%]">
        <span>Subject: </span>
        {subject}
      </p>
      <p className="w-[10%]">{location}</p>
      <div className="w-[10%]">
        <Tag color={severity === "critical" ? "error" : "default"}>
          {severity}
        </Tag>
      </div>
      <div className="w-[10%] flex justify-end">
        <Button className="!text-primary !border !border-primary !rounded-full">
          Attend
        </Button>
      </div>
    </div>
  );
};

export default Ticket;
