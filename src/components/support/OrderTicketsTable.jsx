import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const orderData = [
    {
        orderId: '#456987',
        date: '23/04/2025',
        type: 'Truck Failure',
        assignedTo: 'Maintenance Team',
        status: 'In Progress',
    },
    {
        orderId: '#456988',
        date: '23/04/2025',
        type: 'Delivery Delay',
        assignedTo: 'Management',
        status: 'Active',
    },
    {
        orderId: '#456989',
        date: '23/04/2025',
        type: 'GPS Failure',
        assignedTo: 'Finance',
        status: 'Resolved',
    },
    {
        orderId: '#456990',
        date: '23/04/2025',
        type: 'Truck Failure',
        assignedTo: 'Maintenance Team',
        status: 'Active',
    },
];

const statusStyle = {
    Active: 'bg-[#EC221F]',
    Resolved: 'bg-[#14AE5C]',
    'In Progress': 'bg-[#E8B931]',
};

const OrderTicketsTable = () => {
    const [popupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        console.log('Opening popup');
        setPopupOpen(true);
    };

    const closePopup = () => {
        console.log('Closing popup');
        setPopupOpen(false);
    };

    return (
        <>
            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Order ID</th>
                            <th className="px-5">Created On</th>
                            <th className="px-5">Issue Type</th>
                            <th className="px-5">Assigned To</th>
                            <th className="px-5">Status</th>
                            <th className="px-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.map((order, index) => (
                            <tr
                                key={index}
                                className={`bg-[#131060] text-white h-[90px] ${index !== orderData.length - 1 ? 'border-b border-[#fff]' : ''
                                    }`}
                            >
                                <td className="px-5">{order.orderId}</td>
                                <td className="px-5">{order.date}</td>
                                <td className="px-5">{order.type}</td>
                                <td className="px-5">{order.assignedTo}</td>
                                <td className="px-5">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${statusStyle[order.status]}`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="px-5">
                                    <div className="flex gap-2 items-center" onClick={openPopup}>
                                        <img
                                            src="/eyeIcon.svg"
                                            alt="View"
                                            className="w-5 h-5 cursor-pointer"
                                        />
                                        <Link className="underline">View</Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Popup */}
            {popupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white p-6 rounded-lg relative"
                        style={{
                            width: '594px',
                            height: '559px',
                            background: 'var(--Box-BG, #131060)',
                            border: '1px solid #FFFFFF',
                            borderRadius: '16px',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={closePopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-[22px] font-semibold mb-4">ID– #456987</h2>
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="text-sm text-gray-400">Filter By</p>
                                <p className="text-[16px]">Driver-John Smith</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 text-right">Against</p>
                                <p className="text-[16px] font-medium">Dispacther-John Smith</p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <div>
                                <p className="text-sm text-gray-400 mb-2">Date</p>
                                <p className="text-[16px]">23/04/2025</p>
                            </div>

                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Complaint</p>
                            <p className="text-[16px] font-medium">The dispatcher changed the delivery route last minute without prior
                                notice. This led to delays and I was penalized. There was no
                                clarification or communication from the dispatcher’s side.</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 mb-2">Evidence</p>
                            <div className="flex space-x-4">
                                <img
                                    src="/dummydocu.svg"
                                    alt="Evidence 1"
                                    className="w-full h-32 rounded-lg object-cover"
                                />
                                <img
                                    src="/dummydocu.svg"
                                    alt="Evidence 2"
                                    className="w-full h-32 rounded-lg object-cover"
                                />
                                <img
                                    src="/dummydocu.svg"
                                    alt="Evidence 3"
                                    className="w-full h-32 rounded-lg object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default OrderTicketsTable;