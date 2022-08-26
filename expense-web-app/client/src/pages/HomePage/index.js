import { Container } from '../../global/styles/Global.style'
import Header from "../../components/Header";
import Content from "../../components/Content";
import History from '../../components/History';
import Footer from '../../components/Footer';


const HomePage = () => {
   return (
      <Container>
         <Header />
         <Content />
         <History />
         <Footer />
      </Container>
   )
}

export default HomePage;
