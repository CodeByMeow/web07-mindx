import styled from "styled-components";
import { motion } from "framer-motion";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";

export const Item = styled(motion.div)`
  display: flex;
  justify-content: space-bettween;
  align-items: center;
  border-bottom: 1px solid var(--gray);
  cursor: pointer;
  position: relative;
`;

export const ItemImg = styled.div`
  flex-shink: 0;
  padding: 1.2em;
  img {
    width: 3.5em;
    height: 3.5em;
    object-fit: cover;
  }
`;

export const ItemDesc = styled.div`
  flex: 1;
  padding: 1em 0;
  h4 {
    font-size: 1.5em;
    font-weight: 500;
  }
`;

export const ItemAmount = styled(ItemDesc)`
  display: flex;
  justify-content: flex-end;
  gap: 1em;
  h4 {
    text-align: right;
  }
  img {
    width: 2.5em;
    height: 2.5em;
    object-fit: cover;
  }
`;

export const RemoveIcon = () => {
  return (
    <motion.div
      initial={{ opcity: 0 }}
      animate={{
        opcity: 1,
        padding: "1em",
        background: "red",
        borderRadius: 10,
        marginLeft: 5,
      }}
      exit={{ opcity: 0 }}
    >
      <RemoveCircleOutlineRoundedIcon
        style={{ fontSize: "2em", color: "#fff" }}
      />
    </motion.div>
  );
};
