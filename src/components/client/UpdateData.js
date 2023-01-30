import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";
import { ModalS, StyledButton } from "../../styles/Styles";
import BtnClose from "../helpers/BtnClose";

const UpdateData = (props) => {
  const { type, table } = props;
  const {
    setShowAddInv,
    stopProp,
    updateData,
    setShowConfBox,
    delConf,
    setDelConf,
    deleteItemDb,
    option,
    updateItem,
    isEdit,
    setIsEdit,
    actualData,
    id_item
  } = useContext(MainContext);
  const [tipo, setTipo] = useState(0);
  const [ingrediente, setIngrediente] = useState(2);
  const [data, setData] = useState({
    size: '',
    price: '',
    exin: '',
    chstedm: '',
    chstedp: '',
    exch: '',
    fin: '',
    pas: '',
  });
  const [data2, setData2] = useState({
    product:'',
    price:'',
    ha:'',
    sal:'',
    doca:'',
  });
  const [data3, setData3] = useState({
    name:'',
    is_ing:'',
    cant:'',
  });
  const [data4, setData4] = useState({
    name:'',
    price:'',
    cant:'',
  });
  const SelectType = (data) => {
    // data = data.toString();
    setTipo(data);
  };
  
  useEffect(() => {
    if (option === 0) {
      setData({
        size: actualData[0].data,
        price: actualData[1].data,
        exin: actualData[2].data,
        chstedm: actualData[3].data,
        chstedp: actualData[4].data,
        exch: actualData[5].data,
        fin: actualData[6].data === 'N/A' ? 0 : actualData[6].data,
        pas: actualData[7].data === 'N/A' ? 0 : actualData[7].data
      });
    }
    if (option === 1) {
      setData2({
        product: actualData[0].data,
        price: actualData[1].data,
        ha: actualData[2].data,
        sal: actualData[3].data,
        doca: actualData[4].data,
      });
    }
    if (option === 2) {
      setData3({
        name: actualData[0].data,
        is_ing: actualData[1].data === 'Si' ? '1' : '2',
        cant: actualData[2].data,
      });
    }
    if (option === 3) {
      setData4({
        name: actualData[0].data,
        price: actualData[1].data,
        cant: actualData[2].data,
      });
    }
    SelectType(option);
  }, []);
  //console.log(tipo);
  const SelectIngr = (e) => {
    setIngrediente(e.target.value);
  };
  const delItemC = (id_item, table) => {
    //  console.log('aaaaaaaaaa');
    // setDelConf(true);

    deleteItemDb(id_item, table);
  };
  const hideModal = () => {
    setIsEdit(false);
  };
  const setFunction = () => {
    setIsEdit(false);
  };

  // console.log(arrayData);
  return (
    <ModalS>
      {type === "updateItem" ? (
        <div className="modal-container" onClick={(e) => stopProp(e)}>
          <BtnClose setFunction={setFunction} />
          <div className="modal-title">
            <h2>Editar producto</h2>
          </div>
          <div className="modal-form">
            {tipo === 0 ? (
              <>
                <div className="form-item">
                  <label htmlFor="">Tamaño</label>
                  <input
                    type="text"
                    name="size"
                    value={data.size}
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">Precio</label>
                  <input
                    type="text"
                    name="price"
                    value={data.price}
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">Ingrediente Extra</label>
                  <input
                    type="text"
                    name="exin"
                    value={data.exin}
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">O.R Mozarella</label>
                  <input
                    type="text"
                    name="chstedm"
                    value={data.chstedm}
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">O.R Piladelphia</label>
                  <input
                    type="text"
                    name="chstedp"
                    value={data.chstedp}
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">Queso Extra</label>
                  <input
                    type="text"
                    name="exch"
                    value={data.exch}
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">Deditos</label>
                  <input
                    type="text"
                    name="fin"
                    value={data.fin}
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">Pastor</label>
                  <input
                    type="text"
                    name="pas"
                    value={data.pas}
                    onChange={(e) =>
                      setData({
                        ...data,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <StyledButton onClick={(e) => updateData(1, id_item,data)}>
                    Guardar
                  </StyledButton>
                </div>
              </>
            ) : (
              ""
            )}
            {tipo === 1 ? (
              <>
                <div className="form-item">
                  <label htmlFor="">Producto</label>
                  <input
                    type="text"
                    name="product"
                    value={data2.product}
                    onChange={(e) =>
                      setData2({
                        ...data2,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">Precio</label>
                  <input
                    type="text"
                    name="price"
                    value={data2.price}
                    onChange={(e) =>
                      setData2({
                        ...data2,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-item">
                  <label htmlFor="">Hawai</label>
                  <input
                    type="text"
                    name="ha"
                    value={data2.ha}
                    onChange={(e) =>
                      setData2({
                        ...data2,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">Salchicha</label>
                  <input
                    type="text"
                    name="sal"
                    value={data2.sal}
                    onChange={(e) =>
                      setData2({
                        ...data2,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">Doble Carne</label>
                  <input
                    type="text"
                    name="doca"
                    value={data2.doca}
                    onChange={(e) =>
                      setData2({
                        ...data2,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <StyledButton onClick={(e) => updateData(2, id_item, data2)}>
                    Guardar
                  </StyledButton>
                </div>
              </>
            ) : (
              ""
            )}
            {tipo === 2 ? (
              <>
                <div className="form-item">
                  <label htmlFor="">Es ingrediente</label>
                  <select
                    name="is_ing"
                    value={data3.is_ing}
                    onChange={(e) =>
                      setData3({
                        ...data3,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  >
                    <option value="0">Selecciona una opcion</option>
                    <option value="1">Si</option>
                    <option value="2">No</option>
                  </select>
                </div>
                <div className="form-item">
                  <label htmlFor="">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={data3.name}
                    onChange={(e) =>
                      setData3({
                        ...data3,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                {data3.is_ing !== "1" && (
                  <div className="form-item">
                    <label htmlFor="">Cantidad</label>
                    <input
                      type="text"
                      name="cant"
                      value={data3.cant}
                      onChange={(e) =>
                        setData3({
                          ...data3,
                          [e.target.dataset.name || e.target.name]:
                            e.target.value,
                        })
                      }
                    />
                  </div>
                )}
                {/*ingrediente === "1" ? (
                  <div className="form-item">
                    <label htmlFor="">Precio Venta</label>
                    <input type="text" name="" value="" />
                  </div>
                ) : (
                  ""
                )}
                {ingrediente === "2" || ingrediente === 2 ? (
                  <div className="form-item">
                    <label htmlFor="">Cantidad</label>
                    <input type="text" name="" value="" />
                  </div>
                ) : (
                  ""
                )*/}

                <div className="form-item">
                  <StyledButton onClick={(e) => updateData(3, id_item, data3)}>
                    Guardar
                  </StyledButton>
                </div>
              </>
            ) : (
              ""
            )}
            {tipo === 3 ? (
              <>
                <div className="form-item">
                  <label htmlFor="">Nombre del cocon</label>
                  <input
                    type="text"
                    name="name"
                    value={data4.name}
                    onChange={(e) =>
                      setData4({
                        ...data4,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">Precio</label>
                  <input
                    type="text"
                    name="price"
                    value={data4.price}
                    onChange={(e) =>
                      setData4({
                        ...data4,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-item">
                  <label htmlFor="">Cantidad</label>
                  <input
                    type="text"
                    name="cant"
                    value={data4.cant}
                    onChange={(e) =>
                      setData4({
                        ...data4,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>

                <div className="form-item">
                  <StyledButton onClick={(e) => updateData(4, id_item, data4)}>
                    Guardar
                  </StyledButton>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </ModalS>
  );
};

export default UpdateData;
