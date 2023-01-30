import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";
import { ModalS, StyledButton } from "../../styles/Styles";
import BtnClose from "../helpers/BtnClose";

const UpdateDataU = (props) => {
  const { type, id_item, table } = props;
  const {
    setShowAddInv,
    stopProp,
    setShowConfBox,
    delConf,
    setDelConf,
    deleteItemDb,
    option,
    updateItem,
    isEdit,
    setIsEdit2,
    actualData,
  } = useContext(MainContext);
  const [tipo, setTipo] = useState(0);
  const [ingrediente, setIngrediente] = useState(2);
  const [data, setData] = useState({
    user: "",
    password: "",
  });

  //console.log(actualData);
  useEffect(() => {
    setData({
      user: actualData[0].data,
      password: '',
    });

//    SelectType(option);
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
    setIsEdit2(false);
  };
  const setFunction = () => {
    setIsEdit2(false);
  };
  const saveUser = (data) => {
    console.log(data);
  }
  // console.log(arrayData);
  return (
    <ModalS onClick={() => hideModal()}>
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
              id="user"
              name="user"
              value={data.user}
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
            <StyledButton onClick={(e) => saveUser(data)}>
              Guardar
            </StyledButton>
          </div>
        </div>
      </div>
    </ModalS>
  );
};

export default UpdateDataU;
