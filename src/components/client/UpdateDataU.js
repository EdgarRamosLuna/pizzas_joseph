import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";
import { ModalS, StyledButton } from "../../styles/Styles";
import BtnClose from "../helpers/BtnClose";

const UpdateDataU = (props) => {
  //const { type, id_item, table } = props;
  const { stopProp, setIsEdit2, actualData, updateData, id_item, option2 } =
    useContext(MainContext);
  const [data, setData] = useState({
    nombre: "",
    direccion: "",
    status: 0,
    password: "",
  });

  //console.log(actualData);
  useEffect(() => {
    setData({
      nombre: actualData[0].data,
      direccion: actualData[1].data,
      status: option2 === 6 ? actualData[1].data === 'Activo' ? 1 : 0 : actualData[2].data === 'Activo' ? 1 : 0,
      password: ''
    });

    //    SelectType(option2);
  }, []);
  const hideModal = () => {
    setIsEdit2(false);
  };
  const setFunction = () => {
    setIsEdit2(false);
  };
  return (
    <ModalS>
      {option2 === 6 && (
        <div className="modal-container" onClick={(e) => stopProp(e)}>
          <BtnClose setFunction={setFunction} />
          <div className="modal-title">
            <h2>Editar Usuario</h2>
          </div>
          <div className="modal-form">
            <div className="form-item">
              <label htmlFor="nombre">Usuario</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={data.nombre}
                autoComplete="off"
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.dataset.name || e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-item">
              <label htmlFor="password">Contraseña</label>
              <input
                type="text"
                id="password"
                name="password"
                autoComplete="off"
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
              <label htmlFor="">Status</label>
              <select
                name="status"
                value={data.status}
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.dataset.name || e.target.name]: e.target.value,
                  })
                }
              >
                <option value="0">Inactivo</option>
                <option value="1">Activo</option>
              </select>
            </div>

            <div className="form-item">
              <StyledButton onClick={(e) => updateData(5, id_item, data)}>
                Guardar
              </StyledButton>
            </div>
          </div>
        </div>
      )}
      {option2 === 7 && (
        <div className="modal-container" onClick={(e) => stopProp(e)}>
          <BtnClose setFunction={setFunction} />
          <div className="modal-title">
            <h2>Editar Usuario</h2>
          </div>
          <div className="modal-form">
            <div className="form-item">
              <label htmlFor="user">Usuario</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={data.nombre}
                autoComplete="off"
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.dataset.name || e.target.name]: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-item">
              <label htmlFor="direccion">Direccion</label>
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
              <label htmlFor="">Status</label>
              <select
                name="status"
                value={data.status}
                onChange={(e) =>
                  setData({
                    ...data,
                    [e.target.dataset.name || e.target.name]: e.target.value,
                  })
                }
              >
                <option value="0">Inactivo</option>
                <option value="1">Activo</option>
              </select>
            </div>

            <div className="form-item">
              <StyledButton onClick={(e) => updateData(6, id_item, data)}>
                Guardar
              </StyledButton>
            </div>
          </div>
        </div>
      )}
    </ModalS>
  );
};

export default UpdateDataU;
