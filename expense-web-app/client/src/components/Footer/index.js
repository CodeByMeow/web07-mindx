import { RiInboxFill, RiBarChartBoxLine, RiSettingsLine } from "react-icons/ri";
import { Container, Row, Nav } from "./Footer.style";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Nav>
          <RiInboxFill className="active" />
          <RiBarChartBoxLine />
          <RiSettingsLine style={{ transform: "rotateZ(30deg)" }} />
        </Nav>
      </Row>
    </Container>
  );
};

export default Footer;
