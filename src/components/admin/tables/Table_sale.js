import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/MainContext";
import { ActionBtns, TableContainer } from "../../../styles/Styles";
import SelectComponent from "./SelectComponent";
import FilterItem from "./FilterItem";

const TableSale = (props) => {
  const { type, timelineP } = props;
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
    details,
    setDetails,
    formattedDate,
    sixDaysLater,
    sixDaysBefore,
    today,
    setTimeline,
    firstDayOfMonth,
    lastDayOfMonth,
    firstDayOfYear,
    lastDayOfYear,
    week,
    showDetail,
  } = useContext(MainContext);

  const [columns, setColumns] = useState([]);
  const printTicket = (id_sale) => {
    window.open(`${bseUrl}/ticket/${id_sale}`, "_blank");
  };

  useEffect(() => {
    setData([]);
    setColumns([
      {
        name: "Total",
        selector: (row) => row.totalFinal,
      },
      {
        name: "Subtotal",
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
        name: "Cambio",
        selector: (row) => row.cambio,
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
    if (timelineP === 0) {
      setTimeline(today, today);
    }
    if (timelineP === 1) {
      /*console.log();
      console.log(week[5]);*/
      setTimeline(week[0], week[5]);
    }
    if (timelineP === 2) {
      setTimeline(firstDayOfMonth, lastDayOfMonth);
    }
    if (timelineP === 3) {
      setTimeline(firstDayOfYear, lastDayOfYear);
    }
    if (timelineP === 4) {
      //setTimeline(firstDayOfYear, lastDayOfYear);
      axios.get(`${baseUrl}/get_sales`).then((res) => {
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
          const formattedDate2 =
            `0${date.getMonth() + 1}`.slice(-2) +
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
              total: `$${Number(element.total).toFixed(2)}`,
              totalFinal: (
                Number(element.total) + Number(element.envio)
              ).toFixed(2),
              total_cash: `$${element.total_cash}`,
              total_card: `$${element.total_card}`,
              envio: `$${element.envio}`,
              address: element.address,
              date: formattedDate,
              formattedDate: formattedDate2,
              status: (
                <>
                  <SelectComponent
                    id_sale={element.id}
                    statusData={element.status}
                  />
                </>
              ),
              st: Number(element.status),
              order:
                Number(element.type_order) === 1 ? "Restaurante" : "Domicilio",
              actions: (
                <>
                  <ActionBtns>
                    <button
                      className="btn"
                      onClick={() => printTicket(element.id)}
                    >
                      <i className="fa-solid fa-print"></i>
                    </button>
                    <button
                      className="btn btn-del"
                      onClick={() => removeItem(element.id, 5)}
                    />
                  </ActionBtns>
                </>
              ),
              details: (
                <div className="details-container">
                  <i
                    className="fa-solid fa-circle-info"
                    onClick={(e) => showDetail(element.id)}
                  />
                </div>
              ),
              cambio: Number(element.total_cash) > 0 ?  element.cambio : (0).toFixed(2)
            },
          ]);
        }
      });
    }

    //const isMonday = (dayOfWeek === 1);
    /* axios
      .get(`${baseUrl}/get_sales`)
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
          
          const monthT = (today.getMonth() + 1 < 10) ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
          const dayT = (today.getDate() < 10) ? '0' + today.getDate() : today.getDate();
          const dateT = monthT + '-' + dayT + '-' + today.getFullYear();
          if(timeline === 0){
            if(dateT === formattedDate2){
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
                  st:Number(element.status),
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
          }
          
        }
      })
      .catch((err) => {
        console.error(err);
      });*/
  }, [type]);

  return (
    <TableContainer>
      <FilterItem
        columns={columns}
        data={data}
        field="client"
        placeholder="Buscar por cliente"
      />
    </TableContainer>
  );
};

export default TableSale;
