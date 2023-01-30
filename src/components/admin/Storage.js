import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import MainContext from "../../context/MainContext";
import { Loader, StorageS } from "../../styles/Styles";
import TableStorage from "./tables/Table_storage";

const Storage = () => {
  const { option, setOption, setLoadingS, loadingS } = useContext(MainContext);
  useEffect(() => {
    setLoadingS(true);
    setTimeout(() => {
      setLoadingS(false);
    }, 500);
    return () => {};
  }, [option]);

  return (
    <StorageS>
      <div className="storage-menu">
        <div
          className={`storage-menu-item ${option === 0 ? "active" : ""}`}
          onClick={() => setOption(0)}
        >
          <h3>Pizzas</h3>
        </div>
        <div
          className={`storage-menu-item ${option === 1 ? "active" : ""}`}
          onClick={() => setOption(1)}
        >
          <h3>Otros Productos</h3>
        </div>
        <div
          className={`storage-menu-item ${option === 2 ? "active" : ""}`}
          onClick={() => setOption(2)}
        >
          <h3>Materias Primas</h3>
        </div>
        <div
          className={`storage-menu-item ${option === 3 ? "active" : ""}`}
          onClick={() => setOption(3)}
        >
          <h3>Bebidas</h3>
        </div>
      </div>

 
        {option === 0 && <TableStorage type={0} />}
        {option === 1 && <TableStorage type={1} />}
        {option === 2 && <TableStorage type={2} />}
        {option === 3 && <TableStorage type={3} />}
  
    </StorageS>
  );
};

export default Storage;
