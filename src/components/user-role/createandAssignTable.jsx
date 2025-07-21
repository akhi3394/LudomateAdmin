import React, { useState } from 'react';

const data = [
    {
        roleName: 'Admin',
        description: 'Full Access',
        assignedUser: 'John Doe',
        permissionSummary: 'All Permissions',
        createdOn: '23/04/2025',
    },
    {
        roleName: 'Editor',
        description: 'Edit Content',
        assignedUser: 'Jane Smith',
        permissionSummary: 'Edit, Delete',
        createdOn: '23/04/2025',
    },
    {
        roleName: 'Viewer',
        description: 'View Only',
        assignedUser: 'Alex Brown',
        permissionSummary: 'View',
        createdOn: '23/04/2025',
    },
    {
        roleName: 'Moderator',
        description: 'Moderate Content',
        assignedUser: 'Emily Davis',
        permissionSummary: 'Moderate, Delete',
        createdOn: '23/04/2025',
    },
];

const CreateandAssignTable = () => {
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
            <div className="flex justify-between mb-2 p-2">
                <p className="text-[#fff] text-[22px] font-semibold py-3">Create & Assign Role</p>
                <button
                    className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
                    onClick={openCreateRolePopup}
                >
                    Create Role
                </button>
            </div>
            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                {console.log('Data in table:', data)}
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Role Name</th>
                            <th className="px-5">Description</th>
                            <th className="px-5">Assigned User</th>
                            <th className="px-5">Permission Summary</th>
                            <th className="px-5">Created On</th>
                            <th className="px-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ? (
                            data.map((role, index) => (
                                <tr
                                    key={index}
                                    className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
                                >
                                    <td className="px-5">{role.roleName}</td>
                                    <td className="px-5">{role.description}</td>
                                    <td className="px-5">{role.assignedUser}</td>
                                    <td className="px-5">{role.permissionSummary}</td>
                                    <td className="px-5">{role.createdOn}</td>
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
                                                    onClick={() => openEditPopup(role)}
                                                >
                                                    Edit
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
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-5 py-4 text-white text-center">
                                    No roles available
                                </td>
                            </tr>
                        )}
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
                                    <label key={perm} className="flex gap-2 items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name={perm}
                                            id={perm}
                                            className="hidden"
                                            checked={permissions[perm]}
                                            onChange={(e) => {
                                                handlePermissionChange(perm);
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
                                        <span
                                            className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
                                        >
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
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Action Permission</p>
                            <div className="flex flex-wrap gap-4">
                                {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
                                    <label key={perm} className="flex gap-2 items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name={perm}
                                            id={perm}
                                            className="hidden"
                                            checked={permissions[perm]}
                                            onChange={(e) => {
                                                handlePermissionChange(perm);
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
                                        <span
                                            className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
                                        >
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

            {/* Edit Role Popup */}
            {editPopup.open && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
                        style={{
                            width: '594px',
                            height: '490px',
                            background: '#131060',
                            border: '1px solid #FFFFFF',
                            borderRadius: '16px',
                            padding: '24px',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={closeEditPopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-[22px] font-semibold mb-4">Edit Role– {editPopup.role.roleName}</h2>
                        <div className="flex gap-2">
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1 block">Role Name</label>
                                <input
                                    type="text"
                                    value={roleName}
                                    onChange={(e) => setRoleName(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1">Role Description</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Module Access</p>
                            <div className="flex flex-wrap gap-4">
                                {['Shipment', 'Billing', 'Users', 'Company'].map((perm) => (
                                    <label key={perm} className="flex gap-2 items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name={perm}
                                            id={perm}
                                            className="hidden"
                                            checked={permissions[perm]}
                                            onChange={(e) => {
                                                handlePermissionChange(perm);
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
                                        <span
                                            className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
                                        >
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
                                        <span className="text-sm text-white">{perm}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-sm text-gray-400 mb-2">Action Permission</p>
                            <div className="flex flex-wrap gap-4">
                                {['Create', 'Edit', 'Delete', 'View', 'Moderate'].map((perm) => (
                                    <label key={perm} className="flex gap-2 items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name={perm}
                                            id={perm}
                                            className="hidden"
                                            checked={permissions[perm]}
                                            onChange={(e) => {
                                                handlePermissionChange(perm);
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
                                        <span
                                            className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative"
                                        >
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
                                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#34C759] transition-all"></div>
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-auto">
                            <button
                                className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
                                onClick={closeEditPopup}
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
                </div>
            )}
        </>
    );
};

export default CreateandAssignTable;