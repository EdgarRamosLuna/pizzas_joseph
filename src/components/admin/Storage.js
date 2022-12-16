import React, { useState } from 'react'
import { StorageS } from '../../styles/Styles';
import Table_storage from './tables/Table_storage'

const Storage = () => {
  const [option, setOption] = useState(0);
  return (
    <StorageS>
        <div className='storage-menu'>
            <div className={`storage-menu-item ${option === 0 ? 'active':''}`} onClick={()=> setOption(0)}>
                <h3>Pizzas</h3>
            </div>
            <div className={`storage-menu-item ${option === 1 ? 'active':''}`} onClick={()=> setOption(1)}>
                <h3>Otros Productos</h3>
            </div>
            <div className={`storage-menu-item ${option === 2 ? 'active':''}`} onClick={()=> setOption(2)}>
                <h3>Materias Primas</h3>
            </div>
        </div>
        {option === 0 && <Table_storage type={option}></Table_storage>}
        {option === 1 && <Table_storage type={option}></Table_storage>}
        {option === 2 && <Table_storage type={option}></Table_storage>}
        
    </StorageS>
  )
}

export default Storage