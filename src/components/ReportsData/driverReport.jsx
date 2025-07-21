import React, { useState } from 'react';

const data = [
    {
        roleName: 'John Smith',
        description: 'Speeding Violation',
        assignedUser: '24/04/2025',
        permissionSummary: 'Medium',
        status: 'Open',
        reportedBy: 'Fleet Manager',
        createdOn: 'Open',
    },
    {
        roleName: 'John Smith',
        description: 'Speeding Violation',
        assignedUser: '24/04/2025',
        permissionSummary: 'Low',
        status: 'Resolved',
        reportedBy: 'Fleet Manager',
        createdOn: 'Resolved',
    },
    {
        roleName: 'John Smith',
        description: 'Speeding Violation',
        assignedUser: '24/04/2025',
        permissionSummary: 'Medium',
        status: 'Open',
        reportedBy: 'Fleet Manager',
        createdOn: 'Open',
    },
    {
        roleName: 'John Smith',
        description: 'Speeding Violation',
        assignedUser: '24/04/2025',
        permissionSummary: 'Low',
        status: 'Resolved',
        reportedBy: 'Fleet Manager',
        createdOn: 'Resolved',
    },
    {
        roleName: 'John Smith',
        description: 'Speeding Violation',
        assignedUser: '24/04/2025',
        permissionSummary: 'Medium',
        status: 'Open',
        reportedBy: 'Fleet Manager',
        createdOn: 'Open',
    },
];

