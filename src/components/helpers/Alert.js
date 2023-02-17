import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import { AlertStyle } from "../../styles/Alert";
import { ModalS } from "../../styles/Styles";
import BtnClose from "./BtnClose";

const Alert = ({ children, type }) => {
  const { setShowAlert } = useContext(MainContext);
  const setFunction = () => {
    setShowAlert(false);
  };
  //   {type === 'success-sale' && }
  return (
    <>
      <AlertStyle>
        <div
          className={`container 
          ${type === "success-sale" && "success"} ${
            type === "insu-boxes" && "error"
          } ${type === "success-save" && "success"} ${
            type === "success-update" && "success"
          } ${type === "fail-sale1" && "error"} ${
            type === "fail-sale2" && "error"
          } ${type === "fail-sale3" && "error"} ${
            type === "missing-info" && "error"
          }
          ${type === 'fail-sale0' && 'error' }
          `}
        >
          <div className="actions-buttons">
            <div className="close-btn">
              <BtnClose setFunction={setFunction} />
            </div>
          </div>
          <div className="alert-content">
            <div className={`alert-txt`}>
              {type === "success-sale" && "Venta realizada con exito"}
              {type === "missing-info" &&
                "Los datos con * son necesarios para continuar"}
              {type === "success-update" && "Datos actualizados con exito"}
              {type === "insu-boxes" &&
                "No hay cajas suficientes en el inventario revisa el apartado de materias primas"}

              {type === "success-save" && "Datos guardados con exito"}
              {type === "fail-sale0" &&
                "Debes agregar almenos 1 producto para poder completar la venta"}
              {type === "fail-sale1" &&
                "Debes agregar un monto valido ya sea tarjeta o efectivo para completar la venta"}
              {type === "fail-sale2" && "Debes ingresar un monto valido"}
              {type === "fail-sale3" &&
                "Debes debes completar el total del costo de la venta para continuar"}
            </div>
          </div>
        </div>
      </AlertStyle>
    </>
  );
};

export default Alert;
