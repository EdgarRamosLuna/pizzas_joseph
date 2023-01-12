import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  select,
    input {
      height: 30px;
      background: transparent;
      border: 1px solid;
      color: #a42220;
      border-radius: 5px;
      outline: none;
      box-sizing: border-box;
      padding: 0 10px;
    }
`;
export const HeaderS = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  .menu {
    width: 250px;
    background: #a42220;
    -webkit-box-shadow: 0px 0px 5px 5px rgba(1, 1, 1, 0.5);
    box-shadow: 0px 0px 5px 5px rgba(1, 1, 1, 0.5);
    height: 100%;
    position: fixed;
    * {
      color: #fff;
      text-decoration: none;
      list-style: none;
    }
    ul {
      display: flex;
      flex-direction: column;

      margin: 0;
      padding: 0;
    }
  }
  .menu-items {
    display: flex;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    li {
      box-sizing: border-box;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 10px;
      transition: all 0.3s ease-in-out;
      height: 50px;
      cursor: pointer;
      &:hover {
        transition: all 0.3s ease-in-out;
        background: #571211;
      }
      &:before {
        //  position: absolute;
        // left: 0;
      }
      &:nth-child(1) {
        &:before {
          font-family: "Font Awesome 6 Free" !important;
          content: "\f015";
          font-style: normal;
          font-variant: normal;
          line-height: 1;
          text-rendering: auto;
          font-weight: 900;
          width: 25px;
          justify-content: center;
          display: flex;
        }
      }
      &:nth-child(2) {
        &:before {
          font-family: "Font Awesome 6 Free" !important;
          content: "\f46d";
          font-style: normal;
          font-variant: normal;
          line-height: 1;
          text-rendering: auto;
          font-weight: 900;
          width: 25px;
          justify-content: center;
          display: flex;
        }
      }
      &:nth-child(3) {
        &:before {
          font-family: "Font Awesome 6 Free" !important;
          content: "\f07a";
          font-style: normal;
          font-variant: normal;
          line-height: 1;
          text-rendering: auto;
          font-weight: 900;
          width: 25px;
          justify-content: center;
          display: flex;
        }
      }
      &:nth-child(4) {
        &:before {
          font-family: "Font Awesome 6 Free" !important;
          content: "\f788";
          font-style: normal;
          font-variant: normal;
          line-height: 1;
          text-rendering: auto;
          font-weight: 900;
          width: 25px;
          justify-content: center;
          display: flex;
        }
      }
      &:nth-child(5) {
        &:before {
          font-family: "Font Awesome 6 Free" !important;
          content: "\f0c0";
          font-style: normal;
          font-variant: normal;
          line-height: 1;
          text-rendering: auto;
          font-weight: 900;
          width: 25px;
          justify-content: center;
          display: flex;
        }
      }
      &:nth-child(6) {
        &:before {
          font-family: "Font Awesome 6 Free" !important;
          content: "\f2f5";
          font-style: normal;
          font-variant: normal;
          line-height: 1;
          text-rendering: auto;
          font-weight: 900;
          width: 25px;
          justify-content: center;
          display: flex;
        }
      }
    }
    a {
      font-size: 1.3em;
      text-transform: uppercase;
      width: 100%;
    }
  }
  .logo-container {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    text-align: center;
  }
  .header-body {
    position: fixed;
    width: calc(100% - 250px);
    right: 0;
    z-index: 19;
    box-shadow: 5px 0px 5px 3px rgba(1, 1, 1, 0.5);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    height: 50px;
    background: white;
  }
  .header-buttons {
    width: 100%;
    button {
      height: 30px;
      background: #a42220;
      border: 2px solid #a42220;
      border-radius: 15px;
      box-sizing: border-box;
      padding: 0 9px;
      color: #fff;
      cursor: pointer;
    }
  }
`;
export const BodyS = styled.div`
  width: calc(100% - 250px);
  box-sizing: border-box;
  padding: 0 50px;
  margin-top: 65px;
  height: 100vh;
  margin-left: auto;
`;

