import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../global/styles/Global.style";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Row } from "./LoginPage.styled";
import authServices from "../../services/authServices";
import AuthCtx from "../../contexts/Auth/AuthContext";
import actionCreator from "../../utils/actionCreator";
import { LOGIN } from "../../contexts/Auth/AuthType";
import useBoolean from "../../hooks/useBoolean";

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
      console.log(resData);
      const loginAction = actionCreator(LOGIN, resData.data);
      dispatch(loginAction);
      setNoLoading();
      navigate("/");
    } catch (error) {
      setError(error.response.data.msg);
      console.log(error);
      setNoLoading();
    }
  };
  return (
    <Container>
      <Row>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} error={error} isLoading={isLoading} />
      </Row>
    </Container>
  );
};

export default LoginPage;
