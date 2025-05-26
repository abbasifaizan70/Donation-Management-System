import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Typography,
  message,
  Card,
  Space,
} from "antd";
import {
  getLocations,
  getThemes,
  getDonationItems,
  createDonationItem,
} from "../api";
import { PlusCircleOutlined } from "@ant-design/icons";
import { createUniqueNameValidator, validateOptionalPositive } from "../utils/validators";

const { Title } = Typography;
const { Option } = Select;

const DonationForm = ({ onSuccess }) => {
  const [form] = Form.useForm();
  const [locations, setLocations] = useState([]);
  const [themes, setThemes] = useState([]);
  const [existingNames, setExistingNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    getLocations().then(setLocations);
    getThemes().then(setThemes);
    getDonationItems().then((items) =>
      setExistingNames(items.map((item) => item.name.toLowerCase()))
    );
  }, []);

  const onFinish = async (values) => {
    const payload = {
      name: values.name.trim(),
      location: values.location,
      theme: values.theme,
    };

    if (values.price !== undefined && values.price !== null) {
      payload.price = {
        currencyCode: "gbp",
        amount: values.price,
      };
    }

    try {
      setLoading(true);
      await createDonationItem(payload);
      messageApi.success("Donation item created successfully!");
      form.resetFields();
      onSuccess?.();
    } catch (err) {
      console.error(err);
      messageApi.error("Failed to create donation item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      style={{ maxWidth: 600, margin: "0 auto", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}
      title={
        <Space>
          <PlusCircleOutlined style={{ color: "#1677ff" }} />
          <Title level={4} style={{ margin: 0 }}>
            Create New Donation Item
          </Title>
        </Space>
      }
    >
      {contextHolder}
      <Form form={form} layout="vertical" onFinish={onFinish} size="middle">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, validator: createUniqueNameValidator(existingNames) }]}
        >
          <Input placeholder="Enter name" />
        </Form.Item>

        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: "Please select a location" }]}
        >
          <Select placeholder="Select location" showSearch>
            {locations.map((loc) => (
              <Option key={loc.id} value={loc.id}>
                {loc.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="theme"
          label="Theme"
          rules={[{ required: true, message: "Please select a theme" }]}
        >
          <Select placeholder="Select theme" showSearch>
            {themes.map((theme) => (
              <Option key={theme.id} value={theme.id}>
                {theme.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="price"
          label="Price (GBP)"
          rules={[{ validator: validateOptionalPositive }]}
        >
          <InputNumber
            step={0.01}
            // min={0.01}
            prefix="£" 
            style={{ width: "100%" }}
            placeholder="Optional"
          />
        </Form.Item>

        <Form.Item>
          <div style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default DonationForm;
