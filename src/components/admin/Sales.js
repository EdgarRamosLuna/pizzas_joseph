import React, { forwardRef } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import MainContext from "../../context/MainContext";
import { StorageS } from "../../styles/Styles";
import Table_sales from "./tables/Table_sales";
const Sales = () => {
  const { setLoadingS, setLoadingS2, option } = useContext(MainContext);
  
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
  return (
    <StorageS>
      <div className="storage-menu">
        <div className={`storage-menu-item active`}>
          <h3>Ventas</h3>
        </div>
      </div>
      <Table_sales type={4} />
    </StorageS>
  );
};

export default Sales;
