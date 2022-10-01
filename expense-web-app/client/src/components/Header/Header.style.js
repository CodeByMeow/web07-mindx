import { RiAddCircleFill } from "react-icons/ri";
import styled from "styled-components";

export const Row = styled.div`
  padding: 3rem 2rem;
  text-align: right;
`;

export const AddButton = () => {
  return <RiAddCircleFill fontSize="3rem" cursor="pointer" />;
};
