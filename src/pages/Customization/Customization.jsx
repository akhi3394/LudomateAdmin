import React, { useState } from 'react'
import SubscriptionPlan from '../../components/Customization/SubscriptionPlan'
import PriceManagement from '../../components/Customization/pricingManagement'
import CustomBranding from '../../components/Customization/customeBrading'
import NotificationSetting from '../../components/Customization/notificationSetting'
import CustomPagination from '../../hooks/CustomPagination'

const Customization = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
  return (
    <div className=" text-white flex flex-col overflow-hidden mb-5">
      <div className="">
        <SubscriptionPlan />
      </div>


      {/* Permissions Table */}
      <div className="mt-6">
        <PriceManagement />
      </div>

      {/* MultiAdmin1 Table */}
      <div className="mt-6">
        <CustomBranding />
        <div className="flex justify-between items-center mt-4">
          <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>

      {/* MultiAdmin2 Table */}
      <div className="mt-6">
        <NotificationSetting />
      </div>
    </div>
  )
}

export default Customization
