import { Card, CardHeader } from "./TransactionCard.style";
import { deleteTransaction } from "../../contexts/GlobalActions";
import useCategories from "../../hooks/useCategories";
import useTransaction from "../../hooks/useTransaction";
import Transaction from "../Transaction";

const TransactionCard = ({ list, actions, date }) => {
  const [dispatch] = useTransaction();
  const categories = useCategories();
  const getTypeCate = (categoryId) => {
    const cat = categories.find((item) => item.id === categoryId);
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
  const transItem = list.map((item) => (
    <Transaction
      key={item.id}
      item={item}
      actions={{ ...actions, removeTrans: () => removeTrans(item) }}
    />
  ));
  return (
    <Card>
      <CardHeader>{date}</CardHeader>
      {transItem.length > 0 && transItem}
    </Card>
  );
};

export default TransactionCard;
