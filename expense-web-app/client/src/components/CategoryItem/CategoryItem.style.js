import styled from "styled-components";
import { motion } from "framer-motion";

export const Item = styled(motion.div)`
  cursor: pointer;
  padding: 0.8em 0.5em;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  h5 {
    font-size: 1.5em;
    font-weight: 300;
    padding: 0.8em;
  }
`;

export const Image = styled.img`
  width: 4em;
  height: 4em;
  object-fit: cover;
`;
