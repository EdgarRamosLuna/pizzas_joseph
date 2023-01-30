import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import MainContext from '../../context/MainContext';
import { StorageS } from '../../styles/Styles'
import TableUsers from './tables/Table_users'

const Users = () => {
  const {setLoadingS, option} = useContext(MainContext)
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
                <h3>Usuarios</h3>
            </div>
        </div>
        <TableUsers type={5} /> 
    </StorageS>
  )
}

export default Users