import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import useBoolean from "../../hooks/useBoolean";

import LoginForm from "../../components/LoginForm/LoginForm";
import PageContainer from "../../components/PageContainer/PageContainer";
import authServices from "../../services/authServices";
import AuthCtx from "../../contexts/Auth/AuthContext";
import actionCreator from "../../utils/actionCreator";
import { Row } from "./LoginPage.styled";
import { LOGIN } from "../../contexts/Auth/AuthType";

const LoginPage = () => {
  const { dispatch } = useContext(AuthCtx);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {
    value: isLoading,
    setTrue: setLoading,
    setFalse: setNoLoading,
  } = useBoolean(false);
  const onSubmit = async (data) => {
    try {
      setLoading();
      const resData = await authServices.login(data);
      const loginAction = actionCreator(LOGIN, resData.data);
      dispatch(loginAction);
      setNoLoading();
      navigate("/");
    } catch (error) {
      setError(error.response.data.msg);
      setNoLoading();
    }
  };
  return (
    <PageContainer hasFooter={false}>
      <Row>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} error={error} isLoading={isLoading} />
        <Link to="/register">Don't have account? Register here</Link>
      </Row>
    </PageContainer>
  );
};

export default LoginPage;
