import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import MainContext from "../../context/MainContext";
import { BodyS, HeaderS } from "../../styles/Styles";
import AddExtIng from "../client/AddExtIng";
import AddIng from "../client/AddIng";
import Modal from "../client/Modal";

const Header = () => {
  const {location, pathname, showAddInv, setShowAddInv, showAddEI, setShowAddEI, showConfBox, id_item, table, showAddI, setShowAddI} = useContext(MainContext);
  
  return (
    <HeaderS>
      { showAddInv ? <Modal  type="addInv" /> : ""}
      { showAddEI ? <AddExtIng  type="addInv" /> : ""}
      { showAddI ? <AddIng  type="addInv" /> : ""}
      { showConfBox ? <Modal type="delItem" id_item={id_item} table={table} /> : ""}
      <div className="menu">
        <div className="menu-items">
          <ul className="logo-container">
            <Link to="/">
              <i className="fa-solid fa-pizza-slice"></i>
            </Link>
          </ul>
          <ul className="menu-data">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/inventario">Inventario</Link>
            </li>
            <li>
              <Link to="/ventas">Ventas</Link>
            </li>
            <li>
              <Link to="/pos">POS</Link>
            </li>
            <li>
              <Link to="/usuarios">Usuarios</Link>
            </li>
            <li>
              <Link to="/login">Salir</Link>
            </li>
          </ul>
        </div>
      </div>
    
      <div className="header-body">
        <div className="header-buttons">
          <div className="header-button">
            {pathname === 'inventario' ? <button type="button" onClick={()=> setShowAddInv(true)}>Agregar producto</button>:""}
            
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
