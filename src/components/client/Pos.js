import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { PosS } from "../../styles/Styles";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import MainContext from "../../context/MainContext";
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
  } = useContext(MainContext);
  const [searchResult2, setSearchResult2] = useState([]);
  useEffect(() => {
    axios
      .get("https://oasistienda.com/pj/api/get")
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
                    id: element.id,
                    id_item: element.id_item,
                    name: element.size,
                    price: element.price,
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
                    price: 10,
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
        .post("https://oasistienda.com/pj/api/search", { val: value })
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
  useEffect(() => {
    return () => {};
  }, [searchResult]);

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
  console.log(carItem);
  //const [extras, setExtras] = useState([]);
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    //console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    //  console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    let checkItem = updateArray2(item.id_item, item.name);
    if (checkItem.length > 0) {
      if (checkItem[0].exist) {
        setCarItem(checkItem[0].newState);
      } else {
        setCarItem((prev) => [
          ...prev,
          {
            id: item.id,
            id_item: item.id_item,
            name: item.name,
            cant: 1,
            price: parseFloat(item.price),
            chstedm: parseFloat(item.chstedm).toFixed(2),
            chstedp: parseFloat(item.chstedp).toFixed(2),
            exch: parseFloat(item.exch).toFixed(2),
            fin: parseFloat(item.fin).toFixed(2),
            pas: parseFloat(item.pas).toFixed(2),
            cat: item.cat,
            extra: 0,
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
          cant: 1,
          price: parseFloat(item.price),
          chstedm: parseFloat(item.chstedm).toFixed(2),
          chstedp: parseFloat(item.chstedp).toFixed(2),
          exch: parseFloat(item.exch).toFixed(2),
          fin: parseFloat(item.fin).toFixed(2),
          pas: parseFloat(item.pas).toFixed(2),
          cat: item.cat,
          extra: 0,
          extras: [],
          or: 0,
          qe: false,
          de: false,
          pa: false,
        },
      ]);
    }
  };

  const handleOnFocus = () => {
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
  const removeItem = (data) => {
    console.log(data);
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
    const newState = carItem.map((obj) => {
      //   let ca = obj.cant;
      // ca = parseInt(ca);
      //console.log(ca);

        if (obj.id_item === id) {
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
  const updateArray3 = (id, status, field) => {
    // console.log(id);
    let existe = false;
    const newState = carItem.map((obj) => {
      //   let ca = obj.cant;
      // ca = parseInt(ca);
      //console.log(ca);

      if (field === "qe") {
        if (obj.id_item === id) {
          existe = true;
          return { ...obj, qe: status };
        }
      }
      if (field === "de") {
        if (obj.id_item === id) {
          existe = true;

          return { ...obj, de: status };
        }
      }
      if (field === "pa") {
        if (obj.id_item === id) {
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
  return (
    <PosS>
      <div className="container">
        <div className="body">
          <div className="header-search">
            <ReactSearchAutocomplete
              items={searchResult2}
              onSearch={handleOnSearch}
              onHover={handleOnHover}
              onSelect={handleOnSelect}
              onFocus={handleOnFocus}
              autoFocus
              formatResult={formatResult}
            />
          </div>
          {/*<div className="header">
            <div className="search">
              <div className="search-btn" onClick={searchItem}>
                <i class="fa-solid fa-magnifying-glass"></i>
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
                    <th>Ingrediente Extra</th>
                    <th>Orilla Rellena</th>
                    <th>Queso Extra</th>
                    <th>Deditos</th>
                    <th>Pastor</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Extras</th>
                    <th>Total</th>
                  </tr>
                  {carItem.length > 0 ? (
                    <>
                      {carItem.map((data, index) => {
                        return (
                          <tr key={index}>
                            <td style={{ textAlign: "center" }}>
                              <i
                                className="fa-solid fa-trash"
                                onClick={() => removeItem(data.id_item)}
                              ></i>
                            </td>
                            <td>
                              {data.cat === "pizza" ? "Pizza " : ""}
                              {data.name}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <i
                                className="fa-solid fa-circle-plus"
                                onClick={() => addExtraI(data.id_item)}
                              ></i>

                              <div className="list-extras">
                                {data.extras.map((item, index) => {
                                  return <div>{item.ing}</div>;
                                })}
                              </div>
                            </td>
                            <td>
                              <div className="td-container">
                                {data.cat === "pizza" ? (
                                  <select onChange={(e) => addOr(data.id_item, e.target.value)}>
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
                                      onClick={() =>
                                        addExtra(data.id_item, data.qe, "qe")
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
                                      onClick={() =>
                                        addExtra(data.id_item, data.de, "de")
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
                                      onClick={() =>
                                        addExtra(data.id_item, data.pa, "pa")
                                      }
                                    />
                                  ) : (
                                    ""
                                  )}
                                </>
                              )}
                            </td>
                            <td>${parseFloat(data.price).toFixed(2)}</td>
                            <td>{data.cant}</td>
                            <td>{data.extra}</td>
                            <td>
                              $
                              {parseFloat(
                                (parseFloat(data.price) +
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
          <div className="rp-container1"></div>
          <div className="rp-container2">
            <div className="total">
              <h3>Envio</h3>
              <span>$10.00</span>
            </div>
            <div className="subtotal">
              <h3>Subtotal</h3>
              <span>$0.00</span>
            </div>
            <div className="total">
              <h3>Total</h3>
              <span>$0.00</span>
            </div>
            <div className="complete-payment">
              <div className="cp-input-container">
                <input type="text" />
              </div>
              <div className="cp-btn">
                <button type="">Completar venta</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PosS>
  );
};

export default Pos;
