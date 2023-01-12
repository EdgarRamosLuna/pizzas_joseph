import React from 'react'
import { useState } from 'react';
import { StyledNumber } from '../styles/Styles'

const EditableText = ({data}) => {
    const updateCantN = (e, newcant) => {
        // elementType, setElementType
        setIsInput(true); //cambia el estado a true indicando que se mostrara el input
        setInputValue(newcant);
      };
      const [isInput, setIsInput] = useState(false);
      const [inputValue, setInputValue] = useState("");
  return (
    <StyledNumber>
                                {isInput ? (
                                  <>
                                    <div className="edit-btns">
                                      <i
                                        className="fa-solid fa-check"
                                        style={{ color: "green" }}
                                      />
                                      <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) =>
                                          setInputValue(e.target.value < 0 ? 0: e.target.value)
                                        }
                                      />
                                      <i className="fa-solid fa-xmark" onClick={() => setIsInput(false)} />
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
  )
}

export default EditableText