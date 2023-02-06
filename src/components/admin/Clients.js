import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import MainContext from '../../context/MainContext'
import { StorageS } from '../../styles/Styles'
import TableClients from './tables/Table_clients'
import TableUsers from './tables/Table_users'

const Clients = () => {
  const {setLoadingS2, option} = useContext(MainContext)
  useEffect(() => {
    setLoadingS2(true);
    setTimeout(() => {
      setLoadingS2(false);
    }, 500);
    return () => {};
  }, [option]);
  return (
    <StorageS>
        <div className='storage-menu'>
            <div className={`storage-menu-item active`}>
                <h3>Clientes</h3>
            </div>
        </div>
        <TableClients type={5} /> 
    </StorageS>
  )
}

export default Clients