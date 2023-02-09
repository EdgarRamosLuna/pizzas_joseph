import React, { forwardRef, useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import MainContext from "../../context/MainContext";
import { StorageS } from "../../styles/Styles";
import PanelContainer from "./PanelContainer";
import Table_sales from "./tables/Table_sales";
const Sales = () => {
  const { setLoadingS, setLoadingS2, option, setOption, pathname, data } =
    useContext(MainContext);

  useEffect(() => {
    setLoadingS2(true);
    setTimeout(() => {
      setLoadingS2(false);
    }, 500);
    return () => {};
  }, [option]);
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
  //  console.log(data);
    if (data.length > 0) {
      //  console.log(sum)
      const sum = data.reduce((acc, obj) => {
        if (obj.st === 1 || obj.st === 2) {
          return acc + Number(obj.totalFinal);
        }
        return acc;
      }, 0);
      const sum2 = data.reduce((acc, obj) => {
        if (obj.st === 1 || obj.st === 2) {
          return acc + Number(obj.total_card.replace("$", ""));
        }
        return acc;
      }, 0);
      const sum3 = data.reduce((acc, obj) => {
        if (obj.st === 1 || obj.st === 2) {
          return acc + Number(obj.total_cash.replace("$", ""));
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

  const selectTimeLine = (option) => {
    // console.log(option);
    switch (option) {
      case "d":
        //console.log(option);
        setOption(0);
        break;
      case "w":
        setOption(1);
        break;
      case "m":
        setOption(2);
        break;
      case "y":
        setOption(3);
        break;
      case "t":
        setOption(4);
        break;

      default:
        break;
    }
  };
  /*
data.map(item => {
          if (item.st === 1) {
            return <div key={item.id}>{item.total +}</div>;
          }
        })*/
  return (
    <StorageS>
      <div className="graphics-container">
        <PanelContainer>
          <div className="panel-c-data">
            <div className="data">${totalSales.toFixed(2)}</div>
            <div className="title">
              <h4>
                Ganancias {option === 0 && "diarias"}{" "}
                {option === 1 && "semanales"}
                {option === 2 && "mensuales"}
                {option === 3 && "anuales"}
                {option === 4 && "totales"}
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
          className={`storage-menu-item ${option === 0 ? "active" : ""}`}
          onClick={() => selectTimeLine("d")}
        >
          <h3>Ventas Diarias</h3>
        </div>
        <div
          className={`storage-menu-item ${option === 1 ? "active" : ""}`}
          onClick={() => selectTimeLine("w")}
        >
          <h3>Ventas Semanales</h3>
        </div>
        <div
          className={`storage-menu-item ${option === 2 ? "active" : ""}`}
          onClick={() => selectTimeLine("m")}
        >
          <h3>Ventas Mensuales</h3>
        </div>
        <div
          className={`storage-menu-item ${option === 3 ? "active" : ""}`}
          onClick={() => selectTimeLine("y")}
        >
          <h3>Ventas Anuales</h3>
        </div>
        <div
          className={`storage-menu-item ${option === 4 ? "active" : ""}`}
          onClick={() => selectTimeLine("t")}
        >
          <h3>Ventas Totales</h3>
        </div>
      </div>
      {option === 0 && <Table_sales type={4} timeline={0} />}
      {option === 1 && <Table_sales type={4} timeline={1} />}
      {option === 2 && <Table_sales type={4} timeline={2} />}
      {option === 3 && <Table_sales type={4} timeline={3} />}
      {option === 4 && <Table_sales type={4} timeline={4} />}
    </StorageS>
  );
};

export default Sales;
