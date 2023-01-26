import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/MainContext";
import { ActionBtns, TableContainer } from "../../../styles/Styles";
import FilterItems from "./FilterItems";

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
    baseUrl,
  } = useContext(MainContext);

  const [columns, setColumns] = useState([]);

  //console.log(data);
  useEffect(() => {
    setData([]);
    setColumns([
      {
        name: "Total",
        selector: (row) => row.total,
      },
      {
        name: "Cliente",
        selector: (row) => row.client,
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
      },
      {
        name: "Envio",
        selector: (row) => row.envio,
      },
      {
        name: "Direccion",
        selector: (row) => row.address,
      },
      {
        name: "Fecha",
        selector: (row) => row.date,
      },

      {
        name: "",
        selector: (row) => row.actions,
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

              order:
                Number(element.type_order) === 1 ? "Restaurante" : "Domicilio",
              actions: (
                <ActionBtns>
                  <button
                    className="btn btn-edit"
                    onClick={() => updateItem(element.id, 4)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn btn-del"
                    onClick={() => removeItem(element.id, 4)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </ActionBtns>
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
      
      <FilterItems columns={columns} data={data} field='client' placeholder='Buscar por cliente' />
    </TableContainer>
  );
};

export default Table_sales;
