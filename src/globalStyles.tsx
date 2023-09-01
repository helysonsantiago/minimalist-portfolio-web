import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  
  --primary-color: #00ff22;
  --text-green: #082c11;
  --text-white: #FCFCFC;
  --bgk-white: #FCFCFC;
  --bgk-green: #0e1d1a;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

}

`;

export default GlobalStyles;
