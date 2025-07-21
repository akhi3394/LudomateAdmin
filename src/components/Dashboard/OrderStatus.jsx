

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../hooks/CustomTable";
import CustomPagination from "../../hooks/CustomPagination";

  const OrderData = [
    {
      id: "1",
      OrderId: "ORD- #458",
      Company: "Bluedart Logistics",
      Items: "56",
      Date: "2025/05/05",
      Status: "Pending",
      Total: "$28,596",
    },
    {
      id: "2",
    OrderId: "ORD- #458",
      Company: "Bluedart Logistics",
      Items: "56",
      Date: "2025/05/05",
      Status: "Pending",
      Total: "$28,596",
    },
    {
      id: "3",
      OrderId: "ORD- #458",
      Company: "Bluedart Logistics",
      Items: "56",
      Date: "2025/05/05",
      Status: "Completed",
      Total: "$28,596",
    },
  ];
const OrderStatus = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Trucks");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="text-white w-full p-6">
      {/* Back Button + Heading */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/dashboardicons/backbutton.svg"
          alt="Back"
          className="w-[42px] h-[42px] rounded-full cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">
          Orders
        </h1>
      </div>

      {/* Dropdown */}
      <div className="flex items-center gap-4 mb-6">
        <label
          htmlFor="company"
          className="text-[#F9F9F9] font-poppins font-medium text-[16px]"
        >
          Monitor Trucks/Drivers of
        </label>
        <select
          id="company"
          className="w-[244px] h-[56px] rounded-[8px] bg-[#F7F7F7] text-black px-4"
        >
          <option value="Company A">Company A</option>
          <option value="Company B">Company B</option>
          <option value="Company C">Company C</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="w-full overflow-hidden mb-6 ">
        <div className=" inline-flex bg-[#070539] p-1 rounded-[5px]">
          <div
            onClick={() => setSelectedTab("Trucks")}
            className={`w-[220px] h-[48px]  flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              selectedTab === "Trucks"
                ? "bg-[#0A0666] text-white rounded-[5px]"
                : " text-white"
            }`}
          >
            Pending
          </div>

          <div
            onClick={() => setSelectedTab("Drivers")}
            className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              selectedTab === "Drivers"
                ? "bg-[#0A0666] text-white rounded-[5px]"
                : " text-[#BFBFBF]"
            }`}
          >
            Completed
          </div>
        </div>
      </div>

             <div className="overflow-x-auto custom-scrollbar w-full rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
          <table className="min-w-[1200px] table-auto text-left w-full">
            <thead>
              <tr className="bg-[#070539] h-[40px] text-white text-sm border-b border-[#fff]">
                <th className="px-5">Order ID</th>
                <th className="px-5">Company</th>
                <th className="px-5">Items</th>
                <th className="px-5">Date</th>
                <th className="px-5">Status</th>
                <th className="px-5">Total</th>
              </tr>
            </thead>
            <tbody>
              {OrderData.map((driver, index) => (
                <tr
                  key={index}
                  className={`bg-[#131060] text-white h-[90px] ${index !== OrderData.length - 1 ? 'border-b border-[#fff]' : ''}`}
                >
                  <td className="px-5">{driver.OrderId}</td>
                  <td className="px-5">{driver.Company}</td>
                  <td className="px-5">{driver.Items}</td>
                  <td className="px-5">{driver.Date}</td>
                  <td className="px-5">
                    <span
                      className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[100px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${
                        driver.Status === 'On Break'
                          ? 'bg-[#6763F1]'
                          : driver.Status === 'Completed'
                          ? 'bg-[#14AE5C]'
                          : 'bg-[#E8B931]'
                      }`}
                    >
                      {driver.Status}
                    </span>
                  </td>
                  <td className="px-5">{driver.Total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
          
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-white/70">Showing 6 out of 120 results</p>
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
      </div>
    </div>
  );
};

export default OrderStatus;
