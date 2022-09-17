import { RiInboxFill, RiBarChartBoxLine, RiSettingsLine } from "react-icons/ri";
import { Container, Row, Nav, NavIcon } from "./Footer.style";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Nav>
          <NavIcon to="/" end>
            <RiInboxFill />
          </NavIcon>
          <NavIcon to="/chart" end>
            <RiBarChartBoxLine />
          </NavIcon>
          <NavIcon to="/login" end>
            <RiSettingsLine style={{ transform: "rotateZ(30deg)" }} />
          </NavIcon>
        </Nav>
      </Row>
    </Container>
  );
};

export default Footer;
