import React from 'react'

const BtnClose = ({setFunction}) => {
    //() => setShowAddI(false)
  return (
    <div className="modal-close notify" onClick={setFunction}>
          <i className="fa-solid fa-circle-xmark"></i>
    </div>
  )
}

export default BtnClose