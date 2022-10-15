import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Form, Input, Typography } from "antd";
import { Container } from "../../global/styles/Global.style";
import { Row } from "./RegisterPage.styled";
import userServices from "../../services/userServices";
import { useState } from "react";
import useBoolean from "../../hooks/useBoolean";
const { Text } = Typography;

const RegisterPage = () => {
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);
  const {
    value: isLoading,
    setTrue: setLoading,
    setFalse: setNoLoading,
  } = useBoolean(false);

  const onFinish = async (values) => {
    try {
      setLoading();
      const res = await userServices.create(values);
      setUserId(res.data);
      setNoLoading();
    } catch (error) {
      setError(error.response.data.msg);
      setNoLoading();
    }
  };
  if (userId)
    return (
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "var(--green)" }}>Register successful</h2>
        <Link to="/login">Login now</Link>
      </div>
    );

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

        <Link to="/login">Have account? Login here</Link>
      </Row>
    </Container>
  );
};

export default RegisterPage;
