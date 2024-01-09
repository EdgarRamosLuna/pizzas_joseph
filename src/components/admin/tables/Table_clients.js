import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/MainContext";
import { ActionBtns, TableContainer } from "../../../styles/Styles";
import FilterItems from "./FilterItems";

const TableClients = (props) => {
  const { type } = props;
  const { DataTable, data, setData,data2, setData2, data3, setData3, v4, showConfBox, setShowConfBox, updateItem, removeItem, baseUrl } = useContext(MainContext);
  
  const [columns, setColumns] = useState([]);
  
//console.log(data);
  useEffect(() => {
      
      setData([]);
      setColumns([
        {
          name: "Cliente",
          selector: (row) => row.nombre,
        },
        {
          name: "Direccion",
          selector: (row) => row.direccion,
        },
        {
          name: "Status",
          selector: (row) => Number(row.status) === 1 ? "Activo" : "Inactivo",
        },
        {
          name: "",
          selector: (row) => row.actions,
        },
      ]);
      axios.get(`${baseUrl}/get_clients`).then((res) =>{
        console.log(res.data);
        // setData([]);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          console.log(element);
          setData(prev =>[...prev,
            {
              id: element.id,
              nombre: element.nombre,
              direccion:element.direccion,
              status: element.status_cuenta,
              actions: <ActionBtns >
                <button className="btn btn-edit" onClick={(e) => updateItem(e, element.id, 7)} />
                <button className="btn btn-del"  onClick={() => removeItem(element.id, 7)} />
                
              </ActionBtns>,
            },
           
          ]);
          
        }
      }).catch((err) =>{
        console.error(err);
      });
   
  }, [type]);
  //const {filteredItems, subHeaderComponentMemo, resetPaginationToggle, filterText} = useTable(data, 'username');
  return (
    <TableContainer>
    
        
       <FilterItems columns={columns} data={data} field='nombre' placeholder='Buscar por usuario' searchBar={true} />
        
    </TableContainer>
  );
};

export default TableClients;
