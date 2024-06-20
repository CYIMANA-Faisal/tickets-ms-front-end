"use client";
import * as React from "react";
import { Card, Statistic, Table, Tag } from "antd";
import {
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import StatisticsComponent from "../components/statistics.component";

const data = {
  totalTickets: 120,
  openTickets: 30,
  closedTickets: 90,
  averageResolutionTime: "2 hours",
  customerSatisfaction: 4.5,
};

const ticketsByCategory = [
  { name: "Technical", value: 40 },
  { name: "Billing", value: 20 },
  { name: "Account", value: 30 },
  { name: "Other", value: 30 },
];

const ticketsOverTime = [
  { date: "2024-06-01", tickets: 5 },
  { date: "2024-06-02", tickets: 10 },
  { date: "2024-06-03", tickets: 8 },
  { date: "2024-06-04", tickets: 12 },
  { date: "2024-06-05", tickets: 15 },
];

const recentTickets = [
  {
    id: 1,
    customer: "Alice",
    status: "Open",
    priority: "High",
    date: "2024-06-05",
  },
  {
    id: 2,
    customer: "Bob",
    status: "Closed",
    priority: "Medium",
    date: "2024-06-04",
  },
  {
    id: 3,
    customer: "Charlie",
    status: "Open",
    priority: "Low",
    date: "2024-06-03",
  },
  {
    id: 4,
    customer: "Dave",
    status: "Closed",
    priority: "High",
    date: "2024-06-02",
  },
];

export default async function Page() {
  const columns = [
    {
      title: "Ticket ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag color={status === "Open" ? "red" : "green"}>
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority: string) => {
        let color;
        if (priority === "High") color = "red";
        else if (priority === "Medium") color = "orange";
        else color = "green";
        return <Tag color={color}>{priority.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];
  return (
    <div className="flex flex-col space-y-4 pt-3">
      <div className="grid grid-cols-5 gap-2">
        <StatisticsComponent
          title="Total Tickets"
          value={data.totalTickets}
          suffix=" tickets"
        />
        <StatisticsComponent
          title="Open Tickets"
          value={data.openTickets}
          suffix=" tickets"
        />
        <StatisticsComponent
          title="Closed Tickets"
          value={data.closedTickets}
          suffix=" tickets"
        />
        <StatisticsComponent
          title="Average Resolution Time"
          value={data.averageResolutionTime}
        />
        <StatisticsComponent
          title="Customer Satisfaction"
          value={data.customerSatisfaction}
          suffix="/ 5"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="rounded-lg">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Tickets by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ticketsByCategory}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                >
                  {ticketsByCategory.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"][index % 4]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="rounded-lg">
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Tickets Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={ticketsOverTime}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="tickets"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      <Card title="Recent Tickets" className="!text-md !mt-3">
        <Table
          dataSource={recentTickets}
          columns={columns}
          pagination={false}
        />
      </Card>
    </div>
  );
}
