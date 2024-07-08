"use client";
import React, { useState } from "react";
import { StyleProvider } from "@ant-design/cssinjs";
import { Layout } from "antd";
import BreadcrumbComponent from "./breadcrumb.component";
import HeaderComponent from "./Header.component";
import SideNav from "./sideNav.component";
import Title from "antd/es/typography/Title";

const { Content } = Layout;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <StyleProvider layer>
      <Layout className="!min-h-screen">
        <SideNav collapsed={collapsed} />
        <Layout>
          <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content className="m-4 !overflow-auto">
            <Title level={5}>Dashboard</Title>
            <BreadcrumbComponent />
            {children}
          </Content>
        </Layout>
      </Layout>
    </StyleProvider>
  );
}
