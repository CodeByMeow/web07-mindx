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
  const [group, setGroup] = useState({});

  useEffect(() => setGroup(() => groupBy(state.transactions, "date")), []);
  const cards = Object.entries(group).map(([key, item]) => (
    <TransactionCard list={item} key={key} date={key} actions={actions} />
  ));

  return (
    <Container>
      <Row>
        <AnimatePresence>{cards ? cards : <EmptyBlock />}</AnimatePresence>
      </Row>
    </Container>
  );
};

export default History;
