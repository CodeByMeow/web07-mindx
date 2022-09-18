import { Container } from "../../global/styles/Global.style";
import { Row, Form, BtnSubmit } from "./LoginPage.styled";
import { useFormik } from "formik";

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });
  return (
    <Container>
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
          <div className="form-field">
            <BtnSubmit type="submit">Login</BtnSubmit>
          </div>
        </Form>
      </Row>
    </Container>
  );
};

export default LoginPage;
