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
    {
      key: "home",
      title: <Link href="/">Home</Link>,
    },
    ...pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      const label = pathSnippets[index];
      return {
        key: url,
        title: (
          <Link href={url}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Link>
        ),
      };
    }),
  ];

  return <Breadcrumb items={breadcrumbItems} />;
};

export default BreadcrumbComponent;
