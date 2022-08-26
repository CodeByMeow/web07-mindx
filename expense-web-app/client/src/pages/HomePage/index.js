import { useState } from "react";
import { Container } from "../../global/styles/Global.style";
import Header from "../../components/Header";
import Content from "../../components/Content";
import History from "../../components/History";
import Footer from "../../components/Footer";
import Popup from "../../components/Popup";

const HomePage = () => {
  const [popup, setPopup] = useState(false);
  const handleShowPopup = () => {
    console.log(popup);
    setPopup(!popup);
  };

  return (
    <Container>
      <Header actions={{ handleShowPopup }} />
      <Content />
      <History />
      <Footer />
      {popup && <Popup actions={{ handleShowPopup }} />}
    </Container>
  );
};

export default HomePage;
