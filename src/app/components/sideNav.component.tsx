import React, { useState } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import {
  BarChartOutlined,
  UnorderedListOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Logo from "./logo.component";

const { Sider } = Layout;

interface MenuItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface SideNavProps {
  collapsed: boolean;
}

const SideNav: React.FC<SideNavProps> = ({ collapsed }) => {
  const [selectedKey, setSelectedKey] = useState("1");

  const handleMenuClick = (key: string) => {
    setSelectedKey(key);
  };

  const items: MenuItem[] = [
    {
      key: "1",
      label: "Overview",
      icon: <BarChartOutlined className="!text-primary !font-bold !text-lg" />,
      href: "/",
    },
    {
      key: "2",
      label: "Tickets",
      icon: (
        <UnorderedListOutlined className="!text-primary !font-bold !text-lg" />
      ),
      href: "/tickets",
    },
    {
      key: "3",
      label: "Chats",
      icon: <MessageOutlined className="!text-primary !font-bold !text-lg" />,
      href: "/chats",
    },
    {
      key: "4",
      label: "Settings",
      icon: <SettingOutlined className="!text-primary !font-bold !text-lg" />,
      href: "/settings",
    },
  ];

  const renderMenuItem = (item: MenuItem) => (
    <Menu.Item
      key={item.key}
      icon={item.icon}
      className={`!text-primary !text-md hover:!text-primary-hover !mb-3 ${
        selectedKey === item.key
          ? "!bg-white border-l-4 border-primary !rounded-none"
          : ""
      }`}
    >
      <Link href={item.href}>{item.label}</Link>
    </Menu.Item>
  );

  return (
    <Sider
      className="!bg-white"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="flex items-center justify-center h-16">
        <Logo />
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[selectedKey]}
        className="!bg-white !mt-4"
        onClick={({ key }) => handleMenuClick(key)}
      >
        {items.map(renderMenuItem)}
      </Menu>
    </Sider>
  );
};

export default SideNav;
