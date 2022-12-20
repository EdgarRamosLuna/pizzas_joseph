import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { PosS } from "../../styles/Styles";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import MainContext from "../../context/MainContext";
const Pos = () => {
  const [val, setVal] = useState("");
  
  const {showAddEI, setShowAddEI, searchResult, setSearchResult, v4, carItem, setCarItem, extraIngItem, setExtraIngItem} = useContext(MainContext);
  useEffect(() => {
    axios
      .get("https://oasistienda.com/pj/api/get")
      .then((res) => {
        if (res.data.pizza.length > 0) {
          for (let i = 0; i < res.data.pizza.length; i++) {
            const element = res.data.pizza[i];

            let checkItem = updateArray(element.id, element.size);
            //    console.log(checkItem);
            if (checkItem.length > 0) {
              if (checkItem[0].exist) {
                setSearchResult(checkItem[0].newState);
              } else {
                setSearchResult((prev) => [
                  ...prev,
                  {
                    id: element.id,
                    name: element.size,
                    price: element.price,
                    cat: "pizza",
                  },
                ]);
              }
            } else {
              setSearchResult((prev) => [
                ...prev,
                {
                  id: element.id,
                  name: element.size,
                  price: element.price,
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

            let checkItem = updateArray(element.id, element.product);
            // console.log(checkItem);
            if (checkItem.length > 0) {
              if (checkItem[0].exist) {
                setSearchResult(checkItem[0].newState);
              } else {
                setSearchResult((prev) => [
                  ...prev,
                  {
                    id: element.id,
                    name: element.product,
                    price: element.price,
                    cat: "op",
                  },
                ]);
              }
            } else {
              setSearchResult((prev) => [
                ...prev,
                {
                  id: element.id,
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
      setSearchResult([]);
    }
    setVal(value);
    //  api/search
  };
  //console.log(searchResult);
  const updateArray = (id, name) => {
    // console.log(id);
    let existe = false;
    const newState = searchResult.map((obj) => {
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

      if (parseInt(obj.id) === parseInt(id)) {
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
  const [extras, setExtras] = useState([]);
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
    let checkItem = updateArray2(item.id, item.name);
    if (checkItem.length > 0) {
      if (checkItem[0].exist) {
        setCarItem(checkItem[0].newState);
      } else {
        setCarItem((prev) => [
          ...prev,
          {
            id: v4(),
            id_i: item.id,
            name: item.name,
            cant: 1,
            price: parseFloat(item.price),
            cat:item.cat,
            extra:0,
            extras: extras

          },
        ]);
      }
    } else {
      setCarItem((prev) => [
        ...prev,
        {
          id: v4(),
          id_i: item.id,
          name: item.name,
          cant: 1,
          price: parseFloat(item.price),
          cat:item.cat,
          extra:0,
          extras: extras
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
  const removeItem = (data) =>{
    console.log(data);
  }
  const addExtraI = (item) =>{ 
    setShowAddEI(true);
    setExtraIngItem(item);
  }
  return (
    <PosS>
      <div className="container">
        <div className="body">
          <div className="header-search">
            <ReactSearchAutocomplete
              items={searchResult}
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
                <tr className="table-header">
                  <th></th>
                  <th>Producto</th>
                  <th>Ingrediente Extra</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Extras</th>
                  <th>Total</th>
                </tr>
                {carItem.length > 0 ? (
                  <>
                    {carItem.map((data) => {
                      return (
                        <tr>
                          <td style={{textAlign:"center"}}><i class="fa-solid fa-trash" onClick={()=> removeItem(data.id)}></i></td>
                          <td>{data.cat === 'pizza' ? "Pizza ":""}{data.name}</td>
                          <td style={{textAlign:"center"}}><i class="fa-solid fa-circle-plus" onClick={() => addExtraI(data.id)}></i></td>
                          <td>${parseFloat(data.price).toFixed(2)}</td>
                          <td>{data.cant}</td>
                          <td>{data.extras}</td>
                          <td>
                            $
                            {parseFloat(
                              parseFloat(data.price) * parseInt(data.cant)
                            ).toFixed(2)}
                          </td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </>
                )}
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
