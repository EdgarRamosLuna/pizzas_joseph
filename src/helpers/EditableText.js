import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainContext from "../context/MainContext";
import { StyledNumber } from "../styles/Styles";

const EditableText = ({ data, id, fun}) => {
  const { onlyNumbers } = useContext(MainContext);
  const [isInput, setIsInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const updateCantN = (e, newcant) => {
    // elementType, setElementType
    setIsInput(true); //cambia el estado a true indicando que se mostrara el input
    setInputValue(newcant);
  };
  /*useEffect(() => {
    if (isInput) {
      document.querySelector(".cant-input").select();
    }
  }, [isInput]);*/

  const handleChange = (e) => {
    const input = e.target.value;

    if (!onlyNumbers.test(input)) {
      e.preventDefault();
      return;
    }

    setInputValue(e.target.value <= 0 ? 1 : e.target.value);
  };
  const handleConfirm = (id, value) => {
    fun(id, value);
    setIsInput(false);
  }
  return (
    <StyledNumber>
      {isInput ? (
        <>
          <div className="edit-btns">
            <i className="fa-solid fa-check" style={{ color: "green" }} onClick={(e) => handleConfirm(id, inputValue)} />
            <input
              className="cant-input"
              type="text"
              value={inputValue}
              onChange={(e) => handleChange(e)}
              onClick={(e) => e.target.select()}
            />
            <i
              className="fa-solid fa-xmark"
              onClick={() => setIsInput(false)}
            />
          </div>
        </>
      ) : (
        <span
          className="number-container"
          onClick={(e) => updateCantN(e, data.cant)}
        >
          {data.cant}
        </span>
      )}
    </StyledNumber>
  );
};

export default EditableText;
