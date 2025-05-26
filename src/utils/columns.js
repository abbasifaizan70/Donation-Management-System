import { Tag } from "antd";
import { statusColorMap } from "./helpers";

export const getDonationColumns = () => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    responsive: ["xs", "sm", "md", "lg", "xl"],
  },
  {
    title: "Reference",
    key: "reference",
    render: (_, record) => record.reference?.text ?? "—",
    responsive: ["md", "lg", "xl"],
  },
  {
    title: "Price (£)",
    key: "price",
    render: (_, record) => record.price?.text ?? "—",
    responsive: ["sm", "md", "lg", "xl"],
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => {
      const statusName = record.status?.name ?? "—";
      const statusId = record.status?.id;
      return (
        <Tag color={statusColorMap[statusId] || "default"}>
          {statusName}
        </Tag>
      );
    },
    responsive: ["xs", "sm", "md", "lg", "xl"],
  },
  {
    title: "Location",
    key: "location",
    render: (_, record) => record.location?.name ?? "—",
    responsive: ["md", "lg", "xl"],
  },
  {
    title: "Theme",
    key: "theme",
    render: (_, record) => record.theme?.name ?? "—",
    responsive: ["md", "lg", "xl"],
  },
];