export const ModalS = styled.div`
  width: 100%;
  position: fixed;
  z-index: 99;
  height: 100%;
  background: #0000004d;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-container {
    width: 50%;
    background: #fff;
    height: auto;
    display: flex;
    box-sizing: border-box;
    padding: 20px;
    flex-direction: column;
    position: relative;
  }
  .modal-form {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .form-footer {
    display: flex;
    box-sizing: border-box;
    width: 35%;
    margin-left: auto;
  }
  .form-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 10px;
    margin-bottom: 5px;
    
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: end;
    button {
      margin-left: 0;
    }
  }
  .modal-close {
    position: absolute;
    right: 20px;
    color: #a42220;
    font-size: 1.5em;
    cursor: pointer;
  }
  .modal-title {
    width: 100%;
    display: flex;
  }
`;
export const StyledButton = styled.button`
  min-width: 150px;
  width: 100%;
  max-width: 150px;
  margin-left: auto;
  margin-top: 10px;
  
  background: ${props => props.bg ? props.bg:"#a42220"};
  color: #fff;
  border: ${props => props.bg ? `1px solid ${props.bg}`:"1px solid #a42220"}; 
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
`;

export const StorageS = styled.div`
  border: 1px solid #a42220;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  .storage-menu {
    width: 100%;
    display: flex;
    border: 1px solid #a42220;
    /* border-top: 0;
    border-right: 0;
    border-left: 0;*/
    color: #a42220;
    box-sizing: border-box;
  }
  .storage-menu-item {
    width: auto;
    border: 1px solid #a42220;
    min-width: 165px;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0 24px;
    cursor: pointer;
    border-bottom: 0;
    border: 0;
  }
  .storage-menu-item:nth-child(1) {
    border-left: 0;
  }
  .storage-menu-item:nth-child(2) {
    border-left: 0;
    border-right: 0;
  }
  .active {
    background: #a42220;
    border: 1px solid #a42220;
    color: #fff;
  }
`;

export const TableContainer = styled.div`
  border-right: 1px solid #a42220;
  border-left: 1px solid #a42220;
`;

