import React from "react";
import { Statistic, Card } from "antd";

interface IStatisticsComponentProps {
  title: string;
  value: number | string;
  suffix?: string;
  prefix?: React.ReactNode;
}

const StatisticsComponent: React.FC<IStatisticsComponentProps> = ({
  title,
  value,
  suffix,
  prefix,
}) => {
  return (
    <Card className="rounded-lg shadow-md">
      <Statistic
        title={title}
        value={value}
        suffix={suffix}
        prefix={prefix}
        className="!text-center !text-md"
      />
    </Card>
  );
};

export default StatisticsComponent;
