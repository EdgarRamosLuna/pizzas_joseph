import React from 'react'
import { PanelS } from '../../styles/PanelCont'

const PanelContainer = ({children}) => {
  return (
    <PanelS>
        <div className='container'>
            {children}
        </div>
    </PanelS>
  )
}

export default PanelContainer