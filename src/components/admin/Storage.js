import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import MainContext from "../../context/MainContext";
import { Loader, StorageS } from "../../styles/Styles";
import TableStorage from "./tables/Table_storage";

const Storage = () => {
  const { option, setOption, setLoadingS2, loadingS } = useContext(MainContext);
  useEffect(() => {
    setLoadingS2(true);
    setTimeout(() => {
      setLoadingS2(false);
    }, 500);
    return () => {};
  }, [option]);
  
  useEffect(() => {
    
   // const element = document.querySelector(".storage-menu");
   // element.scrollLeft = element.scrollWidth;
    return () => {
      
    };
  }, []);
  const scrollToBottom = (clase) => {
  //  console.log(clase);
    const element = document.querySelector(`.${clase}`);
    const duration = 1000; // duración en milisegundos
    const start = element.scrollLeft;
    const end = element.scrollWidth;
    const change = end - start;
    const increment = 20; // tiempo en milisegundos entre cada frame de la animación

    //element.scrollLeft = element.scrollWidth;
    const animateScroll = (elapsedTime) => {
      const position = easeInOut(elapsedTime, start, change, duration);
      element.scrollLeft = position;
      if (elapsedTime < duration) {
        setTimeout(() => {
          animateScroll(elapsedTime + increment);
        }, increment);
      }
    };
    
    const easeInOut = (currentTime, start, change, duration) => {
      currentTime /= duration / 2;
      if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
      }
      currentTime -= 1;
      return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
    };
    animateScroll(0);
    setOption(4)
  };
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
        {/*<div
          className={`storage-menu-item ${option === 4 ? "active" : ""} `}
          onClick={() => scrollToBottom('storage-menu')}
        >
          <h3>Especialidades</h3>
  </div>*/}
      </div>

 
        {option === 0 && <TableStorage type={0} />}
        {option === 1 && <TableStorage type={1} />}
        {option === 2 && <TableStorage type={2} />}
        {option === 3 && <TableStorage type={3} />}
        {option === 4 && <TableStorage type={4} />}
  
    </StorageS>
  );
};

export default Storage;
