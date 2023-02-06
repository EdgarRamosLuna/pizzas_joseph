import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    /*margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;*/
    //overflow-y: ${(props) => (props.isModal ? "hidden" : "")};
    overflow-y: hidden;
    height: ${(props) => (props.isModal ? "100%" : "100%")};
  
    background-color: ${(props) =>
      props.isModal ? "#fff !important" : "unset"};
    *{
        background-color: ${(props) =>
          props.isModal ? "#fff !important" : "unset"};
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
  .date-pick {
    margin-right: 15px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: end;
    align-items: center;
    position: relative;
    //margin-right: auto;
   // margin-left: 200px;
   color: #a42220;
   max-width: 300px;
   width: 100%;
    &:before{
      content: "Busqueda por fecha";
  //    width: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      position: absolute;
      left: 0;
    }
}
.date-pick-container {
    text-align: center;
    //margin: 0 auto;
}
/*.date-pick-container {
    text-align: center;
    display: flex;
    gap: 5px;
    align-items: center;
}*/
.clearRanges {
    position: absolute;
    right: -20px;
  //  top: 0%;
    font-size: 1.2em;
}

.react-datepicker__navigation {
    align-items: center !important;
    background: none !important;
    display: flex !important;
    justify-content: center !important;
    text-align: center !important;
    cursor: pointer !important;
    position: absolute !important;
    top: 2px !important;
    padding: 0 !important;
    border: none !important;
    z-index: 1 !important;
    height: 32px !important;
    width: 32px !important;
    text-indent: -999em !important;
    overflow: hidden !important;
}
.example-custom-input {
    min-width: 67px;
}
`;

export default GlobalStyle;
