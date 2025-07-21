import { NavLink, useSearchParams } from 'react-router-dom';
import VehicleandHealthMaintanenceTable from './vehicleHealthMaintainanceTable';
import TrackGpsTable from './TrackGpsTable';
import { useState } from 'react';
import CustomPagination from '../../../hooks/CustomPagination';
import ActiveTrucksCount from './ActiveTrucks';
import VerificationDetailsTable from './VerificationDetailsTable';
import Performance from './Performance';
import NavTabs from '../NavTabs';

const options = [
  {
    type: 'active-trucks',
    title: 'Active Trucks',
    value: '148 Trucks',
  },
  {
    type: 'driver-details',
    title: 'Driver Details',
    value: 'Verification',
  },
  {
    type: 'performance',
    title: 'Performance',
    value: 'Drivers',
  },
];

const ArrowIcon = () => (
  <svg
    width="22"
    height="11"
    viewBox="0 0 16 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.014 6.38C11.1607 5.99867 11.322 5.64667 11.498 5.324C11.674 4.98667 11.872 4.67133 12.092 4.378H0.3V2.574H12.092C11.8867 2.28067 11.696 1.97267 11.52 1.65C11.344 1.31267 11.1827 0.953333 11.036 0.571999H12.708C13.6173 1.64267 14.6147 2.45667 15.7 3.014V3.96C14.6147 4.488 13.6173 5.29467 12.708 6.38H11.014Z"
      fill="white"
    />
  </svg>
);

const TruckManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const [searchParams, setSearchParams] = useSearchParams();
  const view = searchParams.get('view');

  const handleBoxClick = (type) => {
    setSearchParams({ view: type });
  };

  return (
    <div>
      <NavTabs/>
      <h2 className="text-[30px] font-bold mb-5 text-white">Truck & Driver Management</h2>

      {/* Buttons */}
      <div className="flex gap-4 mb-4">
        {options.map(({ type, title, value }) => {
          const isActive = view === type;

          return (
            <button
              key={type}
              onClick={() => handleBoxClick(type)}
              className={`
                w-full h-[75px] rounded-xl 
                px-6 py-2 flex flex-col justify-between 
                bg-gradient-to-br from-[#4100B4] to-[#1C004E]
                border-[1px] ${isActive ? 'border-white' : 'border-[#1C1889]'}
                transition-all duration-200
              `}
            >

              <div className="text-[12px] text-start text-[#BFBFBF] leading-[18px] font-medium font-[Poppins]">
                {title}
              </div>


              <div className="flex justify-between items-center">
                <div className="text-[22px] text-white font-semibold font-[Poppins] leading-[33px]">
                  {value}
                </div>
                <ArrowIcon />
              </div>

            </button>
          );
        })}
      </div>

      {/* Content */}
      {!view && (
        <><div>
          <VehicleandHealthMaintanenceTable />
          <div className="flex justify-between items-center mt-4">
            <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage} />
          </div>
        </div>
          <div className="">
            <TrackGpsTable />
            <div className="flex justify-between items-center mt-4">
              <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage} />
            </div>
          </div>
        </>
      )}

      {/* Conditionally render components if needed */}
      {view === 'active-trucks' && <ActiveTrucksCount />}
      {view === 'driver-details' &&
        <div className="">
          <VerificationDetailsTable />
          <div className="flex justify-between items-center mt-4">
            <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage} />
          </div>
        </div>
      }
      {view === 'performance' && <Performance />}
    </div>
  );
};

export default TruckManagement;
