import React from 'react';
import { useNavigate } from 'react-router-dom';

const options = [
  {
    type: 'active-trucks',
    title: 'Fleet Size',
    value: '12 Trucks, 38 Drivers',
  },
  {
    type: 'driver-details',
    title: 'Subscription',
    value: 'Premium',
  },
  {
    type: 'performance',
    title: 'Revenue',
    value: '$14,195',
  },
];

const ActivityLogs = () => {
  const navigate = useNavigate();

  const logs = [
    {
      type: 'admin-login',
      message: 'Admin user logged into the system.',
      timestamp: 'Apr 17, 10:30 AM',
      user: 'Akhil John (Admin)',
      avatar: 'AJ',
    },
    {
      type: 'new-driver',
      message: 'New driver profile created.',
      timestamp: 'Apr 17, 10:30 AM',
      user: 'Sarah Miller (Manager)',
      avatar: 'SM',
      tags: ['Driver name - Michael Johnson', 'License verified - true'],
    },
    {
      type: 'truck-assignment',
      message: 'Truck #TRK-8521 assigned to driver.',
      timestamp: 'Apr 17, 10:30 AM',
      user: 'Sarah Miller (Dispatcher)',
      avatar: 'SM',
      tags: ['Truck ID - TB521', 'Driver ID - #85642'],
      hasTruckIcon: true,
    },
    {
      type: 'truck-assignment',
      message: 'Truck #TRK-8521 assigned to driver.',
      timestamp: 'Apr 17, 10:30 AM',
      user: 'Sarah Miller (Dispatcher)',
      avatar: 'SM',
      tags: ['Truck ID - TB521', 'Driver ID - #85642'],
      hasTruckIcon: true,
    },
    {
      type: 'truck-assignment',
      message: 'Truck #TRK-8521 assigned to driver.',
      timestamp: 'Apr 17, 10:30 AM',
      user: 'Sarah Miller (Dispatcher)',
      avatar: 'SM',
      tags: ['Truck ID - TB521', 'Driver ID - #85642'],
      hasTruckIcon: true,
    },
    {
      type: 'truck-assignment',
      message: 'Truck #TRK-8521 assigned to driver.',
      timestamp: 'Apr 17, 10:30 AM',
      user: 'Sarah Miller (Dispatcher)',
      avatar: 'SM',
      tags: ['Truck ID - TB521', 'Driver ID - #85642'],
      hasTruckIcon: true,
    },
  ];

  return (
    <div>
      <div className="flex gap-3 items-center mb-8">
        <div className="cursor-pointer" onClick={() => navigate(-1)}>
          <img src="/backbuttons.svg" alt="Back" className="w-[42px] h-[42px]" />
        </div>
        <h1 className="text-[22px] font-bold">BlueDart Logistics</h1>
      </div>

      <div className="flex gap-4 mb-8">
        {options.map(({ type, title, value }) => (
          <div
            key={type}
            className="w-full h-[75px] rounded-xl px-6 py-2 flex flex-col justify-between bg-[#131060] border border-[#1C1889] transition-all duration-200"
          >
            <div className="text-[12px] text-start text-[#BFBFBF] leading-[18px] font-medium font-[Poppins]">
              {title}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[22px] text-white font-semibold font-[Poppins] leading-[33px]">
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <p className="text-[22px] font-semibold mb-1">Activity Logs</p>
        <p className="text-[16px] text-[#B2B2B2] font-medium mb-6">
          TransGlobal Logistics - Recent activities and system logs
        </p>
      </div>

      <div className="w-full mx-auto">
        <div className="bg-[#131060] rounded-2xl sm:p-6 md:p-8 shadow-lg">
          <div className="space-y-2">
            {logs.map((log, index) => (
              <div
                key={index}
                className="flex items-center gap-20 rounded-lg border border-[#CFCFE6] px-4 py-2 w-full"
                style={{ minHeight: 63 }}
              >
                <div className="flex items-center mb-2">
                  <div className="w-[54px] h-[54px] bg-[#BABABA] rounded-full flex items-center justify-center mr-3">
                    <span className="text-black font-bold text-[16px]">{log.avatar}</span>
                  </div>

                  <div className=''>
                    <div className="flex mb-2">
                      {log.hasTruckIcon ? (
                        <img src="/truckicon.svg" alt="Truck" className="w-5 h-5 mr-2" />
                      ) : (<img src="/profileIcon.svg" alt="Truck" className="w-5 h-5 mr-2" />)}                    
                      <p className="text-white text-[16px] font-medium">{log.message}</p>
                    </div>
                    <p className="text-[#B2B2B2] text-[14px] font-medium">
                      {log.timestamp} • By {log.user}
                    </p>
                  </div>
                </div>
                {log.tags && log.tags.length > 0 && (
                  <div className="flex gap-2">
                    {log.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="border border-[#CFCFE6] rounded-xl px-2 py-1 text-white text-center text-[12px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLogs;