import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;1,400;1,500&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
  }

  a, p, h1, h2, h3, h4, h5, h6{
    margin: 0;
  }
`;
 
export default GlobalStyle;