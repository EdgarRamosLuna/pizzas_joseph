import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";
import { ModalS, StyledButton } from "../../styles/Styles";
import BtnClose from "../helpers/BtnClose";

const AddC = () => {
  const {
    setShowAddC,
    stopProp,
    saveProduct,
  } = useContext(MainContext);
  const [data, setData] = useState({
    name: "",
    direccion: "",
  });

  const setFunction = () => {
    setShowAddC(false);
  };
  return (
    <ModalS>
      <div className="modal-container" onClick={(e) => stopProp(e)}>
        <BtnClose setFunction={setFunction} />
        <div className="modal-title">
          <h2>Agregar un nuevo cliente</h2>
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
              <label htmlFor="direccion">Direccion *</label>
              <textarea
                type="text"
                id="direccion"
                name="direccion"
                autoComplete="off"
                value={data.direccion}
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.dataset.name || e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            
            
            <div className="form-item">
              <StyledButton onClick={(e) => saveProduct(6, data)}>
                Guardar
              </StyledButton>
            </div>
          </>
        </div>
      </div>
    </ModalS>
  );
};

export default AddC;
