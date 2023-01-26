import styled from "styled-components";

export const TicketS = styled.div`
@media print {

   @page {
       size: 80mm;
       body{
           padding: 0 15px;
           box-sizing:border-box;

       }
       .item {
        display: flex;
        justify-content: space-between;
      
        margin-bottom: 5px;
        
        }
        .ticket{
            break-after: always;
            page-break-after: always;
        }
   }
}
width: 25%;
margin: 0px 38%;
padding: 0;
//border: 1px dashed #000;
.ticket-container{
 /*   width: auto;
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
  border: 1px solid black;
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
  
}

.item .item-name {
  width: 70%;
  
}
.item-name{
    //display: inline-block;
  //text-align: justify;
  margin-bottom: 5px;
}
.total {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

.footer {
  margin-top: 10px;
  text-align: center;
}


@media print {
  .ticket {
    width: 80mm;
    margin: 0;
  }
  /* other styles for print go here */
}

`;