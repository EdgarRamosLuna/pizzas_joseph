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
  const [searchResult, setSearchResult] = useState([]);
  const stopProp = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    
  
    return () => {
      
    }
  }, [])
  
  const saveProduct = (type, data) => {
    //console.log(type, data);

      axios
        .post("https://oasistienda.com/pj/api/save", { type: type, data: data})
        .then((res) => {
          console.log(parseFloat(res.data.price));
          let element = res.data;
          if (type === 1) {
            setData((prev) => [
              ...prev,
              {
                id: element.id,
                size: element.size,
                price: parseFloat(element.price).toFixed(2),
                extra: parseFloat(element.exin).toFixed(2),
                cbm: parseFloat(element.chstedm).toFixed(2),
                cbp: parseFloat(element.chstedp).toFixed(2),
                ec: parseFloat(element.exch).toFixed(2),
                fing: element.fin == 0 ? "N/A" : parseFloat(element.fin).toFixed(2),
                past: element.pas == 0 ? "N/A" : parseFloat(element.pas).toFixed(2),
              },
            ]);
          
          }
          if (type === 2) {
            setData2((prev) => [
              ...prev,
              {
                id: element.id,
                product: element.product,
                price: parseFloat(element.price).toFixed(2),
                ha: parseFloat(element.ha).toFixed(2),
                sal: parseFloat(element.sal).toFixed(2),
                doca: parseFloat(element.doca).toFixed(2),
              },
            ]);
          
          }
          if (type === 3) {
            setData3((prev) => [
              ...prev,
              {
                id: element.id,
                is_ing: element.is_ing,
                name: element.name,
                price_bu: parseFloat(element.price_bu).toFixed(2),
                cant: element.cant,
              },
            ]);
          
          }
            setShowAddInv(false);
          
        })
        .catch((err) => {
          console.error(err);
        });
    
  };
 useEffect(() => {
 // console.log(data);
 
   return () => {
     
   }
 }, [data])
 const [showAddEI, setShowAddEI] = useState(false);
 const [carItem, setCarItem] = useState([]);
 const [extraIngItem, setExtraIngItem] = useState('');
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
        showAddEI, setShowAddEI,
        searchResult, setSearchResult,
        carItem, setCarItem,
        extraIngItem, setExtraIngItem
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
