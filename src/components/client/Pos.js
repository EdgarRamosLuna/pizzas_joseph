import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { PosS, StoreOptions, StyledNumber } from "../../styles/Styles";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import MainContext from "../../context/MainContext";
import { useCallback } from "react";
import EditableText from "../../helpers/EditableText";
const Pos = () => {
  const [val, setVal] = useState("");

  const {
    showAddEI,
    setShowAddEI,
    searchResult,
    setSearchResult,
    v4,
    carItem,
    setCarItem,
    extraIngItem,
    setExtraIngItem,
    baseUrl,
    showAlert,
    setShowAlert,
    setTypeAlert,
    sesionData,
    setSesionData,
    bseUrl
  } = useContext(MainContext);
  const [searchResult2, setSearchResult2] = useState([]);
  const [searchResult3, setSearchResult3] = useState([]);
  const [addressCli, setAddressCli] = useState("");
  const [idCliente, setIdCliente] = useState(0);
  const [activeOption, setActiveOption] = useState(1);
  const [envioPrice, setEnvioPrice] = useState(10);
  const [cantN, setCantN] = useState(1);
  const [elementType, setElementType] = useState("span");

  useEffect(() => {
    axios
      .get(`${baseUrl}/server/api/get_clients`)
      .then((res) => {
        //console.log(res.data);

        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          setSearchResult3((prev) => [
            ...prev,
            {
              id: element.id,
              name: element.nombre,
              address: element.direccion,
            },
          ]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(`${baseUrl}/server/api/get`)
      .then((res) => {
        if (res.data.pizza.length > 0) {
          for (let i = 0; i < res.data.pizza.length; i++) {
            const element = res.data.pizza[i];

            let checkItem = updateArray(element.id_item, element.size);
            //    console.log(checkItem);
            if (checkItem.length > 0) {
              if (checkItem[0].exist) {
                setSearchResult2(checkItem[0].newState);
              } else {
                setSearchResult2((prev) => [
                  ...prev,
                  {
                    id: element.id_item,
                    id_item: element.id_item,
                    name: element.size,
                    price: element.price,
                    exin: element.exin,
                    chstedm: element.chstedm,
                    chstedp: element.chstedp,
                    exch: element.exch,
                    fin: element.fin,
                    pas: element.pas,
                    cat: "pizza",
                  },
                ]);
              }
            } else {
              setSearchResult2((prev) => [
                ...prev,
                {
                  id: element.id,
                  id_item: element.id_item,
                  name: element.size,
                  price: element.price,
                  exin: element.exin,
                  chstedm: element.chstedm,
                  chstedp: element.chstedp,
                  exch: element.exch,
                  fin: element.fin,
                  pas: element.pas,
                  cat: "pizza",
                },
              ]);
            }
          }
        }
        if (res.data.mp.length > 0) {
          for (let i = 0; i < res.data.mp.length; i++) {
            const element = res.data.mp[i];

            let checkItem = updateArray(element.id, element.name);
            //   console.log(checkItem);
            if (checkItem.length > 0) {
              if (checkItem[0].exist) {
                setSearchResult(checkItem[0].newState);
              } else {
                setSearchResult((prev) => [
                  ...prev,
                  {
                    id: element.id,
                    name: element.name,
                    cat: "mp",
                  },
                ]);
              }
            } else {
              if (parseInt(element.is_ing) === 1) {
                setSearchResult((prev) => [
                  ...prev,
                  {
                    id: element.id,
                    name: element.name,
                    price: 10,
                    cat: "mp",
                  },
                ]);
              }
            }
          }
        }
        if (res.data.op.length > 0) {
          for (let i = 0; i < res.data.op.length; i++) {
            const element = res.data.op[i];

            let checkItem = updateArray(element.id_item, element.product);
            // console.log(checkItem);
            if (checkItem.length > 0) {
              if (checkItem[0].exist) {
                setSearchResult2(checkItem[0].newState);
              } else {
                setSearchResult2((prev) => [
                  ...prev,
                  {
                    id: element.id,
                    id_item: element.id_item,
                    name: element.product,
                    price: element.price,
                    cat: "op",
                  },
                ]);
              }
            } else {
              setSearchResult2((prev) => [
                ...prev,
                {
                  id: element.id,
                  id_item: element.id_item,
                  name: element.product,
                  price: element.price,
                  cat: "op",
                },
              ]);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    //return () => {};
  }, []);
  // console.log(searchResult);
  const searchItem = (value) => {
    if (value.length >= 3) {
      axios
        .post(`${baseUrl}/server/api/search`, { val: value })
        .then((res) => {})
        .catch((err) => {
          console.error(err);
        });
    } else {
      setSearchResult2([]);
    }
    setVal(value);
    //  api/search
  };
  //console.log(searchResult);
  const updateArray = (id, name) => {
    // console.log(id);
    let existe = false;
    const newState = searchResult2.map((obj) => {
      //   let ca = obj.cant;
      // ca = parseInt(ca);
      //console.log(ca);

      if (parseInt(obj.id) === parseInt(id)) {
        existe = true;
        return { ...obj, name: name };
      }
      return obj;
    });
    const response = [
      {
        exist: existe,
        newState,
      },
    ];
    return response;
    // setCant(newState);
    // setCartItemD(newState);
  };

  const addItemCart = (id, name, cant) => {
    id = parseInt(id);
    cant = parseInt(cant);

    // setCarItem(prev => [...prev, {id:id}]);
  };

  const updateArray2 = (id, name) => {
    // console.log(id);
    let existe = false;
    const newState = carItem.map((obj) => {
      //   let ca = obj.cant;
      // ca = parseInt(ca);
      //console.log(ca);

      if (obj.id_item === id) {
        existe = true;
        let cant = parseInt(obj.cant);
        let newCant = cant + 1;
        return { ...obj, name: name, cant: newCant };
      }
      return obj;
    });
    const response = [
      {
        exist: existe,
        newState,
      },
    ];
    return response;
    // setCant(newState);
    // setCartItemD(newState);
  };

  //const [extras, setExtras] = useState([]);
  const handleOnSearch = (string, results) => {
    // console.log(string);
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    //  console.log(result);
  };

  const handleOnSelect2 = useCallback((item) => {
    // console.log(item);
    setAddressCli(item);
    setIdCliente(item.id);
  });
  const handleOnSelect = useCallback((item) => {
    // the item selected
    console.log(item);
    let checkItem = updateArray2(item.id_item, item.name);
    if (checkItem.length > 0) {
      if (checkItem[0].exist) {
        //setCarItem(checkItem[0].newState);
        setCarItem((prev) => [
          ...prev,
          {
            id: item.id,
            id_item: item.id_item,
            name: item.name,
            ingre: [],
            cant: 1,
            price: parseFloat(item.price),
            exin: parseFloat(item.exin),
            chstedm: parseFloat(item.chstedm).toFixed(2),
            chstedp: parseFloat(item.chstedp).toFixed(2),
            exch: parseFloat(item.exch).toFixed(2),
            fin: parseFloat(item.fin).toFixed(2),
            pas: parseFloat(item.pas).toFixed(2),
            cat: item.cat,
            extras: [],
            or: 0,
            qe: false,
            de: false,
            pa: false,
          },
        ]);
      } else {
        setCarItem((prev) => [
          ...prev,
          {
            id: item.id,
            id_item: item.id_item,
            name: item.name,
            ingre: [],
            cant: 1,
            price: parseFloat(item.price),
            exin: parseFloat(item.exin),
            chstedm: parseFloat(item.chstedm).toFixed(2),
            chstedp: parseFloat(item.chstedp).toFixed(2),
            exch: parseFloat(item.exch).toFixed(2),
            fin: parseFloat(item.fin).toFixed(2),
            pas: parseFloat(item.pas).toFixed(2),
            cat: item.cat,
            extras: [],
            or: 0,
            qe: false,
            de: false,
            pa: false,
          },
        ]);
      }
    } else {
      setCarItem((prev) => [
        ...prev,
        {
          id: item.id,
          id_item: item.id_item,
          name: item.name,
          ingre: [],
          cant: 1,
          price: parseFloat(item.price),
          exin: parseFloat(item.exin),
          chstedm: parseFloat(item.chstedm).toFixed(2),
          chstedp: parseFloat(item.chstedp).toFixed(2),
          exch: parseFloat(item.exch).toFixed(2),
          fin: parseFloat(item.fin).toFixed(2),
          pas: parseFloat(item.pas).toFixed(2),
          cat: item.cat,
          extras: [],
          or: 0,
          qe: false,
          de: false,
          pa: false,
        },
      ]);
    }
  });

  //const [domItem, setDomItem] = useState({});
  const [totalFinal, setTotalFinal] = useState(0);
  useEffect(() => {
    if (document.querySelector(".total-sale") !== null) {
      // El elemento existe en el DOM
      let DOM = document.getElementsByClassName("total-sale");
      //DOM.slot = DOM.textContent;
      let totalSale = 0;
      for (let i = 0; i < DOM.length; i++) {
        const element = DOM[i];
        element.nonce = element.innerHTML;
        totalSale += parseFloat(element.innerHTML);

        //
      }
      // DOM[0].slot = 'test';
      //console.log(totalSale);
      setTotalFinal(totalSale);
      //setDomItem(DOM);
      //  console.log(" El elemento existe en el DOM");
    } else {
      //console.log("El elemento no existe en el DOM");
      // El elemento no existe en el DOM
    }
  }, [handleOnSelect]);
  //console.log();

  const handleOnFocus = (e) => {
    //console.log(e.target);
    //console.log("Focused");
  };
  const formatResult = (item) => {
    return (
      <>
        {/*  <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>*/}
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };
  const removeItem = (indx) => {
    setCarItem(
      carItem.filter((valor, i) => {
        return Number(i) !== Number(indx);
      })
    );
    //console.log(indx);
  };
  const addExtraI = (item) => {
    setShowAddEI(true);
    setExtraIngItem(item);
  };
  const addExtra = (id, status, field) => {
    console.log(status);
    if (status === false) {
      status = true;
    } else {
      status = false;
    }
    updateArray3(id, status, field);
  };
  const addOr = (id, value) => {
    console.log(id, value);
    updateArray4(id, value);
  };
  const updateArray4 = (id, value) => {
    // console.log(id);
    let existe = false;
    const newState = carItem.map((obj, indx) => {
      //   let ca = obj.cant;
      // ca = parseInt(ca);
      //console.log(ca);

      if (indx === id) {
        existe = true;
        return { ...obj, or: value };
      }

      return obj;
    });
    const response = [
      {
        exist: existe,
        newState,
      },
    ];

    // return response;
    setCarItem(newState);
    // setCant(newState);
    // setCartItemD(newState);
  };

  const updateCantArray = (id, value) => {
    // console.log(id);
    let existe = false;
    const newState = carItem.map((obj, indx) => {
      //   let ca = obj.cant;
      // ca = parseInt(ca);
      //console.log(ca);

      if (indx === id) {
        existe = true;
        return { ...obj, cant: value };
      }

      return obj;
    });
    const response = [
      {
        exist: existe,
        newState,
      },
    ];

    // return response;
    setCarItem(newState);
    // setCant(newState);
    // setCartItemD(newState);
  };
  const updateArray3 = (id, status, field) => {
    // console.log(id);
    let existe = false;
    const newState = carItem.map((obj, indx) => {
      //   let ca = obj.cant;
      // ca = parseInt(ca);
      //console.log(ca);

      if (field === "qe") {
        if (indx === id) {
          existe = true;
          return { ...obj, qe: status };
        }
      }
      if (field === "de") {
        if (indx === id) {
          existe = true;

          return { ...obj, de: status };
        }
      }
      if (field === "pa") {
        if (indx === id) {
          existe = true;
          return { ...obj, pa: status };
        }
      }
      return obj;
    });
    const response = [
      {
        exist: existe,
        newState,
      },
    ];

    // return response;
    setCarItem(newState);
    // setCant(newState);
    // setCartItemD(newState);
  };
  // console.log(searchResult2);
  /*const datas = document.querySelector('.test');
  useEffect(() => {
    console.log(datas);
    if(datas !== null){
      console.log('asdasd');
      datas.accessKey = 'test';
     // console.log(datas);
    }
    
    return () => {
    };
  }, [datas]);*/
  const [opIng, setOpIng] = useState([]);
  useEffect(() => {
    for (let i = 0; i < searchResult.length; i++) {
      const element = searchResult[i];
      if (element.cat === "mp") {
        setOpIng((prev) => [...prev, searchResult[i]]);
      }
    }
    
  }, [searchResult]);
  const [dataI, setDataI] = useState([]);
  const addIngre = (id, val) => {
    let arrayData = carItem[id].ingre;

    arrayData = arrayData.slice();

    const element = opIng.find((e) => parseInt(e.id) === parseInt(val));
    if (element) {
      arrayData.push({ id_ing: val, ing: element.name });
    }
    updateArray5(id, arrayData, val);
  };
  const updateArray5 = (id, extras, id_ing = 0) => {
    const newState = carItem.map((obj, idx) => {
      if (parseInt(idx) === parseInt(id)) {
        console.log(obj.ingre);
        const element = obj.ingre.find(
          (e) => parseInt(e.id_ing) === parseInt(id_ing)
        );
        if (element) {
        } else {
          return { ...obj, ingre: extras };
        }
      }
      return obj;
    });
    setCarItem(newState);
  };

  const removeIng = (indx, arrayD, index_main) => {
    let arrayItems = carItem[index_main].ingre;
    arrayD = arrayD.filter((valor, i) => {
      return Number(i) !== Number(indx);
    });
    arrayItems = arrayItems.slice();
    updateArray5(index_main, arrayD);

    //    console.log(arrayD);
  };
  const isWednesday = () => {
    var d = new Date();
    var day = d.getDay();
    return day === 3 || day === 5;
  };
  /*if (isWednesday()) {
    console.log("3 ingredientes");
  } else {
    console.log("2 Ingredientes.");
  }*/
  const [amountCard, setAmountCard] = useState('');
  const [amountCash, setAmountCash] = useState('');
  const [clientName, setClientname] = useState('');
  useEffect(() => {
    setClientname(addressCli.name);
  }, [addressCli]);
  const completeSale = () =>{
    let totalDue = parseFloat(totalFinal) + parseFloat(activeOption === 1 ? 0 : envioPrice );
    if(amountCard === '' && amountCash === ''){
      
      showALertF('fail-sale1', 6000);
      console.log('debes agregar un monto valido ya sea tarjeta o efectivo para completar la venta');
      return false;
    }
    if(Number(amountCash) === Number(totalDue)){
      if(Number(amountCash) === 0){
        showALertF('fail-sale2', 6000);
        console.log('Debes ingresar un monto valido');
        return false;
      }
      
    }
    if(Number(amountCard) === Number(totalDue)){
      if(Number(amountCard) === 0){
        showALertF('fail-sale2', 6000);
        console.log('Debes ingresar un monto valido');
        return false;
      }
    }
   
    let totalPayment = parseFloat(amountCash === '' ? 0 : amountCash) + parseFloat(amountCard === '' ? 0 : amountCard);
    if(Number(totalPayment) < Number(totalDue) ){
      showALertF('fail-sale3', 6000);
      console.log('Debes debes completar el total del costo de la venta para continuar');

      return false;
    }
    //console.log(totalPayment);
    //console.log(totalDue);
    //console.log(carItem);
 //   console.log('venta completada');
    
    axios.post(`${baseUrl}/server/api/complete-sale`, {data:carItem, del:activeOption === 1 ? 0 : envioPrice, total:totalFinal, order:activeOption === 1 ? "Local":"Domicilio", total_cash:Number(amountCash), total_card:Number(amountCard), sale_data:addressCli, client:clientName}, {headers: {
      Authorization: `Bearer ${sesionData}`,
    },}).then((res) =>{
      const error = res.data.error;
      const id_sale = res.data.id_sale;
      if(!error){
        showALertF('success-sale', 3000 ,id_sale);
      }
      //console.log(error);
    }).catch((err) => {
      console.log(err);
    });
    

  }
  const showALertF = (type = '', time = 3000, id_sale) =>{
     setShowAlert(true);
     setTypeAlert(type);
     
     setTimeout(() => {
       setShowAlert(false);
       if(type === 'success-sale'){
         window.open(`${bseUrl}/ticket/${id_sale}`, "_blank");
       }
      }, time);
  }

  return (
    <PosS>
      <div className="container">
        <div className="body">
          <div className="header-search">
            <ReactSearchAutocomplete
              items={searchResult2}
              onSearch={handleOnSearch}
              //   onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
            />
          </div>
          {/*<div className="header">
            <div className="search">
              <div className="search-btn" onClick={searchItem}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="search-field">
                <input
                  type=""
                  name=""
                  value={val}
                  placeholder="Buscar productos"
                  onChange={(e) => searchItem(e.target.value)}
                />
              </div>
            </div>
            <div className="search-result">
              {searchResult.length > 0
                ? searchResult.map((data) => {
                    return (
                      <div
                        className="result-item"
                        onClick={() => addItemCart(data.id, data.name, 1)}
                      >
                        {data.name}
                      </div>
                    );
                  })
                : ""}
            </div>
                </div>*/}
          <div className="body-table">
            <div className="table-container">
              <table>
                <tbody>
                  <tr className="table-header">
                    <th></th>
                    <th>Producto</th>
                    <th>Ingredientes</th>

                    <th>O. Rellena</th>
                    <th>Q. Extra</th>
                    <th>Deditos</th>
                    <th>Pastor</th>
                    <th>Precio</th>
                    <th>Cant.</th>
                    <th>Ext.</th>
                    <th>Total</th>
                  </tr>
                  {carItem.length > 0 ? (
                    <>
                      {carItem.map((data, index_main) => {
                        return (
                          <tr key={data.id_item + index_main}>
                            <td style={{ textAlign: "center" }}>
                              <i
                                className="fa-solid fa-trash"
                                onClick={() => removeItem(index_main)}
                              ></i>
                            </td>
                            <td>
                              {data.cat === "pizza" ? "Pizza " : ""}
                              {data.name}
                            </td>
                            <td>
                              {data.cat === "pizza" ? (
                                <>
                                  <select
                                    name="ing"
                                    value={dataI.ing}
                                    onChange={(e) =>
                                      addIngre(index_main, e.target.value)
                                    }
                                  >
                                    <option value="0">
                                      Selecciona un ingrediente
                                    </option>
                                    {opIng.map((item, indx) => {
                                      return (
                                        <option
                                          value={item.id}
                                          key={`${
                                            opIng.length + carItem.length
                                          }-${item.name}-${indx}`}
                                        >
                                          {item.name}
                                        </option>
                                      );
                                    })}
                                  </select>

                                  <div
                                    className="list-extras"
                                    style={{
                                      display: `${
                                        data.ingre.length >= 1 ? "flex" : "none"
                                      } `,
                                    }}
                                  >
                                    {data.ingre.map((item, index2) => {
                                      return (
                                        <div
                                          className="ingContainer"
                                          key={item.ing}
                                        >
                                          <div className="ingItemContainer">
                                            <div className="ingName">
                                              {item.ing}
                                            </div>
                                            <div className="btnDelIng">
                                              <i
                                                className="fa-solid fa-circle-xmark"
                                                onClick={(e) =>
                                                  removeIng(
                                                    index2,
                                                    data.ingre,
                                                    index_main
                                                  )
                                                }
                                              />
                                            </div>
                                          </div>
                                          {index2 === 1 &&
                                          data.ingre.length > 2 ? (
                                            <div className="extra-ing">
                                              <h5>Ingredientes extra</h5>
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </>
                              ) : (
                                ""
                              )}
                              {}
                            </td>
                            {/*<td style={{ textAlign: "center" }}>
                              {data.cat === "pizza" ? (
                                <>
                                  <i
                                    className="fa-solid fa-circle-plus"
                                    onClick={() => addExtraI(index_main)}
                                  ></i>

                                  <div className="list-extras">
                                    {data.extras.map((item, index2) => {
                                      return <div key={index2}>{item.ing}</div>;
                                    })}
                                  </div>
                                </>
                              ) : (
                                ""
                              )}
                              </td>*/}
                            <td>
                              <div className="td-container">
                                {data.cat === "pizza" ? (
                                  <select
                                    onChange={(e) =>
                                      addOr(index_main, e.target.value)
                                    }
                                  >
                                    <option value="0">
                                      Selecciona una opcion
                                    </option>
                                    <option value="1">
                                      Queso Philadelphia
                                    </option>
                                    <option value="2">Queso Mozaerlla</option>
                                  </select>
                                ) : (
                                  ""
                                )}
                              </div>
                            </td>
                            <td>
                              {parseFloat(data.exch) === 0.0 ? (
                                ""
                              ) : (
                                <>
                                  {data.cat === "pizza" ? (
                                    <input
                                      type="checkbox"
                                      checked={data.qe}
                                      onChange={() =>
                                        addExtra(index_main, data.qe, "qe")
                                      }
                                    />
                                  ) : (
                                    ""
                                  )}
                                </>
                              )}
                            </td>
                            <td>
                              {parseFloat(data.fin) === 0.0 ? (
                                ""
                              ) : (
                                <>
                                  {data.cat === "pizza" ? (
                                    <input
                                      type="checkbox"
                                      checked={data.de}
                                      onChange={() =>
                                        addExtra(index_main, data.de, "de")
                                      }
                                    />
                                  ) : (
                                    ""
                                  )}
                                </>
                              )}
                            </td>
                            <td>
                              {parseFloat(data.pas) === 0.0 ? (
                                ""
                              ) : (
                                <>
                                  {data.cat === "pizza" ? (
                                    <input
                                      type="checkbox"
                                      checked={data.pa}
                                      onChange={() =>
                                        addExtra(index_main, data.pa, "pa")
                                      }
                                    />
                                  ) : (
                                    ""
                                  )}
                                </>
                              )}
                            </td>
                            <td>${parseFloat(data.price).toFixed(2)}</td>
                            <td>
                              <EditableText data={data} id={index_main} fun={updateCantArray} />
                            </td>
                            <td>
                              {data.cat === "pizza"
                                ? (
                                    parseFloat(data.exin) *
                                    parseInt(
                                      data.ingre.length > 2
                                        ? data.ingre.length - 2
                                        : 0
                                    )
                                  ).toFixed(2)
                                : ""}
                            </td>
                            <td>
                              $
                              <span className="total-sale">
                                {parseFloat(
                                  (parseFloat(data.price) +
                                    (data.ingre.length > 2
                                      ? Number(data.ingre.length - 2) *
                                        parseFloat(data.exin)
                                      : 0) +
                                    (data.qe === true
                                      ? parseFloat(data.exch)
                                      : 0) +
                                    (data.de === true
                                      ? parseFloat(data.fin)
                                      : 0) +
                                    (data.pa === true
                                      ? parseFloat(data.pas)
                                      : 0) +
                                    (parseInt(data.or) === 1
                                      ? parseFloat(data.chstedp)
                                      : 0) +
                                    (parseInt(data.or) === 2
                                      ? parseFloat(data.chstedm)
                                      : 0)) *
                                    parseInt(data.cant)
                                ).toFixed(2)}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <div className="rp-container0">
            <div className="store-options">
              <h2 style={{ width: "100%" }}>
                Tipo de pedido: <br />
              </h2>
              <div style={{ width: "100%", marginBottom: 15 }}>
                {activeOption === 1 ? "Para comer aqui" : "Para llevar"}
              </div>
              <StoreOptions
                className={`store-option ${
                  activeOption === 1 && "type-active"
                }`}
                onClick={() => setActiveOption(1)}
              >
                {/*<h4>Para comer aqui</h4>*/}
                <i className="fa-solid fa-shop"></i>
              </StoreOptions>
              <StoreOptions
                className={`store-option ${
                  activeOption === 2 && "type-active"
                }`}
                onClick={() => setActiveOption(2)}
              >
                {/*<h4>A Domicilio</h4>*/}
                <i className="fa-solid fa-motorcycle"></i>
              </StoreOptions>
            </div>
          </div>
          {activeOption === 1 ? (
            ""
          ) : (
            <div className="rp-container1">
              <div className="rp-container-1-1">
                <div className="search-client">
                  <label htmlFor="">Selecciona un cliente:</label>
                  <ReactSearchAutocomplete
                    items={searchResult3}
                    onSearch={handleOnSearch}
                    onHover={handleOnHover}
                    onSelect={handleOnSelect2}
                    onFocus={handleOnFocus}
                    autoFocus
                    formatResult={formatResult}
                  />
                </div>
                <div className="address">
                  <center>
                    <label htmlFor="">Cliente:</label>
                    
                    
                  </center>
                  <input type="" name="" value={clientName} onChange={(e) => setClientname(e.target.value)} />
                </div>
                <div className="address">
                  <center>
                    <label htmlFor="">Direccion de envio:</label>
                  </center>
                  <textarea
                    type="text"
                    placeholder="Direccion"
                    onChange={(e) => setAddressCli({ address: e.target.value })}
                    value={addressCli.address}
                  />
                </div>
              </div>
            </div>
          )}
          <div className="rp-container2">
            {activeOption === 1 ? (
              ""
            ) : (
              <div className="total">
                <h3>Envio</h3>
                <span>$10.00</span>
              </div>
            )}
            <div className="subtotal">
              <h3>Subtotal</h3>
              <span>${parseFloat(totalFinal).toFixed(2)}</span>
            </div>
            <div className="total">
              <h3>Total</h3>
              {activeOption === 1 ? (
                <span>${parseFloat(totalFinal).toFixed(2)}</span>
              ) : (
                <span>${(parseFloat(totalFinal) + envioPrice).toFixed(2)}</span>
              )}
            </div>
            <label htmlFor="efe">Pagar con efectivo</label>
            <div className="complete-payment">
              
              <div className="cp-input-container">
                <input type="text" placeholder="Monto Efectivo" name="efe" value={amountCash} onChange={(e) => setAmountCash(e.target.value)} />
              </div>
            </div>
            <label htmlFor="car">Pagar con tarjeta</label>
            <div className="complete-payment">
              <div className="cp-input-container">
                <input type="text" placeholder="Monto Tarjeta" name="car" value={amountCard} onChange={(e) => setAmountCard(e.target.value)} />
              </div>
            </div>
            <div className="complete">
              <div className="cp-btn">
                <button type="button" onClick={completeSale}>Completar venta</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </PosS>
  );
};

export default Pos;
