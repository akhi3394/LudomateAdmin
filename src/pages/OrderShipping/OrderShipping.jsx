import React, { useState } from 'react'
import ManageAllShipments from '../../components/Ordershipping/manageAllShipments'
import CustomPagination from '../../hooks/CustomPagination'
import ShipmentStatus from '../../components/Ordershipping/shipmentStatusTable';
import DisputeResolution from '../../components/Ordershipping/disputeResoulution';
import ContainerRouteMap from '../../components/Ordershipping/containerRouteMap';

const OrderShipping = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <div className="text-white flex flex-col overflow-hidden mb-5">
      <div className="">
        <ManageAllShipments />
        <div className="flex justify-between items-center mt-4">
          <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      {/* 2.container route */}
      <div className="">
        <ContainerRouteMap/>
      </div>

      {/* 3 */}
      <div className="">
        <ShipmentStatus />
        <div className="flex justify-between items-center mt-4">
          <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      {/* 4 */}
      <div className="">
        <DisputeResolution />
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

export default OrderShipping
