import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/MainContext";
import { ActionBtns, TableContainer } from "../../../styles/Styles";
import FilterItems from "./FilterItems";

const TableUsers = (props) => {
  const { type } = props;
  const { DataTable, data, setData,data2, setData2, data3, setData3, v4, showConfBox, setShowConfBox, updateItem, removeItem, baseUrl } = useContext(MainContext);
  
  const [columns, setColumns] = useState([]);
  
//console.log(data);
  useEffect(() => {
      
      setData([]);
      setColumns([
        {
          name: "Usuario",
          selector: (row) => row.user,
        },
        {
          name: "Status",
          selector: (row) => Number(row.status_cuenta) === 1 ? "Activo" : "Inactivo",
        },
        {
          name: "P. Inventario",
          selector: (row) => row.p_storage,
        },
        {
          name: "P. Ventas",
          selector: (row) => row.p_sales,
        },
        {
          name: "P. Usuarios",
          selector: (row) => row.p_users,
        },
        {
          name: "P. Clientes",
          selector: (row) => row.p_clients,
        },
        {
          name: "",
          selector: (row) => row.actions,
        },
      ]);
      axios.get(`${baseUrl}/server/api/get_users`).then((res) =>{
        console.log(res.data);
        // setData([]);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          setData(prev =>[...prev,
            {
              id: element.id,
              user: element.username,
              status_cuenta:element.status_cuenta,
              p_storage:Number(element.p_storage) === 1 ? "P": "D"  ,
              p_sales:Number(element.p_sales) === 1 ? "P": "D"  ,
              p_users:Number(element.p_users) === 1 ? "P": "D"  ,
              p_clients:Number(element.p_clients) === 1 ? "P": "D"  ,
              actions: <ActionBtns >
                <button className="btn btn-edit" onClick={() => updateItem(element.id, 5)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button className="btn btn-del"  onClick={() => removeItem(element.id, 5)}><i className="fa-solid fa-trash"></i></button>
                
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
    
        
       <FilterItems columns={columns} data={data} field='user' placeholder='Buscar por usuario' />
        
    </TableContainer>
  );
};

export default TableUsers;
