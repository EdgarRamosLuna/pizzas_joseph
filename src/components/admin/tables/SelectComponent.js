import axios from "axios";
import React, { useCallback } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainContext from "../../../context/MainContext";
import { ActionBtns } from "../../../styles/Styles";

const SelectComponent = ({ statusData, id_sale }) => {
  const [status, setStatus] = useState(statusData);
  const {
    DataTable,
    data,
    setData,
    data2,
    setData2,
    data3,
    setData3,
    v4,
    showConfBox,
    setShowConfBox,
    updateItem,
    removeItem,
    bseUrl,
    baseUrl,
    setShowDetails,
    details,
    setDetails,
    formattedDate,
    sixDaysLater,
    sixDaysBefore,
    today,
    setTimeline,
    firstDayOfMonth,
    lastDayOfMonth,
    firstDayOfYear,
    lastDayOfYear,
    week,
    showDetail,
  } = useContext(MainContext);
  const updateArray2 = (id, status) => {
    //let existe = false;
    const newState = data.map((obj) => {
      if (obj.id === id) {
        return { ...obj, st: status };
      }
      return obj;
    });
    setData(newState);
  };
  const printTicket = (id_sale) => {
    window.open(`${bseUrl}/ticket/${id_sale}`, "_blank");
  };
  //console.log(data);
  const changeStatus = useCallback((e, val) => {
    setStatus(val);

    axios
      .post(`${baseUrl}/server/api/status`, { status: val, id_sale })
      .then((res) => {
          //    console.log(res);
           setData([]);
          for (let i = 0; i < res.data.length; i++) {
            const element = res.data[i];
            const date = new Date(Date.parse(element.date.replace(/-/g, "/")));
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const newDate = new Date(year, month, day, hours, minutes);
            const formattedDate = newDate
              .toLocaleString()
              .replace(/:00 /g, " ");
            const formattedDate2 =
              `0${date.getMonth() + 1}`.slice(-2) +
              "-" +
              `0${date.getDate()}`.slice(-2) +
              "-" +
              date.getFullYear();
            //console.log(formattedDate2);
            setData((prev) => [
              ...prev,
              {
                id: element.id,
                client: element.client,
                total: `$${Number(element.total).toFixed(2)}`,
                totalFinal: (
                  Number(element.total) + Number(element.envio)
                ).toFixed(2),
                total_cash: `$${element.total_cash}`,
                total_card: `$${element.total_card}`,
                envio: `$${element.envio}`,
                address: element.address,
                date: formattedDate,
                formattedDate: formattedDate2,
                status: (
                  <>
                    <SelectComponent
                      id_sale={element.id}
                      statusData={element.status}
                    />
                  </>
                ),
                st: Number(element.status),
                order:
                  Number(element.type_order) === 1
                    ? "Restaurante"
                    : "Domicilio",
                actions: (
                  <>
                    <ActionBtns>
                      <button
                        className="btn"
                        onClick={() => printTicket(element.id)}
                      >
                        <i className="fa-solid fa-print"></i>
                      </button>
                      <button
                        className="btn btn-del"
                        onClick={() => removeItem(element.id, 5)}
                      />
                    </ActionBtns>
                  </>
                ),
                details: (
                  <div className="details-container">
                    <i
                      className="fa-solid fa-circle-info"
                      onClick={(e) => showDetail(element.id)}
                    />
                  </div>
                ),
                cambio:
                  Number(element.total_cash) > 0
                    ? element.cambio
                    : (0).toFixed(2),
              },
            ]);
          }
        
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <>
      {Number(status) === 1 && (
        <select
          name="ing"
          value={status}
          onChange={(e) => changeStatus(e, e.target.value)}
        >
          <option value="0">Status</option>
          <option value="1">Completada</option>

          <option value="2">Cancelado</option>
          {/*opIng.map((item, indx) => {
                      return (
                        <option
                          value={item.id}
                          key={`${
                            opIng.length + carItem.length
                          }-${item.name}-${indx}`}
                        >
                          {item.name}
                        </option>
                      );
                    })*/}
        </select>
      )}
      {Number(status) === 2 && (
        <span style={{ color: "#a42220" }}>Cancelada</span>
      )}
      {Number(status) === 3 && (
        <span style={{ color: "#20a443" }}>Completada</span>
      )}
    </>
  );
};

export default SelectComponent;
