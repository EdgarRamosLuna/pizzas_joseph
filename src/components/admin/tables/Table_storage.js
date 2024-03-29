import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/MainContext";
import { ActionBtns, TableContainer } from "../../../styles/Styles";
import FilterItems from "./FilterItems";

const TableStorage = (props) => {
  const { type } = props;
  const { DataTable, data, setData,data2, setData2, data3, setData3, v4, showConfBox, setShowConfBox, updateItem, removeItem, baseUrl } = useContext(MainContext);
  
  const [columns, setColumns] = useState([]);
  
//console.log(data);
  useEffect(() => {
    if (type === 0) {
      //console.log('entro');
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
        {
          name: "",
          selector: (row) => row.actions,
        },
      ]);
      axios.get(`${baseUrl}/pizzas`).then((res) =>{
    //    console.log(res);
        // setData([]);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          setData(prev =>[...prev,
            {
              id: element.id,
              id_item: element.id_item,
              size: element.size,
              price: element.price,
              extra: element.exin,
              cbm: element.chstedm,
              cbp: element.chstedp,
              ec: element.exch,
              fing: element.fin == 0 ? "N/A" : element.fin,
              past: element.pas == 0 ? "N/A" : element.pas,
              actions: <ActionBtns >
                <button className="btn btn-edit" onClick={(e) => updateItem(e, element.id_item, 1)} />
                <button className="btn btn-del"  onClick={() => removeItem(element.id_item, 1)} />
                
              </ActionBtns>,
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
        {
          name: "",
          selector: (row) => row.actions,
        },
        
      ]);
      axios.get(`${baseUrl}/products_other`).then((res) =>{
    //    console.log(res);
        // setData([]);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          setData2(prev =>[...prev,
            {
              id: element.id,
              id_item: element.id_item,
              product: element.product,
              price: element.price,
              ha: element.ha,
              sal: element.sal,
              doca: element.doca,
              actions: <ActionBtns >
              <button className="btn btn-edit" onClick={(e) => updateItem(e, element.id_item, 2)} />
              <button className="btn btn-del"  onClick={() => removeItem(element.id_item, 2)} />
              
            </ActionBtns>,
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
          name: "Es Ingrediente?",
          selector: (row) => parseInt(row.is_ing) === 1 ? "Si":"No",
        },
        {
          name: "Cantidad en inventario",
          selector: (row) => Number(row.is_ing) === 1 ? "":row.cant,
        },
        {
          name: "",
          selector: (row) => row.actions,
        },
        
      ]);
      axios.get(`${baseUrl}/products_materias_primas`).then((res) =>{
    //    console.log(res);
        // setData([]);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          setData3(prev =>[...prev,
            {
              id: element.id,
              id_item: element.id_item,
              is_ing: element.is_ing,
              name: element.name,
              price_bu: element.price_bu,
              cant: element.cant,
              actions: <ActionBtns >
              <button className="btn btn-edit" onClick={(e) => updateItem(e, element.id_item, 3)} />
              <button className="btn btn-del"  onClick={() => removeItem(element.id_item, 3)} />
              
            </ActionBtns>,
            },
           
          ]);
          
        }
      }).catch((err) =>{
        console.error(err);
      });
    }  
    if (type === 3) {
      setData([]);
      setColumns([
        {
          name: "Producto",
          selector: (row) => row.name,
        },
        {
          name: "Precio Venta",
          selector: (row) => Number(row.is_ing) === 1 ? "":row.price,
        },
        {
          name: "Cantidad en inventario",
          selector: (row) => Number(row.is_ing) === 1 ? "":row.cant,
        },
        {
          name: "",
          selector: (row) => row.actions,
        },
        
      ]);
      axios.get(`${baseUrl}/drinks`).then((res) =>{
    //    console.log(res);
        // setData([]);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          setData(prev =>[...prev,
            {
              id: element.id,
              id_item: element.id_item,
              name: element.name,
              cant: element.cant,
              price: element.sale_price,
              actions: <ActionBtns >
              <button className="btn btn-edit" onClick={(e) => updateItem(e, element.id_item, 4)} />
              <button className="btn btn-del"  onClick={() => removeItem(element.id_item, 4)} />
              
            </ActionBtns>,
            },
           
          ]);
          
        }
      }).catch((err) =>{
        console.error(err);
      });
    }
    if (type === 4) {
      setData3([]);
      setColumns([
        {
          name: "Producto",
          selector: (row) => row.name,
        },
        {
          name: "Precio",
          selector: (row) => Number(row.price) > 0 ? "0":row.price,
        },
        {
          name: "",
          selector: (row) => row.actions,
        },
        
      ]);
      axios.get(`${baseUrl}/products_materias_primas`).then((res) =>{
    //    console.log(res);
        // setData([]);
        for (let i = 0; i < res.data.length; i++) {
          const element = res.data[i];
          setData3(prev =>[...prev,
            {
              id: element.id,
              id_item: element.id_item,
              is_esp: element.is_esp,
              name: element.name,
              price_bu: element.price_bu,
              price: element.price,
              actions: <ActionBtns >
              <button className="btn btn-edit" onClick={(e) => updateItem(e, element.id_item, 3)} />
              <button className="btn btn-del"  onClick={() => removeItem(element.id_item, 3)} />
              
            </ActionBtns>,
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
      {type === 0 && <FilterItems columns={columns} data={data} field='size' placeholder='Buscar por tamaño' searchBar={true} />}
      {type === 1 && <FilterItems columns={columns} data={data2} field='product' placeholder='Buscar por producto' searchBar={true} />}
      {type === 2 && <FilterItems columns={columns} data={data3} field='name' placeholder='Buscar por nombre' searchBar={true} />}
      {type === 3 && <FilterItems columns={columns} data={data} field='name' placeholder='Buscar por bebida' searchBar={true} />}
      {type === 4 && <FilterItems columns={columns} data={data3} field='name' placeholder='Buscar por nombre' searchBar={true} />}
    </TableContainer>
  );
};

export default TableStorage;
