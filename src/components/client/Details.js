import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainContext from "../../context/MainContext";
import { ModalS, StyledButton } from "../../styles/Styles";
import BtnClose from "../helpers/BtnClose";

const Details = () => {
  const { setShowDetails, stopProp, saveProduct, details, setDetails } =
    useContext(MainContext);
  const [data, setData] = useState({
    name: "",
    password: "",
    user_type: "",
  });
  const [data2, setData2] = useState([]);
  const setFunction = () => {
    setShowDetails(false);
  };
  console.log(details);

  return (
    <ModalS>
      <div className="modal-container" onClick={(e) => stopProp(e)}>
        <BtnClose setFunction={setFunction} />
        <div className="modal-title">
          <h2>Detalles de la venta</h2>
        </div>
        <div className="modal-form">
          <>
            <div className="form-item">
              <label for="">Lista de productos</label>
              <table>
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Ingredientes</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Extras</th>
                  </tr>
                </thead>
                <tbody>
                  {details.sale_data_items.map((data) => {
                    return (
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.cat === 'pizza' && details.sale_data_items_ing.map((data2) =>{
                          return (<>
                            {Number(data.id_item_sale) === Number(data2.id_item_sale) && data2.name} <br/>
                          </>);
                        })}</td>
                        <td>${data.price}</td>
                        <td>{data.cant}</td>
                        <td>
                          <div>
                            {Number(data.orilla_relle) > 0 ? (
                              <>
                                {Number(data.orilla_relle) === 1
                                  ? `Orilla Rellena P: $${data.chstedp}`
                                  : `Orilla Rellena M: ${data.chstedm}`}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                          <div>
                            {Number(data.pastor) === 1
                              ? `Pastor: $${data.pas}`
                              : ""}
                          </div>
                          <div>
                            {Number(data.deditos) === 1
                              ? `Deditos: $${data.fin}`
                              : ""}
                          </div>
                          <div>
                            {Number(data.queso_ex) === 1
                              ? `Queso Extra: $${data.exch}`
                              : ""}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="form-item">
                  <label for="">Cliente: <span>{details.sale_data[0].client}</span></label>
                </div>
            {Number(details.sale_data[0].type_order) === 2 ? (
              <>
                
                <div className="form-item">
                  <label for="">Direccion de entrega: <span>{details.sale_data[0].address}</span></label>
                </div>
                <div className="form-item">
                  <label for="">Costo de envio: <span>${details.sale_data[0].envio}</span></label>
                </div>
              </>
            ) : (
              ""
            )}
          </>
        </div>
      </div>
    </ModalS>
  );
};

export default Details;
