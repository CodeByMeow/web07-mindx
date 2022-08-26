import { Row, AddButton } from "./Header.style";
const Header = ({ actions }) => {
  return (
    <Row>
      <span onClick={actions.handleShowPopup}>
        <AddButton />
      </span>
    </Row>
  );
};

export default Header;
