
import React, { useState } from 'react'
import StoreandShipmentDoc from '../../components/ReportsData/storeandShipmentDocs';
import DriverReport from '../../components/ReportsData/driverReport';
import CustomPagination from '../../hooks/CustomPagination';


const ReportsData = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
  return (
    <div className=" text-white flex flex-col overflow-hidden  mb-5">
      <div className="">
        <StoreandShipmentDoc/>
        <div className="flex justify-between items-center mt-4">
          <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>


      {/* Permissions Table */}
      <div className="mt-6">
        <DriverReport />
         <div className="flex justify-between items-center mt-4">
          <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

 
    </div>
  )
}

export default ReportsData
