import * as React from "react";
import { Avatar, Button, Layout } from "antd";
import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoreOutlined,
  UserOutlined,
} from "@ant-design/icons";

interface IHeaderComponentProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const { Header } = Layout;

const HeaderComponent: React.FunctionComponent<IHeaderComponentProps> = ({
  collapsed,
  setCollapsed,
}) => {
  return (
    <Header className="!p-0 !bg-white flex justify-between items-center">
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        className="!h-16 !text-base !w-16 text-neutral-900"
      />
      <div className="mr-4 flex items-center gap-4 relative">
        <div className="relative">
          <BellOutlined className="!text-2xl text-neutral-900" />
          {/* Red circle overlay */}
          <div className="absolute -top-[-0.80rem] -right-[0.10rem] h-2 w-2 bg-red-500 rounded-full flex items-center justify-center"></div>
          {/* End of red circle */}
        </div>
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUzn-f5EWBRa42Qu-eno0jjBy2_WNvlxIRg&s"
          className=""
          icon={<UserOutlined />}
        />
        <div className="">
          <p className="!text-sm !font-semibold !text-neutral-900">C.Faisal</p>
          <p className="!text-xs !text-primary">Support staff</p>
        </div>
        <MoreOutlined className="!text-2xl !font-bold text-neutral-900" />
      </div>
    </Header>
  );
};

export default HeaderComponent;
