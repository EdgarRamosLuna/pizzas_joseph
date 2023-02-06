import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainContext from "../../../context/MainContext";

const SelectComponent = ({ statusData, id_sale }) => {
  const [status, setStatus] = useState(statusData);
  const {baseUrl} = useContext(MainContext)
  const changeStatus = (e, val) =>{
    setStatus(val);
    axios.post(`${baseUrl}/server/api/status`, { status:val, id_sale}).then((res) =>{
        console.log(e.target);
        //e.target.parentNode.replaceChild("ahh medio metro!", element);
    }).catch((err) => {
      console.error(err);
    });
  }
  return (
    <>
      {Number(status) === 1 && (
        <select
          name="ing"
          value={status}
          onChange={(e) => changeStatus(e, e.target.value)}
        >
          <option value="0">Status</option>
          <option value="1">En Proceso</option>
          <option value="3">Completada</option>
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
        <span style={{color:'#a42220'}}>
        Cancelada
        </span>
      )}
      {Number(status) === 3 && (
        <span style={{color:'#20a443'}}>
        Completada
        </span>
      )}

    </>
  );
};

export default SelectComponent;
