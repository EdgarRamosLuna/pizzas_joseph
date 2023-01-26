import styled from "styled-components";

export const AlertStyle = styled.div`
width: auto;
position: absolute;
z-index: 100;
right: 15px;
top: 70px;
i{
    color: #fff;
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
.container{
    
    display: flex;
    max-width: 450px;
    min-width: 280px;
    background: #fff;
 
    height: auto;
    
    position: relative;
    border-top: 0;
    border-right: 0;
    box-sizing: border-box;
    border-left: 0;
    box-shadow: rgb(0 0 0 / 10%) 0px 8px 16px 0px;
    padding: 25px 0;


}
.success{
    color: #fff;
    background-color: #2ea420;
    
}
.error{
    color: #fff;
    background-color: #a42220;
    
}
.alert-content {
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    box-sizing: border-box;
    padding: 0 25px;
}
.actions-buttons {
    position: absolute;
    right: -13px;
    font-size: 0.8em;
    top: 1px;
}
`;