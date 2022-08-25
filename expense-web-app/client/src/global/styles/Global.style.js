import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *:before, *:after{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}
html{
      font-size: 62.5%;
}
:root{
   --gray-light:#ECECEC;
   --gray:#C0BEC3;
   --black: #09080C;
   --gray-dark:#57565E;
   --aqua:#ADCCB6;
   --grown:#4B3430;
   --green-dark:#7D8A5F;
}
`;
