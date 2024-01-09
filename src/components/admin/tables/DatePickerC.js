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
    <div className="custom-input" onClick={onClick} ref={ref}>
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
      .get(`${baseUrl}/sale_details/${id_sale}`)
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
      {/*<div className="clearRanges" onClick={() => clearRange()}>
        <i className="fa-solid fa-circle-xmark"></i>
  </div>*/}
    </div>
  );
};

export default DatePickerC;
