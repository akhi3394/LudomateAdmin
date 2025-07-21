import React, { useState } from 'react';

const data = [
    {
        id: '#894564',
        date: '05/04/2025',
        type: 'Delivery Delay',
        assignedTo: 'Management',
        status: 'Active',
        priority: 'Low',
    },
    {
        id: '#894564',
        date: '05/04/2025',
        type: 'GPS Failure',
        assignedTo: 'Management',
        status: 'Resolved',
        priority: 'Medium',
    },
    {
        id: '#894564',
        date: '05/04/2025',
        type: 'Delivery Delay',
        assignedTo: 'Finance',
        status: 'Resolved',
        priority: 'High',
    },
    {
        id: '#894564',
        date: '05/04/2025',
        type: 'GPS Failure',
        assignedTo: 'Management',
        status: 'In Progress',
        priority: 'Urgent',
    },
];

const statusStyle = {
    Active: 'bg-[#EC221F]',
    Resolved: 'bg-[#14AE5C]',
    'In Progress': 'bg-[#E8B931]',
};

const priorityStyle = {
    Low: 'bg-[#AFF4C6] text-black',
    Medium: 'bg-[#FFE8A3] text-black',
    High: 'bg-[#E8B931] text-black',
    Urgent: 'bg-[#EC221F]',
};

