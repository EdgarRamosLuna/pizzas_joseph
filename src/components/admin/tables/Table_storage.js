import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/MainContext";
import { TableContainer } from "../../../styles/Styles";

const Table_storage = (props) => {
  const { type } = props;
  const { DataTable, data, setData,data2, setData2, data3, setData3, v4 } = useContext(MainContext);
  
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (type === 0) {
      console.log('entro');
      setData([]);
      setColumns([
        {
          name: "Tamaño",
          selector: (row) => row.size,
        },
        {
          name: "Precio",
          selector: (row) => row.price,
        },
        {
          name: "Ingrediente Extra",
          selector: (row) => row.extra,
        },
        {
          name: "O.R Mozarella",
          selector: (row) => row.cbm,
        },
        {
          name: "O.R Piladelphia",
          selector: (row) => row.cbp,
        },
        {
          name: "Queso Extra",
          selector: (row) => row.ec,
        },
        {
          name: "Deditos",
          selector: (row) => row.fing,
        },
        {
          name: "Pastor",
          selector: (row) => row.past,
        },
      ]);
      axios.get('https://oasistienda.com/pj/api/products_pizza').then((res) =>{
    //    console.log(res);
        // setData([]);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          setData(prev =>[...prev,
            {
              id: element.id,
              size: element.size,
              price: element.price,
              extra: element.exin,
              cbm: element.chstedm,
              cbp: element.chstedp,
              ec: element.exch,
              fing: element.fin == 0 ? "N/A" : element.fin,
              past: element.pas == 0 ? "N/A" : element.pas,
            },
           
          ]);
          
        }
      }).catch((err) =>{
        console.error(err);
      });
    }
    if (type === 1) {
      setData2([]);
      setColumns([
        {
          name: "Producto",
          selector: (row) => row.product,
        },
        {
          name: "Precio",
          selector: (row) => row.price,
        },
        {
          name: "Hawaiana",
          selector: (row) => row.ha,
        },
        {
          name: "Salchicha",
          selector: (row) => row.sal,
        },
        {
          name: "Doble Carne",
          selector: (row) => row.doca,
        },
        
      ]);
      axios.get('https://oasistienda.com/pj/api/products_other').then((res) =>{
    //    console.log(res);
        // setData([]);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          setData2(prev =>[...prev,
            {
              id: element.id,
              product: element.product,
              price: element.price,
              ha: element.ha,
              sal: element.sal,
              doca: element.doca,
            },
           
          ]);
          
        }
      }).catch((err) =>{
        console.error(err);
      });
    }
    if (type === 2) {
      setData3([]);
      setColumns([
        {
          name: "Producto",
          selector: (row) => row.name,
        },
        {
          name: "Precio Compra",
          selector: (row) => row.price_bu,
        },
        {
          name: "Es Ingrediente?",
          selector: (row) => parseInt(row.is_ing) === 1 ? "Si":"No",
        },
        {
          name: "Cantidad en inventario",
          selector: (row) => row.cant,
        },
        
      ]);
      axios.get('https://oasistienda.com/pj/api/products_materias_primas').then((res) =>{
    //    console.log(res);
        // setData([]);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          setData3(prev =>[...prev,
            {
              id: element.id,
              is_ing: element.is_ing,
              name: element.name,
              price_bu: element.price_bu,
              cant: element.cant,
            },
           
          ]);
          
        }
      }).catch((err) =>{
        console.error(err);
      });
    }
  }, [type]);

  return (
    <TableContainer>
      {type === 0 && <DataTable columns={columns} data={ data} />}
      {type === 1 && <DataTable columns={columns} data={ data2} />}
      {type === 2 && <DataTable columns={columns} data={ data3} />}
    </TableContainer>
  );
};

export default Table_storage;
