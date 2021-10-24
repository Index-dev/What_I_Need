import { createGlobalStyle } from "styled-components";
import Font from "../assets/font/gabia_solmee.ttf";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;    
}

body{    
    /* box-sizing: border-box; */
    width:100%;
    height:100vh;
    font-family: "gabia_solmee";
}
@font-face {
  /* 이름 선언 */
  font-family: "gabia_solmee";
  /* 저장한 경로 */
  src: url(${Font});
}
`;

export default GlobalStyle;
