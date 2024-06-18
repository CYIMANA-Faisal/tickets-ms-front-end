import * as React from "react";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface IBreadcrumbProps {}

const BreadcrumbComponent: React.FunctionComponent<IBreadcrumbProps> = (
  props
) => {
  const pathname = usePathname();
  const pathSnippets = pathname.split("/").filter((i) => i);

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link href="/">Home</Link>
    </Breadcrumb.Item>,
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const label = pathSnippets[index];
      return (
        <Breadcrumb.Item key={url}>
          <Link href={url}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Link>
        </Breadcrumb.Item>
      );
    }),
  ];

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
};

export default BreadcrumbComponent;
