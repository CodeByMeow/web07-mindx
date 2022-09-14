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
  .remove-icon {
    background-color: red;
  }
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

export const ItemDesc = styled(motion.div)`
  flex: 1 0;
  padding: 1em 0;
  h4 {
    font-size: 1.5em;
    font-weight: 500;
  }
`;

export const ItemAmount = styled(motion.div)`
  display: flex;
  justify-content: end;
  gap: 1em;
  flex-shink: 0;
  padding: 1em 0;
  h4 {
    text-align: right;
    align-self: end;
    font-size: 1.5em;
    font-weight: 500;
  }
  img {
    width: 2.5em;
    height: 2.5em;
    object-fit: cover;
  }
`;

export const RemoveIcon = ({ handleRemoveTrans }) => {
  return (
    <motion.div
      initial={{ opcity: 0, scale: 0.1 }}
      animate={{
        opcity: 1,
        padding: "1em",
        borderRadius: 10,
        marginLeft: 5,
        scale: 1,
        cursor: "pointer",
      }}
      exit={{ opacity: 0, scale: 0.1 }}
      transition={{ duration: 0.4 }}
      onClick={(e) => {
        e.stopPropagation();
        handleRemoveTrans();
      }}
      className="remove-icon"
    >
      <RemoveCircleOutlineRoundedIcon
        style={{ fontSize: "2em", color: "#fff" }}
      />
    </motion.div>
  );
};
