import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
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
    }
  }
  .logo-container {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
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
  .form-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 10px;
    margin-bottom: 5px;
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
  background: #a42220;
  color: #fff;
  border: 1px solid #a42220;
  height: 30px;
  border-radius: 15px;
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
    border:0;
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
