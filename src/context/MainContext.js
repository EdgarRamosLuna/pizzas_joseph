import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import { v4 } from "uuid";
import { ActionBtns } from "../styles/Styles";
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
  const [showConfBox, setShowConfBox] = useState(false);
  const [delConf, setDelConf] = useState(false);
  const [id_item, setId_item] = useState('');
  const [table, setTable] = useState(0);
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
        .post("http://phpstack-491629-3140445.cloudwaysapps.com/api/save", { type: type, data: data, id:v4()})
        .then((res) => {
          console.log(parseFloat(res.data.price));
          let element = res.data;
          if (type === 1) {
            setData((prev) => [
              ...prev,
              {
                id: element.id,
                id_item: element.id_item,
                size: element.size,
                price: parseFloat(element.price).toFixed(2),
                extra: parseFloat(element.exin).toFixed(2),
                cbm: parseFloat(element.chstedm).toFixed(2),
                cbp: parseFloat(element.chstedp).toFixed(2),
                ec: parseFloat(element.exch).toFixed(2),
                fing: element.fin == 0 ? "N/A" : parseFloat(element.fin).toFixed(2),
                past: element.pas == 0 ? "N/A" : parseFloat(element.pas).toFixed(2),
                actions: <ActionBtns >
                <button className="btn btn-edit" onClick={() => updateItem(element.id_item, 1)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className="btn btn-del"  onClick={() => removeItem(element.id_item, 1)}><i className="fa-solid fa-trash"></i></button>
                </ActionBtns>
              },
            ]);
          
          }
          if (type === 2) {
            setData2((prev) => [
              ...prev,
              {
                id: element.id,
                id_item: element.id_item,
                product: element.product,
                price: parseFloat(element.price).toFixed(2),
                ha: parseFloat(element.ha).toFixed(2),
                sal: parseFloat(element.sal).toFixed(2),
                doca: parseFloat(element.doca).toFixed(2),
                actions: <ActionBtns >
                <button className="btn btn-edit" onClick={() => updateItem(element.id_item, 2)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className="btn btn-del"  onClick={() => removeItem(element.id_item, 2)}><i className="fa-solid fa-trash"></i></button>
                </ActionBtns>
              },
            ]);
          
          }
          if (type === 3) {
            setData3((prev) => [
              ...prev,
              {
                id: element.id,
                id_item: element.id_item,
                is_ing: element.is_ing,
                name: element.name,
                price_bu: parseFloat(element.price_bu).toFixed(2),
                cant: element.cant,
                actions: <ActionBtns >
                <button className="btn btn-edit" onClick={() => updateItem(element.id_item, 3)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className="btn btn-del"  onClick={() => removeItem(element.id_item, 3)}><i className="fa-solid fa-trash"></i></button>
                </ActionBtns>
              },
            ]);
            let clearModal = document.querySelector('.modal-form');
            //console.log();
           // clearModal.childNodes[1].children[1].options.selectedIndex = 0;
          }
          
       //     setShowAddInv(false);
          
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
 const [showAddI, setShowAddI] = useState(false);
 const [carItem, setCarItem] = useState([]);
 const [extraIngItem, setExtraIngItem] = useState('');
 
 const updateItem = (item) =>{
    console.log(item);
  }
  const askAction = (id_item) => {
  setShowConfBox(true);
  setId_item(id_item);
  
  //console.log(id_item);


  }
  const removeItem = (id_item, table) =>{
  
  askAction(id_item);
  setTable(table);

  
  }
const deleteItemDb = (id_item, table) =>{
  if(parseInt(table) === 1){
    setData((prev) => prev.filter((item) => item.id_item !== id_item));
    setShowConfBox(false);
    /*setData((prev) => {
      return prev.filter((item) => item.id_item !== id_item);
    });*/
  }
  if(parseInt(table) === 2){
    setData2((prev) => prev.filter((item) => item.id_item !== id_item));
    setShowConfBox(false);

  }
  if(parseInt(table) === 3){
    setData3((prev) => prev.filter((item) => item.id_item !== id_item));
    setShowConfBox(false);

  }
}
  
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
        extraIngItem, setExtraIngItem,
        showConfBox, setShowConfBox,
        delConf, setDelConf,
        id_item, setId_item,
        updateItem,
        removeItem,
        table, setTable,
        deleteItemDb,
        showAddI, setShowAddI
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
