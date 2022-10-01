import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid var(--gray);
  z-index: 1;
`;

export const Row = styled.div`
  padding: 3rem 2rem;
  background-color: #fff;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-itrems: center;
  font-size: 2.5rem;
`;

export const NavIcon = styled(NavLink)`
  color: var(--gray);

  &.active {
    color: var(--black) !important;
  }
`;
