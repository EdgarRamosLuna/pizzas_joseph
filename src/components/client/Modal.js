import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";
import { ModalS, StyledButton } from "../../styles/Styles";
import BtnClose from "../helpers/BtnClose";

const Modal = (props) => {
  const { type, id_item, table } = props;
  const {
    setShowAddInv,
    stopProp,
    saveProduct,
    setShowConfBox,
    deleteItemDb,
    option,
    setConfirmed2
  } = useContext(MainContext);
  const [tipo, setTipo] = useState(option);
  const [ingrediente, setIngrediente] = useState(2);
  const [data, setData] = useState({
    chstedm: "",
    chstedp: "",
    exch: "",
    exin: "",
    fin: "",
    pas: "",
    price: "",
    size: "",
  });
  const [data2, setData2] = useState({
    doca: "",
    ha: "",
    price: "",
    product: "",
    sal: "",
  });
  const [data3, setData3] = useState({
    cant: "",
    is_ing: "",
    name: "",
  });
  const [data4, setData4] = useState({
    cant: "",
    name: "",
    price: "",
  });
  const SelectType = (data) => {
    setTipo(data);
  };
  useEffect(() => {
    SelectType(option);
  }, []);
  const SelectIngr = (e) => {
    setIngrediente(e.target.value);
  };
  const delItemC = (id_item, table) => {
    deleteItemDb(id_item, table);
  };
  const cancelSale = () => {
    console.log('etron');
    setConfirmed2(true);
    hideModal();
  };
  const hideModal = () => {
    setShowAddInv(false);
    setShowConfBox(false);
  };
  const setFunction = () => {
    setShowAddInv(false);
  };

  console.log(tipo);
  return (
    <ModalS>
      {type === "addInv" ? (
        <div className="modal-container" onClick={(e) => stopProp(e)}>
          <BtnClose setFunction={setFunction} />
          <div className="modal-title">
            <h2>Agregar un nuevo producto</h2>
          </div>
          <div className="modal-form">
            <div className="form-item">
              <label for="">Tipo de producto</label>
              <select
                defaultValue={tipo}
                value={tipo}
                onChange={(e) => setTipo(Number(e.target.value))}
              >
                <option value={-1}>Selecciona un elemento</option>
                <option value={0}>Pizza</option>
                <option value={1}>Otros Productos</option>
                <option value={2}>Materias Primas</option>
                <option value={3}>Bebidas</option>
              </select>
            </div>
            {tipo === 0 ? (
              <>
                <div className="form-item">
                  <label for="">Tamaño *</label>
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
                  <label for="">Precio *</label>
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
                  <label for="">Ingrediente Extra</label>
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
                  <label for="">O.R Mozarella</label>
                  <input
                    type="text"
                    name="chstedm"
                    value={data.sizchstedme}
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
                  <label for="">O.R Piladelphia</label>
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
                  <label for="">Queso Extra</label>
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
                  <label for="">Deditos</label>
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
                  <label for="">Pastor</label>
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
                  <StyledButton onClick={(e) => saveProduct(1, data)}>
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
                  <label for="">Producto *</label>
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
                  <label for="">Precio *</label>
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
                  <label for="">Hawai</label>
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
                  <label for="">Salchicha</label>
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
                  <label for="">Doble Carne</label>
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
                  <StyledButton onClick={(e) => saveProduct(2, data2)}>
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
                  <label for="">Es ingrediente</label>
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
                  <label for="">Nombre *</label>
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
                    <label for="">Cantidad</label>
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
             

                <div className="form-item">
                  <StyledButton onClick={(e) => saveProduct(3, data3)}>
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
                  <label for="">Nombre del producto *</label>
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
                  <label for="">Cantidad *</label>
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
                  <label for="">Precio *</label>
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
                  <StyledButton onClick={(e) => saveProduct(4, data4)}>
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

      {type === "delItem" ? (
        <div className="modal-container" onClick={(e) => stopProp(e)}>
          <div className="modal-close" onClick={() => setShowConfBox(false)}>
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
          <div className="modal-title">
            <h2>Elminar producto</h2>
          </div>
          <div className="modal-form">
            <h3>
              ¿Estás seguro(a) que deseas borrar este producto? Esta acción no
              podrá deshacerse.
            </h3>
          </div>

          <div className="form-footer">
            <StyledButton onClick={() => setShowConfBox(false)}>
              Cerrar
            </StyledButton>
            <StyledButton
              onClick={(e) => delItemC(id_item, table)}
              bg="#20a428"
            >
              Estoy Seguro(a)
            </StyledButton>
          </div>
        </div>
      ) : (
        ""
      )}
      {type === "cancelSale" ? (
        <div className="modal-container" onClick={(e) => stopProp(e)}>
          <div className="modal-close" onClick={() => setShowConfBox(false)}>
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
          <div className="modal-title">
            <h2>Cancelar Venta</h2>
          </div>
          <div className="modal-form">
            <h3>
              ¿Estás seguro(a) que deseas cancelar esta venta? Esta acción no
              podrá deshacerse.
            </h3>
          </div>

          <div className="form-footer">
            <StyledButton onClick={() => setShowConfBox(false)}>
              Cerrar
            </StyledButton>
            <StyledButton
              onClick={()=> cancelSale()}
              bg="#20a428"
            >
              Estoy Seguro(a)
            </StyledButton>
          </div>
        </div>
      ) : (
        ""
      )}
    </ModalS>
  );
};

export default Modal;
