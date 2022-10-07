import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { Container } from "../../global/styles/Global.style";
import { Row } from "./RegisterPage.styled";
import userService from "../../services/userService";
import { useState } from "react";
import useBoolean from "../../hooks/useBoolean";
const { Text } = Typography;

const RegisterPage = () => {
  const [error, setError] = useState(null);
  const {
    value: isLoading,
    setTrue: setLoading,
    setFalse: setNoLoading,
  } = useBoolean(false);
  const onFinish = async (values) => {
    console.log(values);
    try {
      setLoading();
      const res = await userService.create(values);
      //Dispatch here
    } catch (error) {
      setError(error.response.data.msg);
      setNoLoading();
    }
  };
  return (
    <Container>
      <Row>
        <h1>Register</h1>
        <Form name="register-frm" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirm-password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm your password"
            />
          </Form.Item>
          {error && (
            <Form.Item style={{ textAlign: "center", width: "100%" }}>
              <Text type="danger">{error}</Text>
            </Form.Item>
          )}

          <Form.Item style={{ textAlign: "center" }}>
            <Button
              type="primary"
              htmlType="submit"
              shape="round"
              loading={isLoading}
              style={{ width: "100%" }}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </Container>
  );
};

export default RegisterPage;
