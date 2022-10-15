import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Form, Button, Typography, Input } from "antd";

const { Text } = Typography;

const LoginForm = ({ onSubmit, error, isLoading }) => {
  const onFinish = (values) => {
    onSubmit(values);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        wrapperCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        wrapperCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined />} placeholder="Password" />
      </Form.Item>
      {error && (
        <Text type="danger" style={{ textAlign: "center" }}>
          {error}
        </Text>
      )}

      <Form.Item wrapperCol={{ span: 24 }}>
        <Button
          type="primary"
          htmlType="submit"
          className="btn-login"
          loading={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
