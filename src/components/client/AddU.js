import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";
import { ModalS, StyledButton } from "../../styles/Styles";
import BtnClose from "../helpers/BtnClose";

const AddU = (props) => {
  const {
    setShowAddU,
    stopProp,
    saveProduct,
  } = useContext(MainContext);
  const [data, setData] = useState({
    name: "",
    password: "",
    user_type: "",
  });
  const setFunction = () => {
    setShowAddU(false);
  };


  return (
    <ModalS>
      <div className="modal-container" onClick={(e) => stopProp(e)}>
        <BtnClose setFunction={setFunction} />
        <div className="modal-title">
          <h2>Agregar un nuevo usuario</h2>
        </div>
        <div className="modal-form">
          <>
            <div className="form-item">
              <label for="">Nombre *</label>
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.dataset.name || e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-item">
              <label for="">Contraseña *</label>
              <input
                type="text"
                name="password"
                value={data.password}
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.dataset.name || e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-item">
              <label for="">Tipo de usuario</label>
              <select
                name="user_type"
                value={data.user_type}
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.dataset.name || e.target.name]:
                      e.target.value,
                  })
                }
              >
                <option value={0}>Selecciona una opcion</option>
                <option value={1}>Administrador</option>
                <option value={2}>Empleado</option>
              </select>
            </div>
            
            <div className="form-item">
              <StyledButton onClick={(e) => saveProduct(5, data)}>
                Guardar
              </StyledButton>
            </div>
          </>
        </div>
      </div>
    </ModalS>
  );
};

export default AddU;