export const PosS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    box-sizing: border-box;
    * {
      box-sizing: border-box;
    }
    tr:nth-child(1) th {
      height: 50px;
    }
  }
  i {
    color: #a42220;
  }
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
    height: 100px;
    border-right: 0;
    border-left: 0;
  }
  .table-header {
    height: 50px;
  }
  /*tr:nth-child(even) {
  background-color: #dddddd;
}*/
  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  input {
    outline: none;
  }
  .body {
    width: 75%;
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-top-width: 1px;
    border-color: #e9ebee;
    border-top-color: rgb(233, 235, 238);
    border-style: solid;
    border-top-style: solid;
    border-radius: 6px;
    background-color: #fff0;
    border-top: 0;
  }
  .header {
    width: 100%;
    display: flex;
    height: 50px;
    align-items: center;
    background: white;
    box-sizing: border-box;
    padding: 0 0px;
    margin-bottom: 15px;
    border-radius: 5px;
    position: relative;
  }
  .header-search {
    margin-bottom: 15px;
  }
  .search {
    display: flex;
    width: 100%;
    border: 1px solid #0000;
    box-sizing: border-box;
    background: #a42220;
    color: #fff;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow-y: hidden;
  }
  .search-btn {
    width: auto;
    margin: 0 auto;
    padding: 0;
    cursor: pointer;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search-field {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .search-field input {
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    border: 0;
    padding: 0 15px;
  }
  .body-table {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    min-height: 756px;
    overflow-y: auto;
  }
  .right-panel {
    width: 24%;
    margin-left: auto;
    border-width: 1px;
    border-color: #e9ebee;
    border-style: solid;
    border-radius: 6px;
    background-color: #ffffff;
    box-sizing: border-box;
    height: auto;
    justify-content: start;
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 400px;
    padding-top: 15px;
  }
  .rp-container1 {
    width: 100%;
    display: flex;
  }
  .rp-container-1-1 {
    width: 80%;
    margin: 0 auto;
  }
  .rp-container2 {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 15px auto;
    gap: 11px;
  }
  
  .search-client {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;

    input {
      width: 100%;
      padding: 0 0 0 13px;
      border: none;
      outline: none;
      background-color: rgba(0, 0, 0, 0);
      font-size: inherit;
      font-family: inherit;
      color: #212121;
      box-shadow: unset;
    }
    .wrapper:hover {
      box-shadow: unset !important;
    }
  }
  .complete-payment {
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #a42220;
    box-sizing: border-box;
  }
  .cp-input-container {
    display: flex;
    height: 100%;
    input {
      border: 0;
      box-sizing: border-box;
      padding: 5px 11px;
      outline: none;
    }
  }
  .cp-btn {
    display: flex;
    height: 100%;
    button {
      border: 0;
      border-left-color: currentcolor;
      border-left-style: none;
      border-left-width: 0px;
      border-left: 1px solid #a42220;
      background: #a42220;
      color: #fff;
      height: 50px;
      width: 100%;
    }
  }
  .subtotal {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .search-result {
    position: absolute;
    display: flex;
    left: 59px;
    flex-direction: column;
    top: 50px;
    background: #fff;
    max-height: 300px;
    height: auto;
    width: 95%;
    overflow-y: auto;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
    //gap: 5px;
  }
  .result-item {
    width: 97%;
    margin: 5px auto;
    cursor: pointer;
  }
  .table-container {
    width: 100%;
  }
  .body-table {
    scrollbar-width: thin;
    scrollbar-color: #a42220 #fff !important;
    max-height: 90vh;
  }
  th,
  td {
    text-align: center !important;
  }
  .fa-circle-plus {
    font-size: 1.5em;
    cursor: pointer;
  }
  .list-extras {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 5px;
  }
  .ingItemContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }
  .ingContainer {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 5px;

  }
  .extra-ing {
    width: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid #a42220;
    border-left: 0;
    border-right: 0;
    .extra-ing h5 {
      margin: 7px 0;
    }
  }
  .btnDelIng {
    cursor: pointer;
  }
  /*td .fa-pizza-slice{
  position: relative;
  &:after{
    content: "+";

  }
}*/
  .address {
    display: flex;
    flex-direction: column;
    gap: 5px;
    textarea {
      border: 1px solid #dfe1e5;
      background-color: white;
      color: #212121;
      height: 100px;
      width: 100%;
      padding: 13px;
      outline: none;
      box-sizing: border-box;
      resize: none;
    }
  }
  .rp-container0 {
    width: 100%;
  }
  .store-options {
      width: 80%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
      margin-bottom: 15px;
      flex-wrap: wrap;
      margin: 0 auto;
      gap: 0px;
      margin-bottom: 10px;
      color: #a42220;
  }
  .type-active{
    transition: all 0.3s;
    background-color:#a42220;
    i{
        transition: all 0.3s;
        color: #fff;
    }
  }
`;
export const StoreOptions = styled.div`
  
    cursor: pointer;
    width: 70px;
    border: 3px solid #a42220;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 100px;
    height: 70px;
    transition: all 0.3s;
    i{
      font-size: 1.5em;
    }
    &:hover{
      background-color:#a42220;
      transition: all 0.3s;
      i{
        transition: all 0.3s;
        color: #fff;
      }
    }
  
  
`;
export const ActionBtns = styled.div`
  display: flex;
  gap: 5px;
  .btn {
    background: none;
    border: 0;
    margin: 0;
    padding: 0;
    display: flex;
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    cursor: pointer;
  }
  .btn-edit {
    color: #20a428;
  }
  .btn-del {
    color: #a42220;
  }
`;

export const StyledNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-width: 115px;
  input{
    max-width: 60px;
    text-align: center;
  }
  .edit-btns {
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 115px;
    min-width: 115px;
    margin: 0 auto;
    gap: 10px;
    align-items: center;
    justify-content: center;
    i{
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      color: #a42220;
      width: 20px;
    }
  }
`;