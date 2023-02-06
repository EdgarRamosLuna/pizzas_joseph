import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useLocation } from "react-router-dom";
import { v4 } from "uuid";
import { ActionBtns } from "../styles/Styles";
export const MainContext = createContext();
export const MainContextProvider = ({ children }) => {
  const isOnline = navigator.onLine;
  // console.log(isOnline);
  //console.log(process.env.REACT_APP_API_URL);
  //console.log(process.env.REACT_APP_URL);

  const [baseUrl, setBaseUrl] = useState(
    isOnline === true
      ? process.env.REACT_APP_API_URL_DEVELOPMENT
      : process.env.REACT_APP_API_URL_LOCAL_SERVER
  );
  const [bseUrl, setBseUrl] = useState(
    process.env.REACT_APP_API_URL_LOCAL_CLIENT
  );
  const test = true;
  const location = useLocation();
  const pathname = location.pathname.replaceAll("/", "");
  const [showAddInv, setShowAddInv] = useState(false);
  const [showAddU, setShowAddU] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState([]);
  
  const [showAddC, setShowAddC] = useState(false);
  
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [showConfBox, setShowConfBox] = useState(false);
  const [showConfBox2, setShowConfBox2] = useState(false);
  const [confirmed2, setConfirmed2] = useState(false);
  const [delConf, setDelConf] = useState(false);
  const [id_item, setId_item] = useState("");
  const [table, setTable] = useState(0);
  const [showAddEI, setShowAddEI] = useState(false);
  const [showAddI, setShowAddI] = useState(false);
  const [carItem, setCarItem] = useState([]);
  const [extraIngItem, setExtraIngItem] = useState("");

  const [sesion, setSesion] = useState(false);
  const [sesionData, setSesionData] = useState("");
  const [turn, setTurn] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [loadingS, setLoadingS] = useState(false);
  const [loadingS2, setLoadingS2] = useState(false);
  const [typeAlert, setTypeAlert] = useState("");
  const [option, setOption] = useState(0);
  const [option2, setOption2] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isEdit2, setIsEdit2] = useState(false);
  const stopProp = (e) => {
    e.stopPropagation();
  };
  useEffect(() => {
    const token = localStorage?.getItem("token");
    const turno = localStorage?.getItem("turno");
    if (token !== null) {
      setSesionData(token);
      // console.log(token);
      setSesion(true);
    //  window.location.reload(true);
      
    }
    if (turno !== null) {
      //  setSesionData(token);
      //  console.log(turno);
      setTurn(Number(turno));
      // setSesion(true);
    }
    //setSesionToken()
    return () => {};
  }, [sesion]);
  const alertError = () =>{
    setShowAlert(true);
      setTypeAlert("missing-info");
   //   setIsEdit(false);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
  }
  let pattern = /^[0-9]+$/;
  const saveProduct = (type, data) => {
    console.log(type, data);
    
    if(type === 1){
      if (data.size === '') {
        alertError();
        return false;
      }
      if (data.price === '' || pattern.test(Number(data.price)) !== true) {
        alertError();
        return false;
      }
    }
    if(type === 2){
      if (data.product === '') {
        alertError();
        return false;
      }
      if (data.price === '' || pattern.test(Number(data.price)) !== true) {
        alertError();
        return false;
      }
    }
    if(type === 3){
      if (data.name === '') {
        alertError();
        return false;
      }
    }
    if(type === 4){
      /*if( pattern.test(data.price) === true ){
        console.log('asdasd');
      }*/
      if (data.name === '') {
        alertError();
        return false;
      }
      if (data.price === '' || pattern.test(Number(data.price)) !== true) {
        alertError();
        return false;
      }
      if (data.cant === '') {
        alertError();
        return false;
      }
    }
    if(type === 5){
      /*if( pattern.test(data.price) === true ){
        console.log('asdasd');
      }*/
      if (data.name === '') {
        alertError();
        return false;
      }
      if (data.password === '') {
        alertError();
        return false;
      }
      if (data.user_type === '') {
        alertError();
        return false;
      }
    }

    if(type === 6){
      /*if( pattern.test(data.price) === true ){
        console.log('asdasd');
      }*/
      if (data.name === '') {
        alertError();
        return false;
      }
      if (data.direccion === '') {
        alertError();
        return false;
      }
    }

    //return false;
    axios
      .post(`${baseUrl}/server/api/save`, { type: type, data: data, id: v4() })
      .then((res) => {
        // console.log(parseFloat(res.data.price));
        let element = res.data;
        if (type === 1) {
          setData((prev) => [
            ...prev,
            {
              id: element.id,
              id_item: element.id_item,
              size: element.size,
              price: parseFloat(element.price).toFixed(2),
              extra: element.exin !== '' ? parseFloat(element.exin).toFixed(2) : '0.00',
              cbm: element.chstedm !== '' ? parseFloat(element.chstedm).toFixed(2) : '0.00',
              cbp: element.chstedp !== '' ? parseFloat(element.chstedp).toFixed(2) : '0.00',
              ec: element.exch !== '' ? parseFloat(element.exch).toFixed(2) : '0.00',
              fing:
                element.fin == 0 ? "N/A" : parseFloat(element.fin).toFixed(2),
              past:
                element.pas == 0 ? "N/A" : parseFloat(element.pas).toFixed(2),
              actions: (
                <ActionBtns>
                  <button
                    className="btn btn-edit"
                    onClick={(e) => updateItem(e, element.id_item, 1)}
                  />
                  <button
                    className="btn btn-del"
                    onClick={() => removeItem(element.id_item, 1)}
                  />
                </ActionBtns>
              ),
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
              actions: (
                <ActionBtns>
                  <button
                    className="btn btn-edit"
                    onClick={(e) => updateItem(e, element.id_item, 2)}
                  />
                  <button
                    className="btn btn-del"
                    onClick={() => removeItem(element.id_item, 2)}
                  />
                </ActionBtns>
              ),
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
              cant: element.cant,
              actions: (
                <ActionBtns>
                  <button
                    className="btn btn-edit"
                    onClick={(e) => updateItem(e, element.id_item, 3)}
                  />
                  <button
                    className="btn btn-del"
                    onClick={() => removeItem(element.id_item, 3)}
                  />
                </ActionBtns>
              ),
            },
          ]);
          let clearModal = document.querySelector(".modal-form");
          //console.log();
          // clearModal.childNodes[1].children[1].options.selectedIndex = 0;
        }
        if (type === 4) {
          setData((prev) => [
            ...prev,
            {
              id: element.id,
              id_item: element.id_item,
              price: Number(element.sale_price).toFixed(2),
              name: element.name,
              cant: element.cant,
              actions: (
                <ActionBtns>
                  <button
                    className="btn btn-edit"
                    onClick={(e) => updateItem(e, element.id_item, 4)}
                  />
                  <button
                    className="btn btn-del"
                    onClick={() => removeItem(element.id_item, 4)}
                  />
                </ActionBtns>
              ),
            },
          ]);
        }
        if (type === 5) {
          setData((prev) => [
            ...prev,
            {
              id: element.id,
              user: element.name,
              status:element.status_cuenta,
              actions: <ActionBtns >
                <button className="btn btn-edit" onClick={(e) => updateItem(e, element.id, 6)} />
                <button className="btn btn-del"  onClick={() => removeItem(element.id, 6)} />
                
              </ActionBtns>,
            },
          ]);
        }
        if (type === 6) {
          setData((prev) => [
            ...prev,
            {
              id: element.id,
              nombre: element.nombre,
              direccion: element.direccion,
              status: element.status,
              actions: <ActionBtns >
                <button className="btn btn-edit" onClick={(e) => updateItem(e, element.id, 7)} />
                <button className="btn btn-del"  onClick={() => removeItem(element.id, 7)} />
                
              </ActionBtns>,
            },
          ]);
        }
        setShowAlert(true);
        setTypeAlert("success-save");
        setIsEdit(false);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        setShowAddInv(false);
        setShowAddU(false);
        setShowAddC(false);
        //     setShowAddInv(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const updateData = (type, id, dataDb) => {
    //  console.log(id, data);

    //  return false;
    axios
      .post(`${baseUrl}/server/api/update`, { type, data: dataDb, id })
      .then((res) => {
        // console.log(parseFloat(res.data.price));
        let element = res.data;

        if (type === 1) {
          const newState = data.map((obj) => {
            if (obj.id_item === id) {
              return {
                ...obj,
                size: element.size,
                price: parseFloat(element.price).toFixed(2),
                extra: parseFloat(element.exin).toFixed(2),
                cbm: parseFloat(element.chstedm).toFixed(2),
                cbp: parseFloat(element.chstedp).toFixed(2),
                ec: parseFloat(element.exch).toFixed(2),
                fing:
                  element.fin === 0
                    ? "N/A"
                    : parseFloat(element.fin).toFixed(2),
                past:
                  element.pas === 0
                    ? "N/A"
                    : parseFloat(element.pas).toFixed(2),
              };
            }
            return obj;
          });
          setData(newState);
        }
        if (type === 2) {
          const newState = data2.map((obj) => {
            if (obj.id_item === id) {
              return {
                ...obj,
                product: element.product,
                price: parseFloat(element.price).toFixed(2),
                ha: parseFloat(element.ha).toFixed(2),
                sal: parseFloat(element.sal).toFixed(2),
                doca: parseFloat(element.doca).toFixed(2),
              };
            }
            return obj;
          });
          setData2(newState);
        }
        if (type === 3) {
          const newState = data3.map((obj) => {
            if (obj.id_item === id) {
              return {
                ...obj,
                is_ing: element.is_ing,
                name: element.name,
                cant: element.cant,
              };
            }
            return obj;
          });
          setData3(newState);
        }
        if (type === 4) {
          const newState = data.map((obj) => {
            if (obj.id_item === id) {
              return {
                ...obj,
                name: element.name,
                price: Number(element.sale_price).toFixed(2),
                cant: element.cant,
              };
            }
            return obj;
          });
          setData(newState);
        }
        if (type === 5) {
          const newState = data.map((obj) => {
            if (obj.id === id) {
              return {
                ...obj,
                user: element.name,
              };
            }
            return obj;
          });
          setData(newState);
        }
        if (type === 6) {
          const newState = data.map((obj) => {
            if (obj.id === id) {
              return {
                ...obj,
                nombre: element.nombre,
                direccion: element.direccion,
                status: element.status,
              };
            }
            return obj;
          });
          setData(newState);
        }
        setShowAlert(true);
        setTypeAlert("success-update");
        setIsEdit(false);
        setIsEdit2(false);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
        setShowAddInv(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    return () => {};
  }, [data]);

  const [actualData, setActualData] = useState([]);
  const updateItem = (e, item, type) => {
    setActualData([]);
    setOption2(type);
    const parent = e.target.parentNode;
    //const arrayChildren = parent.children;
    setId_item(item);
    //console.log(parent.parentNode.parentNode.parentNode.childNodes);
    //console.log(item);
    const dataI = parent.parentNode.parentNode.parentNode.childNodes;

    Array.from(dataI).map((element) =>
      setActualData((prev) => [
        ...prev,
        { data: element.children[0].innerText },
      ])
    );
    //console.log(JSON.stringify(dataI);
    /*dataI.forEach(function(element) {
      console.log(element);
    });*/
    //console.log(Array.from(dataI).forEach(child => child));
    //console.log(type);

    if (type === 6 || type === 7) {
      //   console.log('entro' + type);
      setIsEdit2(true);
    } else {
      setIsEdit(true);
    }
  };
  const askAction = (id_item) => {
    setShowConfBox(true);
    setId_item(id_item);
  };
  const removeItem = (id_item, table) => {
    askAction(id_item);
    setTable(table);
  };
  const deleteItemDb = (id_item, table, seter) => {
    if (parseInt(table) === 1) {
      setData((prev) => prev.filter((item) => item.id_item !== id_item));
      /*setData((prev) => {
      return prev.filter((item) => item.id_item !== id_item);
    });*/
    }
    if (parseInt(table) === 2)
      setData2((prev) => prev.filter((item) => item.id_item !== id_item));
    if (parseInt(table) === 3)
      setData3((prev) => prev.filter((item) => item.id_item !== id_item));
    if (parseInt(table) === 4)
      setData((prev) => prev.filter((item) => item.id_item !== id_item));
    if (parseInt(table) === 5)
      setData((prev) => prev.filter((item) => item.id !== id_item));
    if (parseInt(table) === 6)
      setData((prev) => prev.filter((item) => item.id !== id_item));
    if (parseInt(table) === 7)
      setData((prev) => prev.filter((item) => item.id !== id_item));
    setShowConfBox(false);
    saveChangesDB(table, id_item);
  };
  const saveChangesDB = async (table, id) => {
    //const bseUrl = 'https://mi-url.com';
    try {
      const response = await axios.post(`${baseUrl}/server/api/delete`, {
        id,
        table,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const onlyNumbers = /^\d+$/;

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
        showAddEI,
        setShowAddEI,
        searchResult,
        setSearchResult,
        carItem,
        setCarItem,
        extraIngItem,
        setExtraIngItem,
        showConfBox,
        setShowConfBox,
        delConf,
        setDelConf,
        id_item,
        setId_item,
        updateItem,
        removeItem,
        table,
        setTable,
        deleteItemDb,
        showAddI,
        setShowAddI,
        onlyNumbers,
        baseUrl,
        sesion,
        setSesion,
        sesionData,
        setSesionData,
        isOnline,
        turn,
        setTurn,
        showAlert,
        setShowAlert,
        typeAlert,
        setTypeAlert,
        bseUrl,
        setBseUrl,
        option,
        setOption,
        option2,
        setOption2,
        loadingS,
        setLoadingS,
        loadingS2,
        setLoadingS2,
        isEdit,
        setIsEdit,
        isEdit2,
        setIsEdit2,
        actualData,
        setActualData,
        updateData,
        showAddU, setShowAddU,
        showAddC, setShowAddC,
        showDetails, setShowDetails,
        details, setDetails,
        showConfBox2, setShowConfBox2,
        confirmed2, setConfirmed2
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
