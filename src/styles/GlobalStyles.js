import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    /*margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;*/
    //overflow-y: ${props => props.isModal ? "hidden":""};
    overflow-y: hidden;
    height: ${(props) => (props.isModal ? "100%" : "100%")};
  
    background-color: ${(props) => (props.isModal ? "#fff !important" : "unset")};
    *{
        background-color: ${(props) => (props.isModal ? "#fff !important" : "unset")};
    }
    @media(max-width:880px){
      overflow-y: auto;
    }
  }
  #search {
    border-right: 0;
    border-radius: 5px 0 0 5px;
    outline: none;
  }

`;
 
export default GlobalStyle;