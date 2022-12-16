import React, { useContext } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";
import { ModalS, StyledButton } from "../../styles/Styles";

const Modal = (props) => {
  const { type } = props;
  const { setShowAddInv, stopProp, saveProduct } = useContext(MainContext);
  const [tipo, setTipo] = useState(0);
  const [ingrediente, setIngrediente] = useState(2);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const SelectType = (e) => {
    setTipo(e.target.value);
  };
  const SelectIngr = (e) => {
    setIngrediente(e.target.value);
  };
  return (
    <ModalS onClick={() => setShowAddInv(false)}>
      {type === "addInv" ? (
        <div className="modal-container" onClick={(e) => stopProp(e)}>
          <div className="modal-close" onClick={() => setShowAddInv(false)}>
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
          <div className="modal-title">
            <h2>Agregar un nuevo producto</h2>
          </div>
          <div className="modal-form">
            <div className="form-item">
              <label for="">Tipo de producto</label>
              <select
                defaultValue={tipo}
                value={tipo}
                onChange={(e) => SelectType(e)}
              >
                <option value="0">Selecciona un elemento</option>
                <option value="1">Pizza</option>
                <option value="2">Otros Productos</option>
                <option value="3">Materias Primas</option>
              </select>
            </div>
            {tipo === "1" ? (
              <>
                <div className="form-item">
                  <label for="">Tamaño</label>
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
                  <label for="">Precio</label>
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
            {tipo === "2" ? (
              <>
                <div className="form-item">
                  <label for="">Producto</label>
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
                  <label for="">Precio</label>
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
            {tipo === "3" ? (
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
                  <label for="">Nombre</label>
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
                <div className="form-item">
                  <label for="">Precio Compra</label>
                  <input
                    type="text"
                    name="price_bu"
                    value={data3.price_bu}
                    onChange={(e) =>
                      setData3({
                        ...data3,
                        [e.target.dataset.name || e.target.name]:
                          e.target.value,
                      })
                    }
                  />
                </div>
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
                {/*ingrediente === "1" ? (
                  <div className="form-item">
                    <label for="">Precio Venta</label>
                    <input type="text" name="" value="" />
                  </div>
                ) : (
                  ""
                )}
                {ingrediente === "2" || ingrediente === 2 ? (
                  <div className="form-item">
                    <label for="">Cantidad</label>
                    <input type="text" name="" value="" />
                  </div>
                ) : (
                  ""
                )*/}

                <div className="form-item">
                  <StyledButton onClick={(e) => saveProduct(2, data2)}>
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

export default Modal;
