import React, { useState, useEffect } from 'react';

// Placeholder for PermissionSection component
const PermissionSection = ({ title, permissions }) => {
    const [permissionState, setPermissionState] = useState(
        permissions
            ? permissions.reduce((acc, perm) => ({ ...acc, [perm]: false }), { All: false })
            : { All: false }
    );

    // Sync 'All' checkbox state when individual permissions change
    useEffect(() => {
        const allChecked = permissions
            ? permissions.every((perm) => permissionState[perm])
            : false;
        setPermissionState((prev) => ({ ...prev, All: allChecked }));
    }, [permissions, permissionState]);

    const handlePermissionChange = (perm) => {
        setPermissionState((prev) => ({
            ...prev,
            [perm]: !prev[perm],
        }));
        console.log(`Permission ${perm} for ${title} changed to ${!permissionState[perm]}`);
    };

    const handleAllChange = () => {
        const newAllState = !permissionState.All;
        const updatedPermissions = permissions
            ? permissions.reduce(
                  (acc, perm) => ({ ...acc, [perm]: newAllState }),
                  { All: newAllState }
              )
            : { All: newAllState };
        setPermissionState(updatedPermissions);
        console.log(`All permissions for ${title} set to ${newAllState}`);
    };

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-white">{title}</p>
                <label className="flex gap-2 items-center cursor-pointer">
                    <input
                        type="checkbox"
                        name={`${title}-All`}
                        id={`${title}-All`}
                        className="hidden"
                        checked={permissionState.All}
                        onChange={(e) => {
                            handleAllChange();
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
                    <span className="text-sm text-white">All</span>
                </label>
            </div>
            <div className="flex flex-wrap gap-4">
                {(permissions || []).map((perm) => (
                    <label key={perm} className="flex gap-2 items-center cursor-pointer">
                        <input
                            type="checkbox"
                            name={`${title}-${perm}`}
                            id={`${title}-${perm}`}
                            className="hidden"
                            checked={permissionState[perm] || false}
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
    );
};

// Placeholder for EditPermissionSection component
const EditPermissionSection = ({ title, permissions }) => {
    const [permissionState, setPermissionState] = useState(
        permissions
            ? permissions.reduce((acc, perm) => ({ ...acc, [perm]: false }), { All: false })
            : { All: false }
    );

    // Sync 'All' checkbox state when individual permissions change
    useEffect(() => {
        const allChecked = permissions
            ? permissions.every((perm) => permissionState[perm])
            : false;
        setPermissionState((prev) => ({ ...prev, All: allChecked }));
    }, [permissions, permissionState]);

    const handlePermissionChange = (perm) => {
        setPermissionState((prev) => ({
            ...prev,
            [perm]: !prev[perm],
        }));
        console.log(`Permission ${perm} for ${title} changed to ${!permissionState[perm]}`);
    };

    const handleAllChange = () => {
        const newAllState = !permissionState.All;
        const updatedPermissions = permissions
            ? permissions.reduce(
                  (acc, perm) => ({ ...acc, [perm]: newAllState }),
                  { All: newAllState }
              )
            : { All: newAllState };
        setPermissionState(updatedPermissions);
        console.log(`All permissions for ${title} set to ${newAllState}`);
    };

    return (
        <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-white">{title}</p>
                <label className="flex gap-2 items-center cursor-pointer">
                    <input
                        type="checkbox"
                        name={`${title}-All`}
                        id={`${title}-All`}
                        className="hidden"
                        checked={permissionState.All}
                        onChange={(e) => {
                            handleAllChange();
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
                    <span className="text-sm text-white">All</span>
                </label>
            </div>
            <div className="flex flex-wrap gap-4">
                {(permissions || []).map((perm) => (
                    <label key={perm} className="flex gap-2 items-center cursor-pointer">
                        <input
                            type="checkbox"
                            name={`${title}-${perm}`}
                            id={`${title}-${perm}`}
                            className="hidden"
                            checked={permissionState[perm] || false}
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
    );
};

const initialData = [
    {
        userName: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Admin',
        status: 'Active',
        createdOn: '23/04/2025',
    },
    {
        userName: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'Editor',
        status: 'Active',
        createdOn: '23/04/2025',
    },
    {
        userName: 'Alex Brown',
        email: 'alex.brown@example.com',
        role: 'Viewer',
        status: 'Suspended',
        createdOn: '23/04/2025',
    },
    {
        userName: 'Emily Davis',
        email: 'emily.davis@example.com',
        role: 'Moderator',
        status: 'Active',
        createdOn: '23/04/2025',
    },
];

const MultiAdmin1 = () => {
    const [data, setData] = useState(initialData);
    const [showTooltip, setShowTooltip] = useState(null);
    const [addUserPopup, setAddUserPopup] = useState(false);
    const [editUserPopup, setEditUserPopup] = useState({ open: false, user: null });
    const [newUser, setNewUser] = useState({
        userName: '',
        email: '',
        role: '',
        status: 'Active',
    });

    const handleTooltipClick = (index) => {
        setShowTooltip((prev) => (prev === index ? null : index));
    };

    const openAddUserPopup = () => {
        setAddUserPopup(true);
        setNewUser({ userName: '', email: '', role: '', status: 'Active' });
    };

    const closeAddUserPopup = () => {
        setAddUserPopup(false);
    };

    const handleAddUser = () => {
        setData([...data, { ...newUser, createdOn: '08/06/2025' }]);
        closeAddUserPopup();
    };

    const openEditUserPopup = (user, index) => {
        setEditUserPopup({ open: true, user });
        setNewUser(user);
        setShowTooltip(null);
    };

    const closeEditUserPopup = () => {
        setEditUserPopup({ open: false, user: null });
    };

    const handleEditUser = () => {
        setData((prevData) =>
            prevData.map((item) =>
                item.email === editUserPopup.user.email ? newUser : item
            )
        );
        closeEditUserPopup();
    };
    const permissionsList = ['View', 'Edit', 'Create', 'Delete', 'Export'];

    return (
        <div>
            <div className="flex justify-between mb-3">
                <p className="text-white font-bold text-[22px]">
                    Multi-Admin User Management
                </p>
                <button
                    className="bg-[#6F1AFF] text-white text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
                    onClick={openAddUserPopup}
                >
                    Add User
                </button>
            </div>
            <div className="overflow-auto rounded-xl shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[800px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">User Name</th>
                            <th className="px-5">Email</th>
                            <th className="px-5">Role</th>
                            <th className="px-5">Status</th>
                            <th className="px-5">Created On</th>
                            <th className="px-5">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user, index) => (
                            <tr
                                key={user.email}
                                className={`bg-[#131060] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''
                                    }`}
                            >
                                <td className="px-5">{user.userName}</td>
                                <td className="px-5">{user.email}</td>
                                <td className="px-5">{user.role}</td>
                                <td className="px-5">
                                    <span
                                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white ${user.status === 'Active'
                                            ? 'bg-[#14AE5C]'
                                            : user.status === 'Suspended'
                                                ? 'bg-[#EC221F]'
                                                : 'bg-gray-500'
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-5">{user.createdOn}</td>
                                <td className="px-5 relative">
                                    <img
                                        src="/tableAction.svg"
                                        alt="Action"
                                        className="w-5 h-5 cursor-pointer"
                                        onClick={() => handleTooltipClick(index)}
                                    />
                                    {showTooltip === index && (
                                        <div className="absolute right-4 top-10 bg-[#0B0741] text-white border rounded-md z-50 w-24">
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-[#1A1850]"
                                                onClick={() => openEditUserPopup(user, index)}
                                            >
                                                Edit
                                            </div>
                                            <div
                                                className="px-4 py-2 cursor-pointer hover:bg-[#1A1850]"
                                                onClick={() => setShowTooltip(false)}
                                            >
                                                Suspend
                                            </div>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Add User Popup */}
            {addUserPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
                        style={{
                            width: '594px',
                            height: 'auto',
                            maxHeight: '700px',
                            overflowY: 'auto',
                            background: '#131060',
                            border: '1px solid #FFFFFF',
                            borderRadius: '16px',
                            padding: '24px',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={closeAddUserPopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-[22px] font-semibold">Add User</h2>
                        <div className="flex gap-2">
                            <div className="mb-1">
                                <label className="text-[12px] text-white">User Name</label>
                                <input
                                    type="text"
                                    value={newUser.userName}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, userName: e.target.value })
                                    }
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    placeholder="Enter user name"
                                />
                            </div>
                            <div className="mb-1">
                                <label className="text-[12px] text-white ">Email Address</label>
                                <input
                                    type="email"
                                    value={newUser.email}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, email: e.target.value })
                                    }
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                    placeholder="Enter email"
                                />
                            </div>
                        </div>
                        <div className="mb-2">
                            <div className="flex justify-between mb-1">
                                <p className="text-[12px] font-normal">Assign user</p>
                                <p className="text-[12px] font-normal">Status</p>
                            </div>
                            <div className="flex justify-between">
                                <select
                                    value={newUser.role}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, role: e.target.value })
                                    }
                                    className="w-[263px] h-[48px] rounded-md bg-transparent text-[#9C9C9C] border border-[#FFFFFF] focus:outline-none px-4"
                                >
                                    <option value="">Select Role</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Editor">Editor</option>
                                    <option value="Viewer">Viewer</option>
                                    <option value="Moderator">Moderator</option>
                                </select>
                                <div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={newUser.status === 'Active'}
                                            onChange={(e) =>
                                                setNewUser({
                                                    ...newUser,
                                                    status: e.target.checked ? 'Active' : 'Inactive',
                                                })
                                            }
                                            className="sr-only peer"
                                        />
                                        <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-[#34C759] transition-all"></div>
                                        <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <h1 className='text-[22px] font-semibold mb-2'>Permissions</h1>
                        <PermissionSection title="Dashboard" permissions={permissionsList} />
                        <PermissionSection title="Shipment" permissions={permissionsList} />
                        <PermissionSection title="Driver Management" permissions={permissionsList} />
                        <PermissionSection title="Invoice & Payment" permissions={permissionsList} />
                        <PermissionSection title="Notification Setting" permissions={permissionsList} />
                        <PermissionSection title="Reports & Analytics" permissions={permissionsList} />

                        <div className="flex justify-end gap-4 mt-auto">
                            <button
                                className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
                                onClick={closeAddUserPopup}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
                                onClick={handleAddUser}
                            >
                                Add User
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit User Popup */}
            {editUserPopup.open && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
                        style={{
                            width: '594px',
                            height: 'auto',
                            maxHeight: '700px',
                            overflowY: 'auto',
                            background: '#131060',
                            border: '1px solid #FFFFFF',
                            borderRadius: '16px',
                            padding: '24px',
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={closeEditUserPopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-[22px] font-semibold">
                            Edit User - {editUserPopup.user.userName}
                        </h2>
                        <div className="flex gap-2">
                            <div className="">
                                <label className="text-sm text-gray-400 mb-1 block">User Name</label>
                                <input
                                    type="text"
                                    value={newUser.userName}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, userName: e.target.value })
                                    }
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm text-gray-400 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    value={newUser.email}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, email: e.target.value })
                                    }
                                    className="w-[263px] h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                />
                            </div>
                        </div>

                        <h1 className='text-[22px] font-semibold mb-2'>Permissions</h1>
                        <EditPermissionSection title="Dashboard" permissions={permissionsList} />
                        <EditPermissionSection title="Shipment" permissions={permissionsList} />
                        <EditPermissionSection title="Driver Management" permissions={permissionsList} />
                        <EditPermissionSection title="Invoice & Payment" permissions={permissionsList} />
                        <EditPermissionSection title="Notification Setting" permissions={permissionsList} />
                        <EditPermissionSection title="Reports & Analytics" permissions={permissionsList} />

                        <div className="flex justify-end gap-4 mt-auto">
                            <button
                                className="px-6 py-2 bg-[#EC221F] text-white rounded-lg"
                                onClick={closeEditUserPopup}
                            >
                                Cancel
                            </button>
                            <button
                                className="px-6 py-2 bg-[#6F1AFF] text-white rounded-lg"
                                onClick={handleEditUser}
                            >
                                Edit Role
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiAdmin1;