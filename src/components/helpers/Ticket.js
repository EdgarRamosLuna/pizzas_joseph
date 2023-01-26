import axios from "axios";
import jsPDF from "jspdf";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import MainContext from "../../context/MainContext";
import GlobalStyle from "../../styles/GlobalStyles";
import { TicketS } from "../../styles/Ticket";

const Ticket = () => {
  const { baseUrl } = useContext(MainContext);
  const [pdf, setPdf] = useState(null);
  const [impressed, setImpressed] = useState(false);
  const componentRef = useRef();
  const [isPrinting, setIsPrinting] = useState(false);
  const printRef = useRef(null);
  const [impresN, setImpresN] = useState(0);
  const params = useParams();
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
      console.log(" ha terminado");
    },
  });
  useEffect(() => {
    handlePrint();
  }, []);
  const [dataI, setDataI] = useState([]);
  useEffect(() => {
    axios
      .get(`${baseUrl}/server/api/ticket/${idSale}`)
      .then((res) => {
        // console.log(res.data.items_names[0]);
        setDataI(res.data.items_names);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      <GlobalStyle isModal={true} />
      <TicketS>
        {isPrinting === false ? (
          <div className="action-buttons">
            <button onClick={generatePDF}>Generar PDF</button>
            <button onClick={handlePrint}>Imprimir</button>
            {impresN > 0 ? (
              <button onClick={(e) => window.close()}>Regresar</button>
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
                <b>Pizzas JOSSEPPH</b>
              </center>
              <br />
              <b>Calle Reforma # 15 centro Parras Coahuila CP 27987</b>
              <br />

              <b>Tel. 842 422 0123</b>
            </div>
            <br />
            <div className="item-list">
              <div className="item">
                <span className="item-name">
                  Pizza Familiar <br />
                  peperoni <br />
                  salchicha
                </span>
                <span className="item-price">$150.00</span>
              </div>
            </div>
            <div className="total">
              <span className="total-label">Total:</span>
              <span className="total-amount">$300.00</span>
            </div>
            <div className="footer">
              <br />
              <p>
                Direccion Cliente:
                <br /> Calle Reforma # 15 centro Parras Coahuila CP 27987
              </p>
              <br />
              <br />
              <b>
                Fecha: <span className="date">01/01/2021</span>
              </b>
            </div>
          </div>
          {isPrinting === true && (
            <div className="ticket">
            <div className="header">
              <center>
                <b>Pizzas JOSSEPPH</b>
              </center>
              <br />
              <b>Calle Reforma # 15 centro Parras Coahuila CP 27987</b>
              <br />

              <b>Tel. 842 422 0123</b>
            </div>
            <br />
            <div className="item-list">
              <div className="item">
                <span className="item-name">
                  Pizza Familiar <br />
                  peperoni <br />
                  salchicha
                </span>
                <span className="item-price">$150.00</span>
              </div>
              <div className="item">
                <span className="item-name">
                  Pizza Familiar <br />
                  peperoni <br />
                  salchicha
                </span>
                <span className="item-price">$150.00</span>
              </div>
              <div className="item">
                <span className="item-name">
                  Pizza Familiar <br />
                  peperoni <br />
                  salchicha
                </span>
                <span className="item-price">$150.00</span>
              </div>
            </div>
            <div className="total">
              <span className="total-label">Total:</span>
              <span className="total-amount">$300.00</span>
            </div>
            <div className="footer">
              <br />
              <p>
                Direccion Cliente:
                <br /> Calle Reforma # 15 centro Parras Coahuila CP 27987
              </p>
              <br />
              <br />
              <b>
                Fecha: <span className="date">01/01/2021</span>
              </b>
            </div>
          </div>
          )}
        </div>
      </TicketS>
    </>
  );
};

export default Ticket;