const ActiveTicketsTable = () => {
    const [showDropdown, setShowDropdown] = useState(null);
    const [popup, setPopup] = useState({ open: false, type: null });
    const [editStatus, setEditStatus] = useState('Open');
    const [editPriority, setEditPriority] = useState('Low');
    const [editAssignedTo, setEditAssignedTo] = useState('Management');
    const [editDescription, setEditDescription] = useState(
        "Driver reported: 'The truck broke down near Exit 14. I’m waiting for roadside assistance.' Dispatcher responded: 'Do you need help raising a maintenance request?' Driver confirmed: 'Yes please. This is the second time this week.'"
    );
    const [selectedFile, setSelectedFile] = useState(null);

    const handleActionClick = (index) => {
        setShowDropdown((prev) => (prev === index ? null : index));
    };

    const openPopup = (type) => {
        console.log('Opening popup with type:', type);
        setPopup({ open: true, type });
        setShowDropdown(null);
    };

    const closePopup = () => {
        console.log('Closing popup');
        setPopup({ open: false, type: null });
        // Reset edit form states
        setEditStatus('Open');
        setEditPriority('Low');
        setEditAssignedTo('Management');
        setEditDescription(
            "Driver reported: 'The truck broke down near Exit 14. I’m waiting for roadside assistance.' Dispatcher responded: 'Do you need help raising a maintenance request?' Driver confirmed: 'Yes please. This is the second time this week.'"
        );
        setSelectedFile(null);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleSaveChanges = () => {
        console.log('Saving changes:', {
            status: editStatus,
            priority: editPriority,
            assignedTo: editAssignedTo,
            description: editDescription,
            file: selectedFile,
        });
        closePopup();
    };

    return (
        <>
            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Ticket ID</th>
                            <th className="px-5">Created On</th>
                            <th className="px-5">Issue Type</th>
                            <th className="px-5">Assigned To</th>
                            <th className="px-5">Status</th>
                            <th className="px-5">Priority</th>
                            <th className="px-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((ticket, index) => (
                            <tr
                                key={index}
                                className={`bg-[#131060] text-white h-[90px] ${
                                    index !== data.length - 1 ? 'border-b border-[#fff]' : ''
                                }`}
                            >
                                <td className="px-5">{ticket.id}</td>
                                <td className="px-5">{ticket.date}</td>
                                <td className="px-5">{ticket.type}</td>
                                <td className="px-5">{ticket.assignedTo}</td>
                                <td className="px-5">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${statusStyle[ticket.status]}`}
                                    >
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="px-5">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${priorityStyle[ticket.priority]}`}
                                    >
                                        {ticket.priority}
                                    </span>
                                </td>
                                <td className="px-5 relative">
                                    <img
                                        src="/tableAction.svg"
                                        alt="Action"
                                        className="w-5 h-5 cursor-pointer"
                                        onClick={() => handleActionClick(index)}
                                    />
                                    {showDropdown === index && (
                                        <div className="absolute right-4 top-10 bg-[#0B0741] text-white border rounded-md z-50 w-24">
                                            <div
                                                className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
                                                onClick={() => openPopup('View')}
                                            >
                                                View
                                            </div>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-[#1A1850]"
                                                onClick={() => openPopup('Edit')}
                                            >
                                                Edit
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Popup */}
            {popup.open && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    {popup.type === 'View' ? (
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
                            <div className="flex justify-start gap-5 mb-4">
                                <div>
                                    <p className="text-sm text-gray-400 mb-2">Status</p>
                                    <span className="px-3 py-2 bg-[#E8B931] rounded-full text-sm text-black">
                                        In Progress
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-2">Priority</p>
                                    <span className="px-3 py-2 bg-[#FFE8A3] rounded-full text-sm text-black">
                                        Medium
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div>
                                    <p className="text-[#ACACAC] text-[16px]">Created By</p>
                                    <p className="text-lg text-[16px]">John Doe</p>
                                </div>
                                <div>
                                    <p className="text-[16px] text-gray-400 text-right">Assigned To</p>
                                    <p className="text-[16px] font-semibold">Maintenance Team</p>
                                </div>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div>
                                    <p className="text-[16px] text-[#ACACAC]">Created On</p>
                                    <p className="text-lg text-[16px]">23/04/2025</p>
                                </div>
                                <div>
                                    <p className="text-[16px] text-gray-400 text-right">Last Updated</p>
                                    <p className="text-[16px]">23/04/2025</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-[16px] text-gray-400">Chat Snippet</p>
                                <p className="text-[16px] font-medium">Truck broke near exit 14</p>
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
                    ) : (
                        <div
                            className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
                            style={{
                                width: '594px',
                                height: '715px',
                                background: 'var(--Box-BG, #131060)',
                                border: '1px solid #FFFFFF',
                                borderRadius: '16px',
                                padding: '24px',
                            }}
                        >
                            <button
                                className="absolute top-4 right-4 text-white text-xl"
                                onClick={closePopup}
                            >
                                <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                            </button>
                            <h2 className="text-[22px] font-semibold mb-4">Create Ticket #265489</h2>
                            <div className="flex justify-start  gap-4 mb-4">
                                <div className="flex-1 max-w-[250px]">
                                    <label className="text-sm text-gray-400 mb-1 block">Change Status</label>
                                    <select
                                        value={editStatus}
                                        onChange={(e) => setEditStatus(e.target.value)}
                                        className="w-full px-4 py-2 bg-[#7F7F7F] text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    >
                                        <option value="Open">Open</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Resolved">Resolved</option>
                                        <option value="Active">Active</option>
                                    </select>
                                </div>
                                <div className="flex-1 max-w-[250px]">
                                    <label className="text-sm text-gray-400 mb-1 block">Update Priority</label>
                                    <select
                                        value={editPriority}
                                        onChange={(e) => setEditPriority(e.target.value)}
                                        className="w-full px-4 py-2 bg-[#7F7F7F] text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    >
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                        <option value="Urgent">Urgent</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1 block">Reassign To</label>
                                <select
                                    value={editAssignedTo}
                                    onChange={(e) => setEditAssignedTo(e.target.value)}
                                    className="w-1/2 px-4 py-2 bg-[#0B0741] text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                >
                                    <option value="Management">Management</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Maintenance Team">Maintenance Team</option>
                                </select>
                            </div>
                            <div className="mb-2">
                                <label className="text-sm text-gray-400 mb-1 block">Edit Description</label>
                                <textarea
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                    className="w-full h-[120px] px-4 py-2 bg-[#0B0741] text-white border border-[#FFFFFF] rounded-lg focus:outline-none resize-none"
                                />
                            </div>
                            <div className="mb-2 flex-1 h-[182px]">
                                <label className="text-sm text-gray-400 mb-1 block">Upload Additional Attachment</label>
                                <div className="border border-dashed border-[#FFFFFF] rounded-lg p-6 flex flex-col items-center">
                                    <svg
                                        width="43"
                                        height="42"
                                        viewBox="0 0 43 42"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mb-4"
                                    >
                                        <path
                                            d="M16.25 31.0619C15.5325 31.0619 14.9375 30.4669 14.9375 29.7494V22.4169L13.6775 23.6769C13.17 24.1844 12.33 24.1844 11.8225 23.6769C11.315 23.1694 11.315 22.3294 11.8225 21.8219L15.3225 18.3219C15.69 17.9544 16.2675 17.8319 16.7575 18.0419C17.2475 18.2344 17.5625 18.7244 17.5625 19.2494V29.7494C17.5625 30.4669 16.9675 31.0619 16.25 31.0619Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M19.75 24.062C19.4175 24.062 19.085 23.9395 18.8225 23.677L15.3225 20.177C14.815 19.6695 14.815 18.8295 15.3225 18.322C15.83 17.8145 16.67 17.8145 17.1775 18.322L20.6775 21.822C21.185 22.3295 21.185 23.1695 20.6775 23.677C20.415 23.9395 20.0825 24.062 19.75 24.062Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M26.75 39.8125H16.25C6.7475 39.8125 2.6875 35.7525 2.6875 26.25V15.75C2.6875 6.2475 6.7475 2.1875 16.25 2.1875H25C25.7175 2.1875 26.3125 2.7825 26.3125 3.5C26.3125 4.2175 25.7175 4.8125 25 4.8125H16.25C8.1825 4.8125 5.3125 7.6825 5.3125 15.75V26.25C5.3125 34.3175 8.1825 37.1875 16.25 37.1875H26.75C34.8175 37.1875 37.6875 34.3175 37.6875 26.25V17.5C37.6875 16.7825 38.2825 16.1875 39 16.1875C39.7175 16.1875 40.3125 16.7825 40.3125 17.5V26.25C40.3125 35.7525 36.2525 39.8125 26.75 39.8125Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M39 18.8119H32C26.015 18.8119 23.6875 16.4844 23.6875 10.4994V3.49937C23.6875 2.97437 24.0025 2.48437 24.4925 2.29187C24.9825 2.08187 25.5425 2.20437 25.9275 2.57187L39.9275 16.5719C40.295 16.9394 40.4175 17.5169 40.2075 18.0069C39.9975 18.4969 39.525 18.8119 39 18.8119ZM26.3125 6.66687V10.4994C26.3125 15.0144 27.485 16.1869 32 16.1869H35.8325L26.3125 6.66687Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span className="text-gray-400 mb-4">Upload Proof Here</span>
                                    <label className="px-4 py-2 bg-[#6B46C1] text-white rounded-lg cursor-pointer">
                                        Select Photo
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </label>
                                </div>
                                {selectedFile && (
                                    <p className="mt-2 text-sm text-gray-400 text-center">
                                        Selected: {selectedFile.name}
                                    </p>
                                )}
                            </div>
                            <div className="flex justify-end gap-4 mt-5">
                                <button
                                    className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
                                    onClick={closePopup}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
                                    onClick={handleSaveChanges}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default ActiveTicketsTable;