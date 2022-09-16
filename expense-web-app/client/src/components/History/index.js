import { AnimatePresence } from "framer-motion";
import { Container } from "../../global/styles/Global.style";
import { Row } from "./History.style";
import EmptyBlock from "../EmptyBlock";
import TransactionCard from "../TransactionCard";
import useTransaction from "../../hooks/useTransaction";
import { groupBy } from "../../utils/handleArray";
import { useEffect, useState } from "react";

const History = ({ actions }) => {
  const [state] = useTransaction();
  const trans = state.transactions;
  const [group, setGroup] = useState({});
  const [card, setCard] = useState([]);

  useEffect(() => setGroup(() => groupBy(trans, "date")), [trans]);
  useEffect(() => {
    const cards = Object.entries(group).map(([key, item]) => (
      <TransactionCard list={item} key={key} date={key} actions={actions} />
    ));
    setCard(cards);
  }, [group]);

  return (
    <Container>
      <Row>
        <AnimatePresence>
          {card.length > 0 ? card : <EmptyBlock />}
        </AnimatePresence>
      </Row>
    </Container>
  );
};

export default History;
