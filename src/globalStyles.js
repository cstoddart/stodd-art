import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background-color: #223;
    font-family: monospace;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
`;
