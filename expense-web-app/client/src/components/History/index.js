import { Container } from "../../global/styles/Global.style";
import { Row } from "./History.style";
import EmptyBlock from "../EmptyBlock";
import Transaction from "../Transaction";
import useTransaction from "../../hooks/useTransaction";
import { deleteTransaction } from "../../contexts/GlobalActions";
import useCategories from "../../hooks/useCategories";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

const History = ({ actions }) => {
  const [state, dispatch] = useTransaction();
  const categorise = useCategories();
  const getTypeCate = (categoryId) => {
    const cat = categorise.find((item) => item.id === categoryId);
    return cat.type;
  };
  const removeTrans = (item) => {
    const transType = getTypeCate(item.category);
    dispatch(
      deleteTransaction({
        ...item,
        type: transType,
      })
    );
  };
  const transList = state.transactions.map((item) => (
    <Transaction
      key={item.id}
      item={item}
      actions={{ ...actions, removeTrans: () => removeTrans(item) }}
    />
  ));
  return (
    <Container>
      <Row>
        <AnimateSharedLayout>
          <AnimatePresence>
            {transList.length > 0 ? transList : <EmptyBlock />}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Row>
    </Container>
  );
};

export default History;
