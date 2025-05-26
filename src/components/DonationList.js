import React, { useEffect, useState } from "react";
import { Table, Select, Typography, Space, Card } from "antd";
import { getDonationItems, getDonationStatuses } from "../api";
import { getDonationColumns } from "../utils/columns";

const { Title } = Typography;
const { Option } = Select;

const DonationList = () => {
  const [items, setItems] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      getDonationItems().then(setItems),
      getDonationStatuses().then(setStatuses),
    ])
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filteredItems = statusFilter
    ? items.filter((item) => item.status?.name === statusFilter)
    : items;

  const columns = getDonationColumns();

  return (
    <Card
      title={<Title level={4} style={{ marginBottom: 0 }}>All Donation Items</Title>}
      style={{ maxWidth: "100%", margin: "0 auto", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <div>
          <span style={{ marginRight: 8, fontWeight: 500 }}>Filter by Status:</span>
          <Select
            placeholder="Select Status"
            style={{ width: 250 }}
            allowClear
            onChange={(value) => setStatusFilter(value)}
          >
            {statuses.map((status) => (
              <Option key={status.id} value={status.name}>
                {status.name}
              </Option>
            ))}
          </Select>
        </div>

        <Table
          rowKey="id"
          columns={columns}
          dataSource={filteredItems}
          bordered
          loading={loading}
          pagination={{ pageSize: 10 }}
          scroll={{ x: "max-content" }}
        />
      </Space>
    </Card>
  );
};

export default DonationList;
