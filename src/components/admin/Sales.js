import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import MainContext from '../../context/MainContext'
import { StorageS } from '../../styles/Styles'
import Table_sales from './tables/Table_sales'

const Sales = () => {
  const {setLoadingS, option} = useContext(MainContext);
  useEffect(() => {
    setLoadingS(true);
    setTimeout(() => {
      setLoadingS(false);
    }, 500);
    return () => {};
  }, [option]);
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