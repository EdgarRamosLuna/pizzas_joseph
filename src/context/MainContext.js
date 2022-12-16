import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import { v4 } from "uuid";
export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const test = true;
  const location = useLocation();
  const pathname = location.pathname.replaceAll("/", "");
  const [showAddInv, setShowAddInv] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const stopProp = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  
  const saveProduct = (type, data) => {
    //console.log(type, data);
    if (type === 1) {
      axios
        .post("https://oasistienda.com/pj2/api/save", { type: type, data: data})
        .then((res) => {
          console.log(res.data);
          let element = res.data;
            setData((prev) => [
              ...prev,
              {
                id: element.id,
                size: element.size,
                price: element.price,
                extra: element.exin,
                cbm: element.chstedm,
                cbp: element.chstedp,
                ec: element.exch,
                fing: element.fin == 0 ? "N/A" : element.fin,
                past: element.pas == 0 ? "N/A" : element.pas,
              },
            ]);
            setShowAddInv(false);
          
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };
 useEffect(() => {
  console.log(data);
 
   return () => {
     
   }
 }, [data])
 
  return (
    <MainContext.Provider
      value={{
        test,
        DataTable,
        location,
        pathname,
        showAddInv,
        setShowAddInv,
        stopProp,
        saveProduct,
        data,
        setData,
        data2,
        setData2,
        data3,
        setData3,
        v4,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
