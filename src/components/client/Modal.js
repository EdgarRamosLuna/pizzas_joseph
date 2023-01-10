import React, { useContext } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";
import { ModalS, StyledButton } from "../../styles/Styles";

const Modal = (props) => {
  const { type, id_item, table} = props;
  const { setShowAddInv, stopProp, saveProduct, setShowConfBox, delConf, setDelConf, deleteItemDb } = useContext(MainContext);
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
  const delItemC = (id_item, table) =>{
  //  console.log('aaaaaaaaaa');
   // setDelConf(true);

    deleteItemDb(id_item, table);
    
    
  }
  const hideModal = () =>{
    setShowAddInv(false);
    setShowConfBox(false);

  }
  return (
    <ModalS onClick={() => hideModal()}>
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
                {data3.is_ing !== '1' &&
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
                
                } 
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
                  <StyledButton onClick={(e) => saveProduct(3, data3)}>
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
            <h3>¿Estás seguro(a) que deseas borrar este producto? Esta acción no podrá deshacerse.</h3>
          </div>
          
          <div className="form-footer">
                  <StyledButton onClick={() => setShowConfBox(false)}>
                      Cerrar
                    </StyledButton>
                  <StyledButton onClick={(e) => delItemC(id_item, table)}>
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
