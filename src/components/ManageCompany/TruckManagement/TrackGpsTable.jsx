import React, { useEffect, useRef, useState } from 'react';

const data = [
    {
        TruckID: 'TRK 8521',
        DriverName: 'John Smith',
        StartDate: '2025/05/05',
        StartEndLocation: 'Chicago',
        DistanceCovered: '1120 mi',
        Duration: '12 Hours',
        RouteStatus: 'Completed',
    },
    {
        TruckID: 'TRK 8521',
        DriverName: 'John Smith',
        StartDate: '2025/05/05',
        StartEndLocation: 'Chicago',
        DistanceCovered: '1120 mi',
        Duration: '12 Hours',
        RouteStatus: 'In Progress',
    },
    {
        TruckID: 'TRK 8521',
        DriverName: 'John Smith',
        StartDate: '2025/05/05',
        StartEndLocation: 'Chicago',
        DistanceCovered: '1120 mi',
        Duration: '12 Hours',
        RouteStatus: 'Interrupted',
    },
    {
        TruckID: 'TRK 8521',
        DriverName: 'John Smith',
        StartDate: '2025/05/05',
        StartEndLocation: 'Chicago',
        DistanceCovered: '1120 mi',
        Duration: '12 Hours',
        RouteStatus: 'Completed',
    },
    {
        TruckID: 'TRK 8521',
        DriverName: 'John Smith',
        StartDate: '2025/05/05',
        StartEndLocation: 'Chicago',
        DistanceCovered: '1120 mi',
        Duration: '12 Hours',
        RouteStatus: 'Completed',
    },
];



const TrackGpsTable = () => {

    const [trackPopup, setTrackPopup] = useState({ open: false, role: null });
    const trackPopupRef = useRef(null);

    const openTrackPopup = (role) => {
        console.log('Opening Track popup for role:', role.TruckID);
        setTrackPopup({ open: true, role });
    };

    const closeTrackPopup = () => {
        console.log('Closing Track popup');
        setTrackPopup({ open: false, role: null });
    };

    // Handle click outside for both popups
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (trackPopupRef.current && !trackPopupRef.current.contains(event.target)) {
                closeTrackPopup();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    return (
        <>
            <div className="flex justify-between mb-2">
                <p className="text-[#fff] text-[22px] font-semibold py-3">Truck GPS and Route History</p>
            </div>

            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Truck ID</th>
                            <th className="px-5">Driver Name</th>
                            <th className="px-5">Start Date</th>
                            <th className="px-5">Start & End Location</th>
                            <th className="px-5">Distance Covered</th>
                            <th className="px-5">Duration</th>
                            <th className="px-5">Route Status</th>
                            <th className="px-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((role, index) => (
                            <tr
                                key={index}
                                className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
                            >
                                <td className="px-5">{role.TruckID}</td>
                                <td className="px-5">{role.DriverName}</td>
                                <td className="px-5">{role.StartDate}</td>
                                <td className="px-5">{role.StartEndLocation}</td>
                                <td className="px-5">{role.DistanceCovered}</td>
                                <td className="px-5">{role.Duration}</td>
                                <td className="px-5">
                                    <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.createdOn === 'Active' ? 'bg-[#14AE5C]' :
                                        role.RouteStatus === 'In Progress' ? 'bg-[#E8B931] w-[125px]' :
                                            role.RouteStatus === 'Completed' ? 'bg-[#14AE5C]' : 'bg-[#EC221F] w-[110px]'}`}>
                                        {role.RouteStatus}
                                    </span>

                                </td>
                                <td className="px-5 relative" >
                                    <span className='flex gap-2 cursor-pointer' onClick={() => openTrackPopup(role)}>
                                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.25 0C15.4966 0 19.7499 4.22748 19.75 9.44238C19.75 14.6574 14.6042 20.0656 10.25 24C6.6875 20.0656 0.75 14.6574 0.75 9.44238C0.750131 4.22748 5.00338 1.28075e-07 10.25 0ZM10.25 5C8.86929 5 7.75 6.11929 7.75 7.5C7.75 8.88071 8.86929 10 10.25 10C11.6307 10 12.75 8.88071 12.75 7.5C12.75 6.11929 11.6307 5 10.25 5Z" fill="white" />
                                        </svg>
                                        <span>Tracking</span>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* Track Location Popup */}
            {trackPopup.open && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        ref={trackPopupRef}
                        className="flex gap-4 w-[90%] lg:w-[70%] max-h-[80vh] lg:max-h-[500px] border border-[#fff] rounded-2xl text-white bg-[#131060] overflow-hidden"
                    >
                        {/* Left: Status Timeline */}
                        {/* Left: Updated UI as per screenshot */}
                        
                        <div className="w-full lg:w-[40%] bg-[#131060] rounded-l-2xl p-4 lg:p-6 flex flex-col">
                           
                            <h1 className="text-[20px] font-semibold text-white mb-4">TRK 8521</h1>

                            {/* SIP Number and Status */}
                            <div className="mb-3">
                                <div className="flex justify-between text-[#B7B7B7] text-[13px] mb-1">
                                    <p>Current Location</p>
                                    <p>Start Date</p>
                                </div>
                                <div className="flex justify-between text-white text-[15px] font-medium">
                                    <p>Detroit, CA</p>
                                    <p>2025/05/05</p>
                                </div>
                            </div>


                            {/* Driver Details */}
                            <p className="text-[16px] text-white font-medium mb-3">Driver Details</p>

                            <div className="border border-[#fff] rounded-xl px-4 py-4 mb-5">
                                <div className="flex items-center gap-3 mb-3">
                                    <img
                                        src="https://randomuser.me/api/portraits/men/1.jpg"
                                        alt="driver"
                                        className="w-[34px] h-[34px] rounded-full border-2 border-[#009951]"
                                    />
                                    <div>
                                        <p className="text-white text-[15px] font-medium">{trackPopup.role.TruckID}</p>
                                        <p className="text-white text-[15px] font-medium">{trackPopup.role.DriverName}</p>
                                    </div>
                                </div>

                                <div className="text-[#FFFFFF] text-[12px] space-y-1">
                                    <p>Total Deliveries - 256</p>
                                    <p>On Time Deliveries - 210</p>
                                    <p>
                                        Reviews - <span className="text-yellow-400">4.5★</span>
                                    </p>
                                </div>

                            </div>
                            <div className="flex justify-between mb-1">
                                <p className='text-[#B7B7B7] text-[14px]'>Start Location</p>
                                <p className='text-[#B7B7B7] text-[14px]'>End Location</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p className='text-[16px] font-medium'>Chicago, IL</p>
                                <p className='text-[16px] font-medium'>Newyork, NY</p>
                            </div>
                            <div className="flex justify-between mb-1">
                                <p className='text-[#B7B7B7] text-[14px]'>Duration</p>
                                <p className='text-[#B7B7B7] text-[14px]'>Route Status</p>
                            </div>
                            <div className="flex justify-between mb-4">
                                <p className='text-[16px] font-medium'>12 Hours</p>
                                <p className='text-[16px] font-medium'>In Progress</p>
                            </div>
                        </div>

                        {/* Right: Map Placeholder */}
                        <div className="flex-1 overflow-hidden relative">
                            <iframe
                                title="Live Tracking Map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d88959.3373240372!2d-104.6189!3d50.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1717420839204!5m2!1sen!2sca"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full min-h-[400px] lg:min-h-[500px] bg-[#F4F6FA] flex items-center justify-center rounded-r-2xl border border-[#E9E9E9]"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TrackGpsTable;