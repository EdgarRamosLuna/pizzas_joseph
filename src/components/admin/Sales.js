import React, { forwardRef, useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import MainContext from "../../context/MainContext";
import { StorageS } from "../../styles/Styles";
import PanelContainer from "./PanelContainer";
import Table_sales from "./tables/Table_sales";
const Sales = () => {
  const {
    setLoadingS,
    setLoadingS2,
    option2,
    setOption2,
    pathname,
    data,
    setStartDate,
    setEndDate,
    setData,
  } = useContext(MainContext);

  useEffect(() => {
    setLoadingS2(true);
    setTimeout(() => {
      setLoadingS2(false);
    }, 500);
    return () => {};
  }, [option2]);
  /*
  useEffect(() => {
    const classElement = document.querySelector(".date-pick");
    const targetElement = document.querySelector(".header-button");
    targetElement.parentNode.insertBefore(classElement, targetElement);
  }, [setLoadingS2]);*/

  const [totalSales, setTotalSales] = useState(0);
  const [totalSalesCash, setTotalSalesCash] = useState(0);
  const [totalSalesCard, setTotalSalesCard] = useState(0);
  useEffect(() => {
    //console.log("cambio");
    
  }, [pathname]);
  useEffect(() => {
    //  console.log(data);
    setTotalSales(0);
    setTotalSalesCash(0);
    setTotalSalesCard(0);

    if (data.length > 0) {
      //  console.log(sum)
      const sum = data.reduce((acc, obj) => {
        if (Number(obj.st) === 1) {
          return acc + Number(obj.totalFinal.replace("$", ""));
        }
        return acc;
      }, 0);
      const sum2 = data.reduce((acc, obj) => {
        if (Number(obj.st) === 1) {
          return acc + Number(obj.total_card.replace("$", ""));
        }
        return acc;
      }, 0);
      const sum3 = data.reduce((acc, obj) => {
        if (Number(obj.st) === 1) {
          return acc + Number(obj.total_cash.replace("$", "")) - Number(obj.cambio);
        }
        return acc;
      }, 0);
      //console.log(sum2);
      setTotalSales(sum);
      setTotalSalesCard(sum2);
      setTotalSalesCash(sum3);
      //setTotalSales();
      /* setTotalSales((prevData) =>
        prevData.map((item) => {
          if (item.st === 1) {
            return item;
          }
        })
      );*/
    }
  }, [data]);
 
  const selectTimeLine = (option2) => {
    // console.log(option2);
    switch (option2) {
      case "d":
        //console.log(option2);
        setOption2(0);
        break;
      case "w":
        setOption2(1);
        break;
      case "m":
        setOption2(2);
        break;
      case "y":
        setOption2(3);
        break;
      case "t":
        setOption2(4);
        break;

      default:
        break;
    }
  };

  return (
    <StorageS>
      <div className="graphics-container">
        <PanelContainer>
          <div className="panel-c-data">
            <div className="data">${totalSales.toFixed(2)}</div>
            <div className="title">
              <h4>
                Ventas {option2 === 0 && "diarias"}
                {option2 === 1 && "semanales"}
                {option2 === 2 && "mensuales"}
                {option2 === 3 && "anuales"}
                {option2 === 4 && "totales"}
              </h4>
            </div>
          </div>
        </PanelContainer>
        <PanelContainer>
          <div className="panel-c-data">
            <div className="data">${totalSalesCash.toFixed(2)}</div>
            <div className="title">
              <h4>Total Efectivo</h4>
            </div>
          </div>
        </PanelContainer>
        <PanelContainer>
          <div className="panel-c-data">
            <div className="data">${totalSalesCard.toFixed(2)}</div>
            <div className="title">
              <h4>Total Tarjeta</h4>
            </div>
          </div>
        </PanelContainer>
      </div>
      <div className="storage-menu">
        <div
          className={`storage-menu-item ${option2 === 0 ? "active" : ""}`}
          onClick={() => selectTimeLine("d")}
        >
          <h3>Ventas Diarias</h3>
        </div>
        <div
          className={`storage-menu-item ${option2 === 1 ? "active" : ""}`}
          onClick={() => selectTimeLine("w")}
        >
          <h3>Ventas Semanales</h3>
        </div>
        <div
          className={`storage-menu-item ${option2 === 2 ? "active" : ""}`}
          onClick={() => selectTimeLine("m")}
        >
          <h3>Ventas Mensuales</h3>
        </div>
        <div
          className={`storage-menu-item ${option2 === 3 ? "active" : ""}`}
          onClick={() => selectTimeLine("y")}
        >
          <h3>Ventas Anuales</h3>
        </div>
        <div
          className={`storage-menu-item ${option2 === 4 ? "active" : ""}`}
          onClick={() => selectTimeLine("t")}
        >
          <h3>Ventas Totales</h3>
        </div>
      </div>
      {option2 === 0 && <Table_sales timelineP={0} />}
      {option2 === 1 && <Table_sales timelineP={1} />}
      {option2 === 2 && <Table_sales timelineP={2} />}
      {option2 === 3 && <Table_sales timelineP={3} />}
      {option2 === 4 && <Table_sales timelineP={4} />}
    </StorageS>
  );
};

export default Sales;