const DriverReport = () => {
    const [showDropdown, setShowDropdown] = useState(null);
    const [createRolePopup, setCreateRolePopup] = useState(false);
    const [editPopup, setEditPopup] = useState({ open: false, role: null });
    const [enabled, setEnabled] = useState(false);
    const [roleName, setRoleName] = useState('');
    const [description, setDescription] = useState('');
    const [permissions, setPermissions] = useState({
        Shipment: false,
        Billing: false,
        Users: false,
        Company: false,
        Create: false,
        Edit: false,
        Delete: false,
        View: false,
        Moderate: false,
    });

    const handleActionClick = (index) => {
        setShowDropdown((prev) => (prev === index ? null : index));
    };

    const openEditPopup = (role) => {
        console.log('Opening Edit popup for role:', role.roleName);
        setEditPopup({ open: true, role });
        setRoleName(role.roleName);
        setDescription(role.description);
        // Parse permissionSummary to set checkboxes for Action Permission
        const perms = role.permissionSummary.split(', ').reduce((acc, perm) => {
            acc[perm] = true;
            return acc;
        }, {
            Shipment: false,
            Billing: false,
            Users: false,
            Company: false,
            Create: false,
            Edit: false,
            Delete: false,
            View: false,
            Moderate: false,
        });
        if (role.permissionSummary === 'All Permissions') {
            perms.Create = true;
            perms.Edit = true;
            perms.Delete = true;
            perms.View = true;
            perms.Moderate = true;
        }
        setPermissions(perms);
        setShowDropdown(null);
    };

    const closeEditPopup = () => {
        console.log('Closing Edit popup');
        setEditPopup({ open: false, role: null });
    };

    const handleSaveChanges = () => {
        console.log('Saving changes for role:', {
            roleName,
            description,
            permissions,
        });
        closeEditPopup();
    };

    const handleDelete = (roleName) => {
        console.log('Deleting role:', roleName);
        setShowDropdown(null);
    };

    const handlePermissionChange = (perm) => {
        setPermissions((prev) => ({
            ...prev,
            [perm]: !prev[perm],
        }));
    };

    return (
        <>
            <div className="mb-2">
                <p className="text-[#fff] text-[22px] font-semibold py-3">Driver Incident & Compliance Report</p>
            </div>
            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Driver Name</th>
                            <th className="px-5">Incident Type</th>
                            <th className="px-5">Date</th>
                            <th className="px-5">Severity</th>
                            <th className="px-5">Status</th>
                            <th className="px-5">Reported By</th>
                            <th className="px-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((role, index) => (
                            <tr
                                key={index}
                                className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
                            >
                                <td className="px-5">{role.roleName}</td>
                                <td className="px-5">{role.description}</td>
                                <td className="px-5">{role.assignedUser}</td>
                                <td className="px-5">
                                    <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[72px] h-[32px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.createdOn === 'Active' ? 'bg-[#14AE5C]' :
                                        role.permissionSummary === 'Medium' ? 'bg-[#E8B931]' :
                                            role.permissionSummary === 'Low' ? 'bg-[#14AE5C]' : 'bg-[#EC221F]'}`}>
                                        {role.permissionSummary}
                                    </span>
                                </td>
                                <td className="px-5 ">
                                    <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[72px] h-[32px] gap-[10px] rounded-[24px] pt-[8px] pr-[14px] pb-[8px] pl-[14px] ${role.createdOn === 'Active' ? 'bg-[#14AE5C]' :
                                        role.status === 'Open' ? 'bg-[#E8B931]' :
                                            role.status === 'Resolved' ? 'bg-[#14AE5C]' : ''}`}>{role.status}</span>
                                </td>
                                <td className="px-5">{role.reportedBy}</td>
                                <td className="px-5 relative">
                                    <img
                                        src="/tableAction.svg"
                                        alt="Action"
                                        className="w-5 h-5 cursor-pointer"
                                        onClick={() => handleActionClick(index)}
                                    />
                                    {showDropdown === index && (
                                        <div className="absolute right-20 top-18 bg-[#0B0741] text-white border rounded-tl-[12px] rounded-tr-[4px] rounded-br-[12px] rounded-bl-[12px] z-50 w-[120px]">
                                            <div
                                                className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
                                                onClick={() => openEditPopup(role)}
                                            >
                                                View
                                            </div>
                                            <div
                                                className="px-4 py-2 cursor-pointer border-b hover:bg-[#1A1850]"
                                                onClick={() => handleDelete(role.roleName)}
                                            >
                                                Resolve
                                            </div>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-[#1A1850]"
                                                onClick={() => handleDelete(role.roleName)}
                                            >
                                                Reject
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            {/* Edit Role Popup */}
            {editPopup.open && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white p-6 rounded-lg relative overflow-y-auto custom-scrollbar"
                        style={{
                            width: '594px',
                            maxHeight: '90vh', // ensures responsiveness on smaller screens
                            background: 'var(--Box-BG, #131060)',
                            border: '1px solid #FFFFFF',
                            borderRadius: '16px',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={closeEditPopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-[22px] font-semibold mb-2">Report</h2>
                        <h2 className="text-[16px] font-normal mb-4">Driver Information</h2>

                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="text-sm text-gray-400">Driver Name</p>
                                <p className="text-[16px]">D-#27367</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 text-right">Driver ID</p>
                                <p className="text-[16px] font-medium">#SIP-63</p>
                            </div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="text-sm text-gray-400">Assigned Truck</p>
                                <p className="text-[16px]">Company A</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 text-right">Company</p>
                                <p className="text-[16px] font-medium">Apr 20,2025,10:25 PM</p>
                            </div>
                        </div>
                        <h2 className="text-[16px] font-normal mb-4">Incident Details</h2>
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="text-sm text-gray-400">Incident Type</p>
                                <p className="text-[16px]">Speeding Violation</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 text-right">Date & Time</p>
                                <p className="text-[16px] font-medium">24/04/2025</p>
                            </div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="text-[16px]">Highway I-95</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 text-right">Reported By</p>
                                <p className="text-[16px] font-medium">Fleet Manager</p>
                            </div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="text-sm text-gray-400">Severity</p>
                                <p className="text-[16px]">Medium</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 text-right">Status</p>
                                <p className="text-[16px] font-medium">Open</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Description of issue</p>
                            <p className="text-[16px] font-medium">Shipment was delivered 2 hours late.</p>
                        </div>
                        <div className='mb-8'>
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
                        <div className="flex justify-end gap-5">
                            <button className='text-[22px] bg-[#EC221F] text-white px-4 py-2 rounded-xl'>
                                Reject
                            </button>
                            <button className='text-[22px] bg-[#6F1AFF] rounded-xl text-white px-4 py-2'>Approve</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DriverReport;