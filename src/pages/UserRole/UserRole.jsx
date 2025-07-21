import React from 'react'
import CreateandAssignTable from '../../components/user-role/createandAssignTable'
import PermissionsTable from '../../components/user-role/permissionsTable'
import MultiAdmin1 from '../../components/user-role/multiAdmin1'
import MultiAdmin2 from '../../components/user-role/multiAdmin2'

const UserRole = () => {
  return (
       <div className=" text-white flex flex-col overflow-hidden  mb-5">
        <div className="">
      <CreateandAssignTable/>
        </div>
        

        {/* Permissions Table */}
        <div className="mt-6">
          <PermissionsTable/>
        </div>

        {/* MultiAdmin1 Table */}
        <div className="mt-6">
          <MultiAdmin1/>
        </div>

        {/* MultiAdmin2 Table */}
        <div className="mt-6">
          <MultiAdmin2/>
        </div>
      </div>
  )
}

export default UserRole

