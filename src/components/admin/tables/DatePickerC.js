import React, { useState } from "react";
import { forwardRef } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";
import { useContext } from "react";
import MainContext from "../../../context/MainContext";
import axios from "axios";
import { ActionBtns } from "../../../styles/Styles";
import SelectComponent from "./SelectComponent";
import { useLocation } from "react-router-dom";
const DatePickerC = () => {
  const {
    data,
    setData,
    baseUrl,
    setShowDetails,
    details,
    setDetails,
    removeItem,
    bseUrl,
    setLoadingS2,
    formattedDate,
    sixDaysLater,
    sixDaysBefore,
    today,
    sendRequest,
    printTicket,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = useContext(MainContext);
  registerLocale("es", es);
  // const date = new Date();

  //console.log(formattedDate);

  //console.log(sixDaysLater.toLocaleDateString());
  
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="example-custom-input" onClick={onClick} ref={ref}>
      <i className="fa-solid fa-calendar-days"></i>
    </div>
  ));

  const desde = (date) => {
    const from = formattedDate(date);
    const to = formattedDate(endDate);
    setData([]);
    setLoadingS2(true);

    sendRequest(from, to);
    //  setData( data.filter((valor, i) => {  return Number(i) !== Number(indx); })
    /* setData(
      data.filter((valor, i) => {
        return valor.formattedDate === formatedD;
      })
    );*/
    //console.log(data[0].formattedDate);
    //  console.log((formatedD));
    // console.log((data[0].formattedDate))
    setStartDate(date);
  };
  const showDetails = (id_sale) => {
    //console.log(id_sale);
    axios
      .get(`${baseUrl}/server/api/sale_details/${id_sale}`)
      .then((res) => {
        console.log(res.data);
        setShowDetails(true);
        setDetails(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const hasta = (date) => {
    const from = formattedDate(startDate);
    const to = formattedDate(date);
    setData([]);
    setLoadingS2(true);

    sendRequest(from, to);
    //  setData( data.filter((valor, i) => {  return Number(i) !== Number(indx); })
    /* setData(
      data.filter((valor, i) => {
        return valor.formattedDate === formatedD;
      })
    );*/
    //console.log(data[0].formattedDate);
    //  console.log((formatedD));
    // console.log((data[0].formattedDate))
    setEndDate(date);
  };
  const clearRange = () => {
    setData([]);
    setLoadingS2(true);
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
              total: `$${element.total}`,
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
                    onClick={(e) => showDetails(element.id)}
                  />
                </div>
              ),
            },
          ]);
        }
        setLoadingS2(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const params = useLocation();
  return (
    <div className="date-pick">
      <div className="date-pick-container">
        <div className="date-pick-title">
          <h5>Desde:</h5>
        </div>
        <DatePicker
          selected={startDate}
          onChange={(date) => desde(date)}
          customInput={<ExampleCustomInput />}
          locale="es"
        />
      </div>

      <div className="date-pick-container">
        <div className="date-pick-title">
          <h5>Hasta:</h5>
        </div>
        <DatePicker
          selected={endDate}
          onChange={(date) => hasta(date)}
          customInput={<ExampleCustomInput />}
          locale="es"
        />
      </div>
      <div className="clearRanges" onClick={() => clearRange()}>
        <i class="fa-solid fa-circle-xmark"></i>
      </div>
    </div>
  );
};

export default DatePickerC;
