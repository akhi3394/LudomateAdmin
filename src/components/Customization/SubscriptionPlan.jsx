import React, { useState } from 'react';

const data = [
    {
        roleName: 'Basic Plan',
        description: '$49',
        assignedUser: '3 Core Feature',
        permissionSummary: '10 Users',
        createdOn: 'Active',
    },
    {
        roleName: 'Pro Plan',
        description: '$49',
        assignedUser: '3 Core Feature',
        permissionSummary: '10 Users',
        createdOn: 'Active',
    },
    {
        roleName: 'Premium Plan',
        description: '$49',
        assignedUser: '3 Core Feature',
        permissionSummary: '10 Users',
        createdOn: 'Active',
    },
];

const features = [
    "Add/Remove Dispatch Companies",
    "View Analytics",
    "Driver Compliance Report",
    "Download Report",
    "Shipment Tracking",
    "Live GPS Integration",
    "Maintenance Log Access",
    "Automated Billing & Invoicing",
];

const SubscriptionPlan = () => {
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
                <p className="text-[#fff] text-[22px] font-semibold py-3">Subscription Plan Customization</p>
            </div>
            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Plan Name</th>
                            <th className="px-5">Price/Month</th>
                            <th className="px-5">Features Included</th>
                            <th className="px-5">Max Users</th>
                            <th className="px-5">Status</th>
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
                                <td className="px-5">{role.permissionSummary}</td>
                                <td className="px-5 ">
                                    <span className='bg-[#14AE5C] py-3 rounded-[24px] px-3 text-[#F5F5F5] font-medium'>{role.createdOn}</span>
                                </td>
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
                                                className="px-4 py-2 border-b cursor-pointer hover:bg-[#1A1850]"
                                                onClick={() => openEditPopup(role)}
                                            >
                                                Customize
                                            </div>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-[#1A1850]"
                                                onClick={() => handleDelete(role.roleName)}
                                            >
                                                Delete
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
                        className="text-white p-6 rounded-2xl relative flex flex-col gap-4"
                        style={{
                            width: '594px',
                            background: '#131060',
                            border: '1px solid #FFFFFF',
                            padding: '24px',
                        }}
                    >
                        <button className="absolute top-4 right-4" onClick={closeEditPopup}>
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>

                        <h2 className="text-[22px] font-semibold">Basic Plan</h2>

                        {/* Basic Details */}
                        <div>
                            <h3 className="font-semibold text-[14px] mb-2">Basic Details</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm">Plan Name</label>
                                    <input
                                        className="bg-transparent border border-white rounded-lg px-3 py-2 text-sm"
                                        placeholder="Plan Name"
                                        value="Basic"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-sm">Monthly Price</label>
                                    <input
                                        className="bg-transparent border border-white rounded-lg px-3 py-2 text-sm"
                                        placeholder="Monthly Price"
                                        value="$49"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-sm">Billing Type</label>
                                    <select className="bg-transparent border border-white rounded-lg px-3 py-2 text-sm">
                                        <option>Monthly</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-sm">Status</label>
                                    <select className="bg-transparent border border-white rounded-lg px-3 py-2 text-sm">
                                        <option>Active</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="font-semibold text-[14px] mb-2">Features</h3>
                            <div className="grid grid-cols-2 gap-y-2 gap-x-4 relative">
                                {features.map((label, idx) => (
                                    <label key={idx} className="flex gap-2 items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            defaultChecked={true}
                                            onChange={(e) => {
                                                const outerSpan = e.target.nextSibling;
                                                const innerSpan = outerSpan.querySelector('span');
                                                if (e.target.checked) {
                                                    outerSpan.classList.remove('bg-opacity-30');
                                                    outerSpan.classList.add('bg-opacity-100');
                                                    innerSpan.classList.add('opacity-100');
                                                } else {
                                                    outerSpan.classList.remove('bg-opacity-100');
                                                    outerSpan.classList.add('bg-opacity-30');
                                                    innerSpan.classList.remove('opacity-100');
                                                }
                                            }}
                                        />
                                        <span className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative">
                                            <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
                                                <svg
                                                    className="w-full h-full text-white"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </span>
                                        </span>
                                        <span className="text-white text-sm">{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Limitation */}
                        <div>
                            <h3 className="font-semibold text-[14px] mb-2">Limitation</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm">Max Companies Allowed</label>
                                    <input
                                        className="bg-transparent border border-white rounded-lg px-3 py-2 text-sm"
                                        placeholder="Max Companies Allowed"
                                        value="4"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-sm">Max Driver per Company</label>
                                    <input
                                        className="bg-transparent border border-white rounded-lg px-3 py-2 text-sm"
                                        placeholder="Max Driver per Company"
                                        value="10"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-4 mt-4">
                            <button className="px-6 py-2 bg-[#EC221F] text-white rounded-lg">Delete Plan</button>
                            <button className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg">Save Plan</button>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};

export default SubscriptionPlan;