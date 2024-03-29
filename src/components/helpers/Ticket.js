import axios from "axios";
import jsPDF from "jspdf";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import MainContext from "../../context/MainContext";
import GlobalStyle from "../../styles/GlobalStyles";
import { TicketS } from "../../styles/Ticket";

const Ticket = ({
  storeName = `BROTHER'S pizzas`,
  storeAddress = `Calle Juan Antonio de la Fuente # 149 centro. San Pedro Coahuila CP 27800`,
  storePhone = `872 772 5294`
}) => {
  const { baseUrl } = useContext(MainContext);
  const [pdf, setPdf] = useState(null);
  const [impressed, setImpressed] = useState(false);
  const componentRef = useRef();
  const [isPrinting, setIsPrinting] = useState(false);
  const printRef = useRef(null);
  const [impresN, setImpresN] = useState(0);
  const params = useParams();
  const { pathname } = useLocation();
  const path = pathname.slice(1, 7);

  const idSale = Number(params.id);
  //console.log(params.id);
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Ticket de compra", 10, 10);
    doc.text(`Numero de orden: `, 10, 20);
    doc.text(`Cliente: `, 10, 30);
    doc.text(`Fecha: `, 10, 40);
    doc.text("Productos comprados:", 10, 50);
    setPdf(doc.output("blob"));
    doc.save("ticket.pdf");
  };

  // We store the resolve Promise being used in `onBeforeGetContent` here
  const promiseResolveRef = useRef(null);

  // We watch for the state to change here, and for the Promise resolve to be available
  useEffect(() => {
    if (isPrinting && promiseResolveRef.current) {
      // Resolves the Promise, letting `react-to-print` know that the DOM updates are completed
      promiseResolveRef.current();
    }
  }, [isPrinting]);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      return new Promise((resolve) => {
        promiseResolveRef.current = resolve;
        setIsPrinting(true);
      });
    },
    onAfterPrint: () => {
      // Reset the Promise resolve so we can print again
      promiseResolveRef.current = null;
      setIsPrinting(false);
      setImpresN((prev) => prev + 1);
      //console.log(" ha terminado");
    },
  });
  const [isTicket, setIsTicket] = useState(false);
  useEffect(() => {
    // handlePrint();
    if (path === "ticket") {
      setIsTicket(true);
    }
  }, []);
  const [dataMain, setDataMain] = useState([]);
  const [dataI, setDataI] = useState([]);
  const [dataI2, setDataI2] = useState([]);
  const [formattedDateC, setFormattedDateC] = useState(0);
  const [formattedDate, setFormattedDate] = useState(null);
  useEffect(() => {
    axios
      .get(`${baseUrl}/ticket/${idSale}`)
      .then((res) => {
        //console.log(res.data);
        setDataMain(res.data.sale_data[0]);
        setDataI(res.data.sale_data_items);
        setDataI2(res.data.sale_data_items_ing);
        const date = new Date(
          Date.parse(res.data.sale_data[0].date.replace(/-/g, "/"))
        );
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const newDate = new Date(year, month, day, hours, minutes);
        let dateFormatter = new Intl.DateTimeFormat("es-MX", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        let timeFormatter = new Intl.DateTimeFormat("es-MX", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        let formattedDate =
          dateFormatter.format(newDate) + " " + timeFormatter.format(newDate);
        setFormattedDate(formattedDate);

        handlePrint();
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <GlobalStyle isPrinting={true} bg="red" />
      <TicketS>
        {isPrinting === false ? (
          <div className="action-buttons">
            <button onClick={handlePrint}>
              <i className="fa-solid fa-print"></i> Imprimir
            </button>
            {impresN > 0 ? (
              <button onClick={(e) => window.close()}>
                <i className="fa-solid fa-arrow-rotate-left"></i> Regresar
              </button>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        <div ref={componentRef}>
          <div className="ticket">
            <div className="header">
              <center>
                <b>
                  Folio -{" "}
                  {Number(dataMain["folio"]) < 10
                    ? `00${dataMain["folio"]}`
                    : dataMain["folio"]}
                </b>
              </center>
            </div>
            <br />
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Cant.</th>
                    <th>Articulo</th>
                    <th>Detalles</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {dataI.map((data, ind) => {
                    return (
                      <tr>
                        <td className="p-cant">
                          <div className="p-cant-cont">
                            <span>{data.cant}</span>
                          </div>
                        </td>

                        <td className="p-name">
                          {data.cat === "op" ? data.name : data.name}
                          {data.cat === "drinks" || data.cat === "op" ? (
                            ""
                          ) : (
                            <div>-------</div>
                          )}

                          {dataI2.map((data2, ind2) => {
                            if (
                              Number(data.id_item_sale) ===
                              Number(data2.id_item_sale)
                            ) {
                              return (
                                <>
                                  <b style={{ fontSize: "0.85em" }}>
                                    {data2.name}
                                    {Number(data2.is_extra) === 1 ? (
                                      <div>{data.exin}</div>
                                    ) : (
                                      ""
                                    )}
                                    <br />
                                    {Number(data.type_ing) === 2 && ind2 === 1
                                      ? "-Mitades-"
                                      : ""}
                                  </b>
                                </>
                              );
                            }
                          })}
                        </td>
                        <td>
                          {data.cat === "op" ? (
                            ""
                          ) : (
                            <>
                              {Number(data.orilla_relle) !== 0 ? (
                                <>
                                  {Number(data.orilla_relle) === 1 ? (
                                    <>
                                      ORP <br />
                                      {data.chstedp}
                                    </>
                                  ) : (
                                    <>
                                      ORM <br />
                                      {data.chstedm}
                                    </>
                                  )}
                                  <br />
                                </>
                              ) : (
                                ""
                              )}
                              {Number(data.queso_ex) !== 0 ? (
                                <>
                                  <br />
                                  -Queso Extra <br />${data.exch}
                                  <br />
                                </>
                              ) : (
                                ""
                              )}
                              {Number(data.pastor) !== 0 ? (
                                <>
                                  <br />
                                  -Pastor <br />${data.pas}
                                  <br />
                                </>
                              ) : (
                                ""
                              )}
                              {Number(data.deditos) !== 0 ? (
                                <>
                                  <br />
                                  -Deditos <br />${data.fin}
                                  <br />
                                </>
                              ) : (
                                ""
                              )}

                              <br />
                            </>
                          )}
                        </td>
                        <td className="p-price">
                          <div className="p-cant-cont">
                            <span>
                              $
                              {(Number(data.price) * Number(data.cant)).toFixed(
                                2
                              )}
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div
              className="total"
              style={{ borderBottom: "1px dashed", paddingBottom: "3px" }}
            >
              <span className="total-label">Total:</span>
              <span className="total-amount">
                ${(Number(dataMain.total) + Number(dataMain.envio)).toFixed(2)}
              </span>
            </div>
            <div className="footer">
              {Number(dataMain.type_order) === 1 ? (
                <>
                  {dataMain.client !== "" ? (
                    <>
                      <br />
                      <p>
                        Cliente:
                        <br />
                        {dataMain.client}
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  <br />
                  <p>
                    Direccion & Cliente:
                    <br /> {dataMain.address}
                    <br />
                    {dataMain.client}
                  </p>
                </>
              )}

              <br />
              <b>
                <span className="date">{formattedDate}</span>
              </b>
            </div>
          </div>
          {isPrinting === true && (
            <div className="ticket">
              <div className="header">
                <center>
                  <i className="fa-solid fa-pizza-slice"></i>
                </center>
                <center>
                  <b>
                    Folio -{" "}
                    {Number(dataMain["folio"]) < 10
                      ? `00${dataMain["folio"]}`
                      : dataMain["folio"]}
                  </b>
                </center>
                <center>
                  <b>{storeName}</b>
                </center>
                <center>
                  <b>{storeAddress}</b>
                  <br />

                  <b>Tel. {storePhone}</b>
                </center>
              </div>
              <br />
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Cant.</th>
                      <th>Articulo</th>
                      <th>Detalles</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataI.map((data, ind) => {
                      return (
                        <tr>
                          <td className="p-cant">
                            <div className="p-cant-cont">
                              <span>{data.cant}</span>
                            </div>
                          </td>

                          <td className="p-name">
                            {data.cat === "op" ? data.name : data.name}
                            {data.cat === "drinks" || data.cat === "op" ? (
                              ""
                            ) : (
                              <div>-------</div>
                            )}

                            {dataI2.map((data2, ind2) => {
                              if (
                                Number(data.id_item_sale) ===
                                Number(data2.id_item_sale)
                              ) {
                                return (
                                  <>
                                    <b style={{ fontSize: "0.85em" }}>
                                      {data2.name}
                                      {Number(data2.is_extra) === 1 ? (
                                        <div>{data.exin}</div>
                                      ) : (
                                        ""
                                      )}
                                    </b>
                                  </>
                                );
                              }
                            })}
                          </td>
                          <td>
                            {data.cat === "op" ? (
                              ""
                            ) : (
                              <>
                                {Number(data.orilla_relle) !== 0 ? (
                                  <>
                                    {Number(data.orilla_relle) === 1 ? (
                                      <>
                                        ORP <br />
                                        {data.chstedp}
                                      </>
                                    ) : (
                                      <>
                                        ORM <br />
                                        {data.chstedm}
                                      </>
                                    )}
                                    <br />
                                  </>
                                ) : (
                                  ""
                                )}
                                {Number(data.queso_ex) !== 0 ? (
                                  <>
                                    <br />
                                    -Queso Extra <br />${data.exch}
                                    <br />
                                  </>
                                ) : (
                                  ""
                                )}
                                {Number(data.pastor) !== 0 ? (
                                  <>
                                    <br />
                                    -Pastor <br />${data.pas}
                                    <br />
                                  </>
                                ) : (
                                  ""
                                )}
                                {Number(data.deditos) !== 0 ? (
                                  <>
                                    <br />
                                    -Deditos <br />${data.fin}
                                    <br />
                                  </>
                                ) : (
                                  ""
                                )}

                                <br />
                              </>
                            )}
                          </td>
                          <td className="p-price">
                            <div className="p-cant-cont">
                              <span>
                                $
                                {(
                                  Number(data.price) * Number(data.cant)
                                ).toFixed(2)}
                              </span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {/*  <div className="item-list">
              {dataI.map((data, ind) => {
                return (
                  <div className="item">
                    
                    <span className="item-name">
                    <div className="item-cant">
                      {ind === 0 ? <span className="cant-txt">Cant</span>:""}
                      
                      
                      <span>
                      {data.cant}

                      </span>
                    </div>
                    
                      <div className="item-ing" >
                      <div className="item-name-value">
                        {data.name} <br />
                        
                      </div>
                        {dataI2.map((data2, ind2) => {
                          if (
                            Number(data.id_item_sale) ===
                            Number(data2.id_item_sale)
                          ) {
                            return (
                              <>
                                <b style={{ fontSize: "0.85em" }}>{data2.name}</b>
                                <br />
                              </>
                            );
                          }
                        })}
                      </div>
                    </span>
                    <span className="item-price">
                      ${(Number(data.price) * Number(data.cant)).toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </div>*/}
              {Number(dataMain.type_order) === 2 ? (
                <div className="total">
                  <span className="total-label">Envio:</span>
                  <span className="total-amount">
                    ${Number(dataMain.envio).toFixed(2)}
                  </span>
                </div>
              ) : (
                ""
              )}

              <div className="total">
                <span className="total-label">Subtotal:</span>
                <span className="total-amount">
                  ${Number(dataMain.total).toFixed(2)}
                </span>
              </div>
              <div className="total">
                <span className="total-label">Total:</span>
                <span className="total-amount">
                  $
                  {(Number(dataMain.total) + Number(dataMain.envio)).toFixed(2)}
                </span>
              </div>
              <div className="total">
                <span className="total-label">Total Efectivo:</span>
                <span className="total-amount">
                  ${Number(dataMain.total_cash).toFixed(2)}
                </span>
              </div>
              <div className="total">
                <span className="total-label">Total Tarjeta:</span>
                <span className="total-amount">
                  ${Number(dataMain.total_card).toFixed(2)}
                </span>
              </div>
              <div
                className="total"
                style={{ borderBottom: "1px dashed", paddingBottom: "3px" }}
              >
                <span className="total-label">Cambio:</span>
                <span className="total-amount">
                  ${Number(dataMain.cambio).toFixed(2)}
                </span>
              </div>
              <div className="footer">
                {Number(dataMain.type_order) === 1 ? (
                  <>
                    {dataMain.client !== "" ? (
                      <>
                        <br />
                        <p>
                          Cliente:
                          <br />
                          {dataMain.client}
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  <>
                    <br />
                    <p>
                      Direccion & Cliente:
                      <br /> {dataMain.address}
                      <br />
                      {dataMain.client}
                    </p>
                  </>
                )}

                <br />
                <b>
                  <span className="date">{formattedDate}</span>
                </b>
              </div>
              <div className="qr">
                <img src="/assets/img/qr.png" alt="" />
                <p>Escaneame para conocer nuestros productos</p>
              </div>
            </div>
          )}
        </div>
      </TicketS>
    </>
  );
};

export default Ticket;
