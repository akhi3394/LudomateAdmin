import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CustomPagination from "../../hooks/CustomPagination";

const ActiveTrucksData = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTab, setSelectedTab] = useState(searchParams.get("tab") || "Trucks");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const [showDropdown, setShowDropdown] = useState(null);

  // Sample data for Trucks
  const trucksData = [
    {
      id: "1",
      TruckId: "TRK-123",
      Model: "Volvo FH16",
      Capacity: "24 tons",
      TotalTrips: "8",
      Status: "Maintenance",
      Location: "Chicago, IL",
      LastMaintenance: "2025/05/02",
    },
    {
      id: "2",
      TruckId: "TRK-456",
      Model: "Scania R450",
      Capacity: "22 tons",
      TotalTrips: "12",
      Status: "Active",
      Location: "New York, NY",
      LastMaintenance: "2025/04/15",
    },
    {
      id: "3",
      TruckId: "TRK-789",
      Model: "MAN TGX",
      Capacity: "20 tons",
      TotalTrips: "5",
      Status: "Inactive",
      Location: "Los Angeles, CA",
      LastMaintenance: "2025/03/20",
    },
  ];

  // Sample data for Drivers
  const driversData = [
    {
      id: "1",
      DriverId: "DRV #123",
      Name: "John Smith",
      Contact: "+91 0000000000",
      AssignedTrucks: "Volvo 65",
      Status: "On Break",
      ActiveTrips: "From Chicago, IL To New York, NY",
      WorkingHours: "32 Hours",
    },
    {
      id: "2",
      DriverId: "DRV #456",
      Name: "Jane Doe",
      Contact: "+91 1111111111",
      AssignedTrucks: "Scania 22",
      Status: "On Duty",
      ActiveTrips: "From Los Angeles, CA To Seattle, WA",
      WorkingHours: "28 Hours",
    },
    {
      id: "3",
      DriverId: "DRV #789",
      Name: "Mike Johnson",
      Contact: "+91 2222222222",
      AssignedTrucks: "MAN 45",
      Status: "Off Duty",
      ActiveTrips: "None",
      WorkingHours: "0 Hours",
    },
  ];

  // Update query params when tab changes
  useEffect(() => {
    setSearchParams({ tab: selectedTab });
  }, [selectedTab, setSearchParams]);

  const handleActionClick = (index) => {
    setShowDropdown(showDropdown === index ? null : index);
  };

  const openEditPopup = (item) => {
    console.log("View Detail:", item);
    setShowDropdown(null);
  };

  const openTrackPopup = (item) => {
    console.log("Track Location:", item);
    setShowDropdown(null);
  };

  const contactDriver = (item) => {
    console.log("Contact Driver:", item);
    setShowDropdown(null);
  };

  const renderTable = () => {
    if (selectedTab === "Trucks") {
      return (
        <div className="overflow-x-auto custom-scrollbar w-full rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
          <table className="min-w-[1200px] table-auto text-left w-full">
            <thead>
              <tr className="bg-[#070539] h-[40px] text-white text-sm border-b border-[#fff]">
                <th className="px-5">Truck ID</th>
                <th className="px-5">Model</th>
                <th className="px-5">Capacity</th>
                <th className="px-5">Total Trips</th>
                <th className="px-5">Status</th>
                <th className="px-5">Location</th>
                <th className="px-5">Last Maintenance</th>
              </tr>
            </thead>
            <tbody>
              {trucksData.map((truck, index) => (
                <tr
                  key={index}
                  className={`bg-[#131060] text-white h-[90px] ${index !== trucksData.length - 1 ? 'border-b border-[#fff]' : ''}`}
                >
                  <td className="px-5">{truck.TruckId}</td>
                  <td className="px-5">{truck.Model}</td>
                  <td className="px-5">{truck.Capacity}</td>
                  <td className="px-5">{truck.TotalTrips}</td>
                  <td className="px-5">
                    <span
                      className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[110px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${
                        truck.Status === 'Maintenance'
                          ? 'bg-[#6763F1]'
                          : truck.Status === 'Active'
                          ? 'bg-[#14AE5C]'
                          : 'bg-[#E8B931]'
                      }`}
                    >
                      {truck.Status}
                    </span>
                  </td>
                  <td className="px-5">{truck.Location}</td>
                  <td className="px-5">{truck.LastMaintenance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="overflow-x-auto custom-scrollbar w-full rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
          <table className="min-w-[1200px] table-auto text-left w-full">
            <thead>
              <tr className="bg-[#070539] h-[40px] text-white text-sm border-b border-[#fff]">
                <th className="px-5">Driver ID</th>
                <th className="px-5">Name</th>
                <th className="px-5">Contact</th>
                <th className="px-5">Assigned Trucks</th>
                <th className="px-5">Status</th>
                <th className="px-5">Active Trips</th>
                <th className="px-5">Working Hours</th>
                <th className="px-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {driversData.map((driver, index) => (
                <tr
                  key={index}
                  className={`bg-[#131060] text-white h-[90px] ${index !== driversData.length - 1 ? 'border-b border-[#fff]' : ''}`}
                >
                  <td className="px-5">{driver.DriverId}</td>
                  <td className="px-5">{driver.Name}</td>
                  <td className="px-5">{driver.Contact}</td>
                  <td className="px-5">{driver.AssignedTrucks}</td>
                  <td className="px-5">
                    <span
                      className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${
                        driver.Status === 'On Break'
                          ? 'bg-[#6763F1]'
                          : driver.Status === 'On Duty'
                          ? 'bg-[#14AE5C]'
                          : 'bg-[#E8B931]'
                      }`}
                    >
                      {driver.Status}
                    </span>
                  </td>
                  <td className="px-5">
                    <div className="text-sm">
                      {driver.ActiveTrips !== "None" ? (
                        <>
                          <div className="text-xs text-gray-300">From</div>
                          <div className="font-semibold">
                            {driver.ActiveTrips.split('To')[0]?.replace('From', '').trim()}
                          </div>
                          <div className="text-xs text-gray-300 mt-1">To</div>
                          <div className="font-semibold">
                            {driver.ActiveTrips.split('To')[1]?.trim()}
                          </div>
                        </>
                      ) : (
                        <div>{driver.ActiveTrips}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-5">{driver.WorkingHours}</td>
                  <td className="px-5 relative">
                    <img
                      src="/tableAction.svg"
                      alt="Action"
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => handleActionClick(index)}
                    />
                    {showDropdown === index && (
                      <div className="absolute right-20 top-18 bg-[#0B0741] text-white border rounded-tl-[12px] rounded-tr-[4px] rounded-br-[12px] rounded-bl-[12px] z-50 w-[150px]">
                        <div
                          className="px-4 py-2 cursor-pointer hover:bg-[#1A1850] border-b"
                          onClick={() => openEditPopup(driver)}
                        >
                          View Detail
                        </div>
                        <div
                          className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
                          onClick={() => openTrackPopup(driver)}
                        >
                          Track Location
                        </div>
                        <div
                          className="px-4 py-2 cursor-pointer hover:bg-[#1A1850]"
                          onClick={() => contactDriver(driver)}
                        >
                          Contact Driver
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <div className="text-white w-full p-6">
      {/* Back Button + Heading */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/dashboardicons/backbutton.svg"
          alt="Back"
          className="w-[42px] h-[42px] rounded-full cursor-pointer"
          onClick={() => navigate('/dashboard')}
        />
        <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">
          Truck & Drivers
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
      <div className="w-full overflow-hidden mb-6">
        <div className="inline-flex bg-[#070539] p-1 rounded-[5px]">
          {/* Trucks Tab */}
          <div
            onClick={() => setSelectedTab("Trucks")}
            className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              selectedTab === "Trucks"
                ? "bg-[#0A0666] text-white rounded-[5px]"
                : "text-white"
            }`}
          >
            Trucks
          </div>

          {/* Drivers Tab */}
          <div
            onClick={() => setSelectedTab("Drivers")}
            className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              selectedTab === "Drivers"
                ? "bg-[#0A0666] text-white rounded-[5px]"
                : "text-[#BFBFBF]"
            }`}
          >
            Drivers
          </div>
        </div>
      </div>

      {/* Table */}
      {renderTable()}

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

export default ActiveTrucksData;