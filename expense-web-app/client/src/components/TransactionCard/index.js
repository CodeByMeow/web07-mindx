import moment from "moment";
import { Card, CardHeader, Day, MonthYear } from "./TransactionCard.style";
import { deleteTransaction } from "../../contexts/GlobalActions";
import useCategories from "../../hooks/useCategories";
import useTransaction from "../../hooks/useTransaction";
import Transaction from "../Transaction";
import { useEffect, useState } from "react";

const TransactionCard = ({ list, actions, date }) => {
  const [_state, dispatch] = useTransaction();
  const categories = useCategories();
  const [dateFormat] = useState(() => {
    const time = moment(date, "DD-MM-YYYY");
    let longday = time.format("dddd");
    if (time.isSame(new Date(), "day")) longday = "today";
    const yesterday = moment().subtract(1, "day");
    if (yesterday.isSame(time, "day")) longday = "yesterday";
    return {
      day: time.format("DD"),
      month: time.format("MM"),
      year: time.format("YYYY"),
      longDay: longday,
    };
  });
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
  useEffect(() => {}, []);
  const transItem = list.map((item) => (
    <Transaction
      key={item.id}
      item={item}
      actions={{ ...actions, removeTrans: () => removeTrans(item) }}
    />
  ));
  return (
    <Card>
      <CardHeader>
        <Day>{dateFormat.day}</Day>
        <MonthYear>
          <span>{dateFormat.longDay}</span>
          <span>{`${dateFormat.month} / ${dateFormat.year}`}</span>
        </MonthYear>
      </CardHeader>
      {transItem.length > 0 && transItem}
    </Card>
  );
};

export default TransactionCard;
