import { Row, OverView } from "./Content.style";
const Content = () => {
  return (
    <Row>
      <h4>Spent this week</h4>
      <OverView>
        <span className="currency">$</span>
        <span className="total-transaction">292</span>
        <span className="decimal">.50</span>
      </OverView>
    </Row>
  );
};

export default Content;
