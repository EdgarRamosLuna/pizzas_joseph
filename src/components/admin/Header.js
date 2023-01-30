import React, { useContext } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import MainContext from "../../context/MainContext";
import { BodyS, HeaderS } from "../../styles/Styles";
import AddExtIng from "../client/AddExtIng";
import AddIng from "../client/AddIng";
import Modal from "../client/Modal";
import UpdateData from "../client/UpdateData";
import UpdateDataU from "../client/UpdateDataU";
import Alert from "../helpers/Alert";

const Header = () => {
  const {
    location,
    pathname,
    showAddInv,
    setShowAddInv,
    showAddEI,
    setShowAddEI,
    typeAlert,
    setTypeAlert,
    showAlert,
    showConfBox,
    id_item,
    table,
    showAddI,
    setShowAddI,
    sesionData,
    turn,
    setTurn,
    isEdit,
    isEdit2, setIsEdit2
  } = useContext(MainContext);
  const logOut = () => {
    localStorage.removeItem("token");
    // window.location.replace('/login');
  };
  return (
    <HeaderS>
      {showAddInv ? <Modal type="addInv" /> : ""}
      {showAddEI ? <AddExtIng type="addInv" /> : ""}
      {showAddI ? <AddIng type="addInv" /> : ""}
      {showConfBox ? (
        <Modal type="delItem" id_item={id_item} table={table} />
      ) : (
        ""
      )}
      {isEdit ? (
        <UpdateData type="updateItem" id_item={id_item} table={table} />
      ) : (
        ""
      )}
      {isEdit2 ? (
        <UpdateDataU type="updateItem" />
      ) : (
        ""
      )}
      {showAlert ? <Alert type={typeAlert} /> : ""}
      {/* pathname === 'pos' && turn === 0 ? <AddIng  type="addInv" /> : ""*/}
      <div className="menu">
        <div className="menu-items">
          <ul className="logo-container">
            <Link to="/">
              <i className="fa-solid fa-pizza-slice"></i>
            </Link>
          </ul>
          <ul className="menu-data">
            <li style={{ display: "none" }}>
              <Link to="/">Inicio</Link>
            </li>
            <li className={pathname === "inventario" ? "item-active" : ""}>
              <Link to="/inventario">Inventario</Link>
            </li>
            <li className={`${pathname === "ventas" ? "item-active" : ""}`}>
              <Link to="/ventas">Ventas</Link>
            </li>
            <li className={pathname === "pos" ? "item-active" : ""}>
              <Link to="/pos">Caja</Link>
            </li>
            <li className={pathname === "usuarios" ? "item-active" : ""}>
              <Link to="/usuarios">Usuarios</Link>
            </li>
            <li className={pathname === "usuarios" ? "item-active" : ""}>
              <Link to="/clientes">Clientes</Link>
            </li>
            <li onClick={logOut}>
              <Link to="/login">Salir</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="header-body">
        <div className="header-buttons">
          <div className="header-button">
            {pathname === "inventario" ||
            pathname === "" ||
            pathname === "/" ? (
              <button type="button" onClick={() => setShowAddInv(true)}>
                Agregar producto
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <BodyS>
        <Outlet />
      </BodyS>
    </HeaderS>
  );
};

export default Header;
