import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../context/MainContext";
import { ModalS, StyledButton } from "../../styles/Styles";
import BtnClose from "../helpers/BtnClose";

const AddIng = () => {
  const { setShowAddInv, stopProp, saveProduct, setShowAddI, searchResult, carItem,setCarItem, extraIngItem } =
    useContext(MainContext);
  const [data, setData] = useState([]);
  const [opIng, setOpIng] = useState([]);
  const [actualExtras, setActualExtras] = useState([]);
  useEffect(() => {
    for (let i = 0; i < searchResult.length; i++) {
      const element = searchResult[i];
      if (element.cat === "mp") {
        setOpIng((prev) => [...prev, searchResult[i]]);
      }
    }
    for (let j = 0; j < carItem.length; j++) {
        const element = carItem[j];
        if(j === extraIngItem){
            setActualExtras(element.ingre);
        }
        
    }
    return () => {};
  }, []);
  

  
  const saveExtraIng =  (id) =>{
    let arrayTest = [];
     arrayTest = actualExtras.slice();

    for (let j = 0; j < opIng.length; j++) {
        const element = opIng[j];
        if(parseInt(element.id) === parseInt(data.exing)){

            arrayTest.push({id_ing:data.exing, ing:element.name,});
        }
      //  console.log(element);
    }
    updateArray(id, arrayTest);

  }
  //console.log(actualExtras);
  const updateArray = (id, extras) => {

    const newState = carItem.map((obj, idx) => {
        if (parseInt(idx) === parseInt(id)) {
            return { ...obj, ingre: extras };
        }
        return obj;
    });
    setCarItem(newState);
    setShowAddI(false);

};
const setFunction = () =>{
  setShowAddI(false);
}
  return (
    <ModalS onClick={() => setShowAddI(false)}>
      <div className="modal-container" onClick={(e) => stopProp(e)}>

        <BtnClose setFunction={setFunction} />
        <div className="modal-title">
          <h2>Agregar un ingrediente</h2>
        </div>
        <div className="modal-form">
          <div className="form-item">
            <label for="">Ingrediente</label>
            <select
              name="exing"
              value={data.ing}
              onChange={(e) =>
                setData({
                  ...data,
                  [e.target.dataset.name || e.target.name]: e.target.value,
                })
              }
            >
              <option value="0">Selecciona un ingrediente</option>
              {opIng.map((item, index) => {
                return (
                  <>
                    <option value={item.id} key={index}>{item.name}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="form-item">
            <StyledButton onClick={()=> saveExtraIng(extraIngItem)} bg="#4fa420">Guardar</StyledButton>
          </div>
        </div>
      </div>
    </ModalS>
  );
};

export default AddIng;
