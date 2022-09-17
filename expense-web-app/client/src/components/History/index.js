import { AnimatePresence } from "framer-motion";
import { Container } from "../../global/styles/Global.style";
import { Row } from "./History.style";
import EmptyBlock from "../EmptyBlock";
import TransactionCard from "../TransactionCard";
import useTransaction from "../../hooks/useTransaction";
import { groupBy } from "../../utils/handleArray";
import { useEffect, useState } from "react";
import moment from "moment";

const History = ({ actions }) => {
  const [state] = useTransaction();
  const { transactions: trans } = state;
  const [card, setCard] = useState([]);

  useEffect(() => {
    const sortedTrans = trans.sort(
      (a, b) => moment(b.timestamp) - moment(a.timestamp)
    );
    const group = groupBy(sortedTrans, "date");
    const cards = Object.entries(group).map(([key, item]) => (
      <TransactionCard list={item} key={key} date={key} actions={actions} />
    ));
    setCard(cards);
  }, [state]);

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
