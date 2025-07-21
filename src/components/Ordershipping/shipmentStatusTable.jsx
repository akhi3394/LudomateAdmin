import React, { useState } from 'react';

const data = [
    {
        roleName: '#SIP-89456',
        description: 'In transit',
        assignedUser: 'Apr 05, 2025 10:45 AM',
        permissionSummary: 'N/A',
        createdOn: 'Delay',
        Amount: 'Heavy Rain',
    },
    {
        roleName: '#SIP-89456',
        description: 'In transit',
        assignedUser: 'Apr 05, 2025 10:45 AM',
        permissionSummary: 'N/A',
        createdOn: 'Delay',
        Amount: 'Heavy Rain',
    },
    {
        roleName: '#SIP-89456',
        description: 'Delivered',
        assignedUser: 'Apr 05, 2025 10:45 AM',
        permissionSummary: 'N/A',
        createdOn: 'Delay',
        Amount: 'Heavy Rain',
    },
    {
        roleName: '#SIP-89456',
        description: 'Cancelled',
        assignedUser: 'Apr 05, 2025 10:45 AM',
        permissionSummary: 'N/A',
        createdOn: 'Delay',
        Amount: 'Heavy Rain',
    },
    {
        roleName: '#SIP-89456',
        description: 'In transit',
        assignedUser: 'Apr 05, 2025 10:45 AM',
        permissionSummary: 'N/A',
        createdOn: 'Delay',
        Amount: 'Heavy Rain',
    },
];

const ShipmentStatus = () => {
    const [createRolePopup, setCreateRolePopup] = useState(false);
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



    const openCreateRolePopup = () => {
        console.log('Opening Create Role popup');
        setCreateRolePopup(true);
        // Reset form states
        setRoleName('');
        setDescription('');
        setPermissions({
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
    };

    const closeCreateRolePopup = () => {
        console.log('Closing Create Role popup');
        setCreateRolePopup(false);
    };

    const handleCreateRole = () => {
        console.log('Creating role:', {
            roleName,
            description,
            permissions,
        });
        closeCreateRolePopup();
    };



    const handlePermissionChange = (perm) => {
        setPermissions((prev) => ({
            ...prev,
            [perm]: !prev[perm],
        }));
    };

    return (
        <>
            <div className="flex justify-between mb-2">
                <p className="text-[#fff] text-[22px] font-semibold py-3">Shipment Status Updates & Alerts</p>

            </div>
            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Shipment ID</th>
                            <th className="px-5">Status</th>
                            <th className="px-5">Last Updated</th>
                            <th className="px-5">ETA</th>
                            <th className="px-5">Alert type</th>
                            <th className="px-5">Alert Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((role, index) => (
                            <tr
                                key={index}
                                className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
                            >
                                <td className="px-5">{role.roleName}</td>
                                <td className="px-5">
                                    <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[90px] h-[40px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.createdOn === 'Active' ? 'bg-[#14AE5C]' :
                                        role.description === 'In transit' ? 'bg-[#E8B931]' :
                                            role.description === 'Delivered' ? 'bg-[#14AE5C]' : 'bg-[#EC221F]'}`}>
                                        {role.description}
                                    </span>
                                </td>
                                <td className="px-5">{role.assignedUser}</td>
                                <td className="px-5">{role.permissionSummary}</td>
                                <td className="px-5">{role.createdOn}</td>

                                <td className="px-5">{role.Amount}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Create Role Popup */}
            {createRolePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
                        style={{
                            width: '594px',
                            height: '490px',
                            background: '#080625',
                            border: '1px solid #FFFFFF',
                            borderRadius: '16px',
                            padding: '24px',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={closeCreateRolePopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-[22px] font-semibold mb-4">Create Role</h2>
                        <div className="flex gap-2">
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
                                <input
                                    type="text"
                                    value={roleName}
                                    onChange={(e) => setRoleName(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    placeholder="Enter role name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1">Role Description</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    placeholder="Enter short description"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Module Access</p>
                            <div className="flex flex-wrap gap-4">
                                {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
                                    <label key={perm} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={permissions[perm]}
                                            onChange={() => handlePermissionChange(perm)}
                                            className="w-4 h-4 bg-transparent border border-[#FFFFFF] rounded focus:outline-none"
                                        />
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Action Permission</p>
                            <div className="flex flex-wrap gap-4">
                                {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
                                    <label key={perm} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={permissions[perm]}
                                            onChange={() => handlePermissionChange(perm)}
                                            className="w-4 h-4 bg-[#0B0741] border border-[#FFFFFF] rounded focus:outline-none"
                                        />
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between mb-1">
                                <p className="text-[12px] font-normal">Assign User</p>
                                <p className="text-[12px] font-normal">Status</p>
                            </div>
                            <div className="flex justify-between">
                                <select
                                    name=""
                                    id=""
                                    className="w-[263px] h-[48px] rounded-md bg-transparent border border-white"
                                    placeholder="Select"
                                >
                                    <option value="">Select</option>
                                </select>
                                <div className="">
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-auto">
                            <button
                                className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
                                onClick={closeCreateRolePopup}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
                                onClick={handleCreateRole}
                            >
                                Create Role
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default ShipmentStatus;