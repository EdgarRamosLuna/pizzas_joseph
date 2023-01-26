import React from 'react'
import { StorageS } from '../../styles/Styles'
import Table_sales from './tables/Table_sales'

const Sales = () => {
  return (
    <StorageS>
        <div className='storage-menu'>
            <div className={`storage-menu-item active`}>
                <h3>Ventas</h3>
            </div>
        </div>
        <Table_sales type={4} />
    </StorageS>
  )
}

export default Sales