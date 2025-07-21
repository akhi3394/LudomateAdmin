import React, { useState } from 'react';

// Status icons as React components
const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#009951" />
        <path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="white" />
    </svg>
);

const NearDestinationIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="white" />
        <circle cx="12" cy="12" r="6" fill="black" />
    </svg>
);

// Status steps and their order
const statusSteps = [
    { label: 'Dispatched from origin', key: 'dispatched' },
    { label: 'Arrived at hub', key: 'arrived' },
    { label: 'Near Destination', key: 'near' },
    { label: 'Delivered', key: 'delivered' },
];

// Example status (could be dynamic)
const currentStep = 1; // 0-based index: 0=Dispatched, 1=Arrived, 2=Near, 3=Delivered

const initialData = [
    { module: 'Container 456' },
    { module: 'Company B' },
    { module: 'Company C' },
    { module: 'Company D' },
];

const ContainerRouteMap = () => {
    const [data] = useState(initialData);
    const [selectedModule, setSelectedModule] = useState('Container 456');

    return (
        <div className="flex flex-col items-center py-8">
            <div className="w-full rounded-2xl shadow-lg">
                <p className="text-[#fff] text-[22px] font-semibold py-3 mb-2">Container Route & ETA Tracking</p>
                <div className="flex gap-3 items-center mb-6">
                    <p className='text-[16px] font-medium text-white'>Track Container</p>
                    <select
                        value={selectedModule}
                        onChange={(e) => setSelectedModule(e.target.value)}
                        className="w-[200px] h-[56px] px-3 py-2 bg-[#fff] text-[#000] border border-[#FFFFFF] rounded-lg focus:outline-none"
                    >
                        {data.map((item) => (
                            <option key={item.module} value={item.module}>
                                {item.module}
                            </option>
                        ))}
                    </select>
                </div>



                <div className="flex h-[589px] border border-[#fff] rounded-2xl">
                    {/* Left: Status Timeline */}
                    <div className="w-1/3 bg-[#080625] rounded-2xl p-6 flex flex-col ">
                        <h1 className='text-[22px] font-semibold mb-4'>Container 456</h1>
                        <div className="flex justify-between mb-2">
                            <p className='text-[14px] text-[#B7B7B7]'>Status</p>
                            <p className='text-[14px] text-[#B7B7B7]'>Last Updated</p>
                        </div>
                        <div className="flex justify-between mb-4">
                            <p className='text-[16px] text-[#FFFFFF]'>In Transit</p>
                            <p className='text-[16px] text-[#FFFFFF]'>Apr 19,</p>
                        </div>

                        <div className="border border-[#fff]  mb-6 px-5 py-5 rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src="https://randomuser.me/api/portraits/men/1.jpg"
                                    alt="driver"
                                    className="w-[32px] h-[32px] rounded-2xl border-2 border-[#009951]"
                                />
                                <div>
                                    <p className="text-white font-medium text-[16px]">John Smith</p>
                                    <p className="text-white text-[16px] font-medium">TRK-8521</p>

                                </div>
                            </div>
                            <div className="">
                                <p className="text-[#FFFFFF] text-[12px] mt-2">Total Deliveries - 256  </p>
                                <p className="text-[#FFFFFF] text-[12px] mt-2">On Time Deliveries - 210</p>
                                <p className="text-[#FFFFFF] text-[12px] mt-2">Reviews - <span className="text-yellow-400">4.5★</span></p>
                            </div>
                        </div>


                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[#B7B7B7] text-sm">Remaining Distance</span>
                                <span className="text-[#B7B7B7] text-sm">Status</span>
                                
                            </div>
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-white font-semibold">120 KM</span>
                                <span className="text-[#fff] font-semibold">On Time</span>
                            </div>
                        </div>
                        {/* Status Steps */}
                        <div className="flex flex-col gap-4 mt-2">
                            {statusSteps.map((step, idx) => (
                                <div key={step.key} className="flex items-center gap-3">
                                    <span>
                                        {idx < currentStep ? (
                                            <CheckIcon />
                                        ) : idx === currentStep ? (
                                            <NearDestinationIcon />
                                        ) : (
                                            <span className="w-6 h-6 inline-block"></span>
                                        )}
                                    </span>
                                    <span className={`text-white ${idx === currentStep && 'font-semibold'}`}>
                                        {step.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Right: Map Placeholder */}
                    <div className="flex-1  overflow-hidden relative">
                        {/* Map Placeholder (replace with mapbox or embed as needed) */}
                        <div >
                            <iframe
                                title="Live Tracking Map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d88959.3373240372!2d-104.6189!3d50.4452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1717420839204!5m2!1sen!2sca"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-[589px] bg-[#F4F6FA] flex items-center justify-center rounded-r-2xl border border-[#E9E9E9]"
                            />            </div>
                        {/* Overlay: Route line and markers can be added here if integrating with a real map */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContainerRouteMap;
