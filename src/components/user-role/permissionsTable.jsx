import React, { useState } from 'react';

const initialData = [
    {
        module: 'Dashboard',
        permissions: {
            View: true,
            Create: true,
            Edit: true,
            Delete: true,
            Export: true,
            SpecialAccess: true,
        },
    },
    {
        module: 'Shipment',
        permissions: {
            View: true,
            Create: false,
            Edit: true,
            Delete: true,
            Export: false,
            SpecialAccess: false,
        },
    },
    {
        module: 'Driver Management',
        permissions: {
            View: true,
            Create: false,
            Edit: false,
            Delete: false,
            Export: true,
            SpecialAccess: false,
        },
    },
    {
        module: 'Invoices & Payment',
        permissions: {
            View: true,
            Create: false,
            Edit: false,
            Delete: false,
            Export: false,
            SpecialAccess: true,
        },
    },
    {
        module: 'Notification Setting',
        permissions: {
            View: true,
            Create: false,
            Edit: false,
            Delete: false,
            Export: false,
            SpecialAccess: true,
        },
    },
    {
        module: 'Reports & Analytics',
        permissions: {
            View: true,
            Create: false,
            Edit: false,
            Delete: false,
            Export: false,
            SpecialAccess: true,
        },
    },
    {
        module: 'Settings',
        permissions: {
            View: true,
            Create: false,
            Edit: false,
            Delete: false,
            Export: false,
            SpecialAccess: true,
        },
    },
];

const PermissionsTable = () => {
    const [data, setData] = useState(initialData);
    const [selectedModule, setSelectedModule] = useState('All Modules');

    const handlePermissionChange = (module, perm) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.module === module
                    ? {
                        ...item,
                        permissions: {
                            ...item.permissions,
                            [perm]: !item.permissions[perm],
                        },
                    }
                    : item
            )
        );
    };

    const filteredData =
        selectedModule === 'All Modules'
            ? data
            : data.filter((item) => item.module === selectedModule);

    return (
        <div>
            <div className="flex justify-between mb-3">
                <p className="text-white font-bold text-[22px]">
                    Permission & Access Levels
                </p>
            </div>
            <div className="flex gap-3 items-center mb-4">
                <p className='text-[16px] font-medium'>Set permission for</p>
                <select
                    value={selectedModule}
                    onChange={(e) => setSelectedModule(e.target.value)}
                    className="w-[200px] h-[56px] px-3 py-2 bg-[#fff] text-[#000] border border-[#FFFFFF] rounded-lg focus:outline-none"
                >
                    <option value="All Modules">All Modules</option>
                    {data.map((item) => (
                        <option key={item.module} value={item.module}>
                            {item.module}
                        </option>
                    ))}
                </select>
            </div>
            <div className="overflow-auto rounded-xl shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[800px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Module/Feature</th>
                            <th className="px-5">View</th>
                            <th className="px-5">Create</th>
                            <th className="px-5">Edit</th>
                            <th className="px-5">Delete</th>
                            <th className="px-5">Export</th>
                            <th className="px-5">Special Access</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr
                                key={item.module}
                                className={`bg-[#070539] text-white h-[90px] ${index !== filteredData.length - 1
                                        ? 'border-b border-[#fff]'
                                        : ''
                                    }`}
                            >
                                <td className="px-5">{item.module}</td>
                                {['View', 'Create', 'Edit', 'Delete', 'Export'].map((perm) => (
                                    <td key={perm} className="px-5 text-start">
                                        <label className="flex gap-2 items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name={`${item.module}-${perm}`}
                                                id={`${item.module}-${perm}`}
                                                className="hidden"
                                                checked={item.permissions[perm]}
                                                onChange={(e) => {
                                                    handlePermissionChange(item.module, perm);
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
                                        </label>
                                    </td>
                                ))}
                                <td className="px-5 text-start h-full">
                                    {item.permissions.SpecialAccess ? 'Yes' : 'No'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PermissionsTable;