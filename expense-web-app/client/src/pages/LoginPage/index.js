import { useState } from "react";
import { Container } from "../../global/styles/Global.style";
import { Row, Form, BtnSubmit } from "./LoginPage.styled";
import { useFormik } from "formik";
import authServices from "../../services/authServices";
import { STATUS } from "../../constants/statusServiceApi";
import localStorage from "../../utils/localStorage";

const LoginPage = () => {
  const [error, setError] = useState();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      authServices.login(values).then((res) => {
        switch (res.data.status) {
          case STATUS.FAILED:
          case STATUS.MISSING:
            setError(res.data.msg);
            break;
          case STATUS.OK:
            setError(null);
            saveToken(res.data.token);
            break;
          default:
            throw Error;
        }
      });
    },
  });
  const saveToken = (token) => {
    localStorage.set("expenseToken", token);
  };
  return (
    <Container>
      <Row>
        <h1>Access to dashboard</h1>
      </Row>
      <Row>
        <Form onSubmit={formik.handleSubmit}>
          <div className="form-field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="passoword"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          {error && (
            <h5 style={{ textAlign: "center", color: "red", fontSize: "1em" }}>
              {error}
            </h5>
          )}
          <div className="form-field">
            <BtnSubmit type="submit">Login</BtnSubmit>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default LoginPage;
