import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/MainContext";
import { ActionBtns, TableContainer } from "../../../styles/Styles";
import FilterItems from "./FilterItems";
import SelectComponent from "./SelectComponent";

const Table_sales = (props) => {
  const { type } = props;
  const {
    DataTable,
    data,
    setData,
    data2,
    setData2,
    data3,
    setData3,
    v4,
    showConfBox,
    setShowConfBox,
    updateItem,
    removeItem,
    bseUrl,
    baseUrl,
    setShowDetails,
    details, setDetails
  } = useContext(MainContext);

  const [columns, setColumns] = useState([]);
  const printTicket = (id_sale) =>{
    window.open(`${bseUrl}/ticket/${id_sale}`, "_blank");
  }
  const showDetails = (id_sale) =>{
    //console.log(id_sale);
    axios.get(`${baseUrl}/server/api/sale_details/${id_sale}`).then((res) => {
      console.log(res.data);
      setShowDetails(true);
      setDetails(res.data);
    }).catch((err) =>{
      console.error(err);
    })
  };
  //console.log(data);
  useEffect(() => {
    setData([]);
    setColumns([
      {
        name: "Total",
        selector: (row) => row.total,
      },
      {
        name: "Total Efectivo",
        selector: (row) => row.total_cash,
      },
      {
        name: "Total Tarjeta",
        selector: (row) => row.total_card,
      },
      {
        name: "Tipo de orden",
        selector: (row) => row.order,
        sortable: true,
      },
      {
        name: "Envio",
        selector: (row) => row.envio,
      },
   /*   {
        name: "Cliente",
        selector: (row) => row.client,
      },*/
      {
        name: "Fecha",
        selector: (row) => row.date,
        sortable: true,
      },
      {
        name: "Detalles",
        selector: (row) => row.details,
        center: true,
      },
      {
        name: "Status",
        selector: (row) => row.status,
        center: true,
      },

      {
        name: "",
        selector: (row) => row.actions,
        center: true,
        button: true,
      },
    ]);
    axios
      .get(`${baseUrl}/server/api/get_sales`)
      .then((res) => {
        //    console.log(res);
        // setData([]);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          const date = new Date(Date.parse(element.date.replace(/-/g, "/")));
          const year = date.getFullYear();
          const month = date.getMonth();
          const day = date.getDate();
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const newDate = new Date(year, month, day, hours, minutes);
          const formattedDate = newDate.toLocaleString().replace(/:00 /g, " ");
          const formattedDate2 = `0${date.getMonth() + 1}`.slice(-2) +
          "-" +
          `0${date.getDate()}`.slice(-2) +
          "-" +
          date.getFullYear();
          //console.log(formattedDate2);
          setData((prev) => [
            ...prev,
            {
              id: element.id,
              client: element.client,
              total: `$${element.total}`,
              total_cash: `$${element.total_cash}`,
              total_card: `$${element.total_card}`,
              envio: `$${element.envio}`,
              address: element.address,
              date: formattedDate,
              formattedDate: formattedDate2,
              status: (
                <>
                 <SelectComponent id_sale={element.id} statusData={element.status} />
                </>
              ),
              order:
                Number(element.type_order) === 1 ? "Restaurante" : "Domicilio",
              actions: (
                <>
                <ActionBtns>
                  <button
                    className="btn"
                    onClick={() => printTicket(element.id)}
                  ><i className="fa-solid fa-print"></i></button>
                  <button
                    className="btn btn-del"
                    onClick={() => removeItem(element.id, 5)}
                  />
                </ActionBtns>
                </>
              ),
              details: (
                <div className="details-container">
                  <i className="fa-solid fa-circle-info" onClick={(e) => showDetails(element.id)} />
                </div>
              ),
            },
          ]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [type]);

  return (
    <TableContainer>
      <FilterItems
        columns={columns}
        data={data}
        field="client"
        placeholder="Buscar por cliente"
      />
    </TableContainer>
  );
};

export default Table_sales;
