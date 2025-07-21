import React, { useState } from "react";
import CustomPagination from "../../hooks/CustomPagination";

const OrderData = [
  {
    id: "1",
    Company: "Global Express Shipping",
    Status: "Active",
    Driver: "89",
    Trucks: "75",
    LastActivity: "2 minutes ago",
    Subscription: "Premium",
  },
  {
    id: "2",
    Company: "Global Express Shipping",
    Status: "Active",
    Driver: "89",
    Trucks: "75",
    LastActivity: "2 minutes ago",
    Subscription: "Standard",
  },
  {
    id: "3",
    Company: "Global Express Shipping",
    Status: "In-Active",
    Driver: "89",
    Trucks: "75",
    LastActivity: "2 minutes ago",
    Subscription: "Basic",
  },
];

const ActiveTrucks = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <h2 className="text-white text-[22px] font-semibold mb-3">Active Truck & Drivers</h2>
      <div className="overflow-x-auto custom-scrollbar w-full rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
        <table className="min-w-[1200px] table-auto text-left w-full">
          <thead>
            <tr className="bg-[#131060] h-[40px] text-white text-sm border-b border-[#fff]">
              <th className="px-5">Company</th>
              <th className="px-5">Status</th>
              <th className="px-5">Driver</th>
              <th className="px-5">Trucks</th>
              <th className="px-5">Last Activity</th>
              <th className="px-5">Subscription</th>
            </tr>
          </thead>
          <tbody>
            {OrderData.map((driver, index) => (
              <tr
                key={index}
                className={`bg-[#131060] text-white h-[90px] ${index !== OrderData.length - 1 ? 'border-b border-[#fff]' : ''}`}
              >
                <td className="px-5">{driver.Company}</td>
                <td className="px-5">
                  <span
                    className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[100px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${driver.Status === 'Active'
                        ? 'bg-[#14AE5C]'
                        : driver.Subscription === 'In-Active'
                          ? 'bg-[#E8B931]'
                          : 'bg-[#333094]'
                      }`}
                  >
                    {driver.Status}
                  </span>
                </td>
                <td className="px-5">{driver.Driver}</td>
                <td className="px-5">{driver.Trucks}</td>
                <td className="px-5">{driver.LastActivity}</td>
                <td className="px-5">
                  <span
                    className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[100px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${driver.Subscription === 'Premium'
                        ? 'bg-[#090663]'
                        : driver.Subscription === 'Standard'
                          ? 'bg-[#0500A2]'
                          : 'bg-[#333094]'
                      }`}
                  >
                    {driver.Subscription}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between">
        <p className="text-white ">Showing 1 out of 120 result</p>

        <CustomPagination
          currentPage={page}
          totalPages={10}
          onPageChange={setPage}
          className="mt-2" />
      </div></>
  );
};

export default ActiveTrucks;
