import React from "react";
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      {error && (
        <Text type="danger" style={{ textAlign: "center" }}>
          {error}
        </Text>
      )}

      <Form.Item>
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
