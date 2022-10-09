import { Container } from "../../global/styles/Global.style";
import { Main } from "./PageContainer.style";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet-async";
const PageContainer = ({ children, hasFooter = true }) => {
  return (
    <Container>
      <Helmet>
        <title>Expense app</title>
      </Helmet>
      <Main>{children}</Main>
      {hasFooter && <Footer />}
    </Container>
  );
};

export default PageContainer;
