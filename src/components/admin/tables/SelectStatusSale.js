import React from "react";

const SelectStatusSale = ({status, changeStatus}) => {
  return (
    <select
      name="ing"
      value={status}
      onChange={(e) => changeStatus(e, e.target.value)}
    >
      <option value="0">Status</option>
      <option value="1">Completado</option>
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
  );
};

export default SelectStatusSale;
