import React, { useState } from 'react';

const data = [
    {
        roleName: '#INV-852164',
        description: 'Bluedart Logistics',
        assignedUser: '10/04/2025',
        permissionSummary: '15/04/2025',
        createdOn: 'Pending',
        Amount: '$2134',
    },
    {
        roleName: '#INV-852164',
        description: 'Bluedart Logistics',
        assignedUser: '10/04/2025',
        permissionSummary: '15/04/2025',
        createdOn: 'Pending',
        Amount: '$2134',
    },
    {
        roleName: '#INV-852164',
        description: 'Bluedart Logistics',
        assignedUser: '10/04/2025',
        permissionSummary: '15/04/2025',
        createdOn: 'Overdue',
        Amount: '$2134',
    },
    {
        roleName: '#INV-852164',
        description: 'Bluedart Logistics',
        assignedUser: '10/04/2025',
        permissionSummary: '15/04/2025',
        createdOn: 'Pending',
        Amount: '$2134',
    },
    {
        roleName: '#INV-852164',
        description: 'Bluedart Logistics',
        assignedUser: '10/04/2025',
        permissionSummary: '15/04/2025',
        createdOn: 'Paid',
        Amount: '$2134',
    },
];

const OutlinedInput = ({ label, type, placeholder }) => {
    const [value, setValue] = useState('');

    return (
        <div className="relative mb-6 w-full">
            <label className="absolute -top-2 left-3 px-1 text-sm text-white z-10 bg-[#131060]">
                {label}
            </label>

            <div className="relative">
                <input
                    type={type}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                    className={`w-full h-[64px] bg-transparent border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-white focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080] ${
                        type === 'date' ? 'pr-12' : ''
                    }`}
                />

                {/* Custom calendar icon for date input */}
                {type === 'date' && (
                    <img
                        src="/dateIcons.svg"
                        alt="Calendar Icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 pointer-events-none"
                    />
                )}
            </div>
        </div>
    );
};

const Invoices = () => {
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
            <div className="flex justify-between mb-2 p-2">
                <p className="text-[#fff] text-[22px] font-semibold py-3">Invoices</p>
                <button
                    className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
                    onClick={openCreateRolePopup}
                >
                    Generate Invoice
                </button>
            </div>
            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Invoice</th>
                            <th className="px-5">Company</th>
                            <th className="px-5">Issue Date</th>
                            <th className="px-5">Due Date</th>
                            <th className="px-5">Status</th>
                            <th className="px-5">Amount</th>
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
                                <td className="px-5">
                                    <span className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[72px] h-[32px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.createdOn === 'Active' ? 'bg-[#14AE5C]' :
                                        role.createdOn === 'Pending' ? 'bg-[#E8B931]' :
                                            role.createdOn === 'Paid' ? 'bg-[#14AE5C]' : 'bg-[#EC221F]'}`}>
                                        {role.createdOn}
                                    </span>
                                </td>
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
                            height: '625px',
                            background: '#131060',
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
                        <h2 className="text-[22px] font-semibold mb-2">Create Invoice</h2>
                        <OutlinedInput type="text" label="Company" placeholder='Enter Company Name' />
                        <OutlinedInput type="text" label="Invoice No." placeholder='#INV-0283' />
                        <OutlinedInput type="date" label="Due Date" placeholder='Trucks,Drivers' />
                        <OutlinedInput type="date" label="Due Date" placeholder='Trucks,Drivers' />
                        <OutlinedInput type="text" label="Amount." placeholder='Enter Total Amount' />

                        <div className="flex justify-end mb-2">
                            <button className='text-[22px] bg-[#6F1AFF] px-4 py-2 rounded-xl'>Generate</button>
                        </div>

                    </div>
                </div>
            )}

        </>
    );
};

export default Invoices;