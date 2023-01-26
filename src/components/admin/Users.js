import React from 'react'
import { StorageS } from '../../styles/Styles'
import TableUsers from './tables/Table_users'

const Users = () => {
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