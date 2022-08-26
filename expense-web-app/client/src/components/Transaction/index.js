import { Item, ItemImg, ItemDesc, ItemAmount } from "./Transaction.style";

const Transaction = () => {
  return (
    <Item>
      <ItemImg>
        <img src="https://source.unsplash.com/random" alt="" />
      </ItemImg>
      <ItemDesc>
        <h4>Snacks</h4>
        <span>8:54 AM</span>
      </ItemDesc>
      <ItemAmount>
        <h4>$1.70</h4>
        <span>$383.00</span>
      </ItemAmount>
    </Item>
  );
};

export default Transaction;
