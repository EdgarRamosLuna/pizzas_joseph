import styled from "styled-components";

export const TicketS = styled.div`
  @media print {
    @page {
      size: 80mm 100%;
    }
    .p-cant-cont {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: start;
    }

    table {
      border-collapse: collapse;
      width: 100%;
    }

    .footer {
      margin-top: 10px;
      text-align: center;
    }
    th,
    td {
      border: 0px solid black;
      border-left: 0;
      border-right: 0;
      padding: 3px;
      text-align: left;
      min-height: 10px;
    }
    .p-cant-cont {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: start;
    }
    th {
      font-size: 0.8em;
      word-break: keep-all;
      white-space: pre;
      text-align: center;
      background-color: transparent;
    }
    tr {
      th:nth-child(2),
      th:nth-child(3) {
        text-align: left;
      }
    }
    .total {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
    }
    .p-name {
      display: flex;

      flex-direction: column;
    }
    body {
      padding: 0 10px;
      box-sizing: border-box;
    }
    .item {
      display: flex;
      justify-content: space-between;

      margin-bottom: 5px;
    }
    .ticket {
      break-after: always;
      page-break-after: always;
    }
    .item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
      align-items: center;
    }
    .item-ing {
      width: 70%;
    }

    .item .item-name {
      width: 70%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    .item-name {
      //display: inline-block;
      //text-align: justify;
      margin-bottom: 5px;
    }
    .table-container {
      width: 100%;
      font-size: 0.66em;
    }
    .item-cant {
      width: 40px;
      display: flex;
      text-align: center;
      flex-direction: column;
      margin: 0;
      padding: 0;
      gap: 5px;
    }
  }
  width: 25%;
  margin: auto auto;
  @media(max-width:1500px){
    width: 50%;
  }
  padding: 0;
  background: #fbfbfb;
  height: auto;
  position: relative;
  border-radius: 15px;
  padding-bottom: 50px;
  .action-buttons {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    gap: 10px;
    button {
      border-radius: 10px;
      border: 1px dashed #101629;
      box-shadow: 1px 4px 3px -3px black;
      box-sizing: border-box;
      padding: 5px 25px;
      color: #fff;
      background: #101629;
    }
  }
  //border: 1px dashed #000;
  .ticket-container {
    /*   width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: 0 35%;*/
  }

  .ticket {
    width: 80mm;
    margin: 15px auto;
    height: auto;
    border: 1px dashed black;
    padding: 10px;
    font-family: Arial, sans-serif;
  }

  .header {
    text-align: center;
  }

  .header h1 {
    margin: 0;
  }

  .header .date {
    font-weight: bold;
  }

  .item-list {
    margin-top: 10px;
  }

  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    align-items: center;
  }

  .item .item-name {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .item-ing {
    width: 70%;
  }
  .item-name {
    //display: inline-block;
    //text-align: justify;
    margin-bottom: 5px;
  }
  .item-cant {
    width: 40px;
    display: flex;
    text-align: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 5px;
  }
  .total {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  .ticket {
    div.total:nth-child(4) {
      border-top: 1px dashed;
      padding-top: 5px;
    }
  }

  .footer {
    margin-top: 10px;
    text-align: center;
  }

  .footer p {
    padding: 0;
    margin: 0;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    border: 0px solid black;
    border-left: 0;
    border-right: 0;
    padding: 3px;
    text-align: left;
    min-height: 10px;
  }

  th {
    font-size: 0.8em;
    word-break: keep-all;
    white-space: pre;
    text-align: center;
    background-color: transparent;
  }
  tr {
    th:nth-child(2),
    th:nth-child(3) {
      text-align: left;
    }
  }
  .p-name {
    display: flex;

    flex-direction: column;
  }
  .p-cant-cont {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  .footer {
    margin-top: 10px;
    text-align: center;
  }
  th,
  td {
    border: 0px solid black;
    border-left: 0;
    border-right: 0;
    padding: 3px;
    text-align: left;
    min-height: 10px;
  }
  .p-cant-cont {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
  }
  th {
    font-size: 0.8em;
    word-break: keep-all;
    white-space: pre;
    text-align: center;
    background-color: transparent;
  }
  tr {
    th:nth-child(2),
    th:nth-child(3) {
      text-align: left;
    }
  }
  .total {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
  }
  .p-name {
    display: flex;

    flex-direction: column;
  }
  body {
    padding: 0 10px;
    box-sizing: border-box;
  }
  .item {
    display: flex;
    justify-content: space-between;

    margin-bottom: 5px;
  }
  .ticket {
    break-after: always;
    page-break-after: always;
  }
  .item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    align-items: center;
  }
  .item-ing {
    width: 70%;
  }

  .item .item-name {
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  .item-name {
    //display: inline-block;
    //text-align: justify;
    margin-bottom: 5px;
  }
  .table-container {
    width: 100%;
    font-size: 0.8em;
  }
  .item-cant {
    width: 40px;
    display: flex;
    text-align: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    gap: 5px;
  }
  thead {
    border-bottom: 1px dashed;
    border-top: 1px dashed;
  }
`;
