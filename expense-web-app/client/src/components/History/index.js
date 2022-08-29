import { Container } from "../../global/styles/Global.style";
import { Row } from "./History.style";
import Transaction from "../Transaction";
import useTransaction from "../../hooks/useTransaction";

const History = () => {
  const [state, dispatch] = useTransaction();
  const transList = state.transactions.map((item) => (
    <Transaction key={item.id} item={item} />
  ));
  return (
    <Container>
      <Row>{transList}</Row>
    </Container>
  );
};

export default History;
