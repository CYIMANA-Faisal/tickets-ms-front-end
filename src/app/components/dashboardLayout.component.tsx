"use client";
import React, { useState } from "react";
import { StyleProvider } from "@ant-design/cssinjs";
import { Layout } from "antd";
import BreadcrumbComponent from "./breadcrumb.component";
import HeaderComponent from "./Header.component";
import SideNav from "./sideNav.component";

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
          <Content className="m-4 p-6">
            <BreadcrumbComponent />
            {children}
          </Content>
        </Layout>
      </Layout>
    </StyleProvider>
  );
}
