import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: space-bettween;
  align-items: center;
  padding: 1em 0;
`;

export const ItemImg = styled.div`
  flex-shink: 0;
  padding: 1em;
  img {
    width: 3em;
    height: 3em;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ItemDesc = styled.div`
  flex: 1;
  padding: 1em 0;
  border-bottom: 1px solid var(--gray);
  h4 {
    font-size: 1.5em;
    font-weight: 500;
  }
  span {
    color: var(--gray-dar);
    font-weight: 300;
    font-size: 1.2em;
  }
`;

export const ItemAmount = styled(ItemDesc)`
  text-align: right;
`;
