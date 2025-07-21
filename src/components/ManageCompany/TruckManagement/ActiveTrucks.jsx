import React, { useState } from 'react';

const initialData = [
    { module: 'Company A' },
    { module: 'Company B' },
    { module: 'Company C' },
    { module: 'Company D' },
];

const OutlinedSelect = ({ label, options }) => {
    const [value, setValue] = useState('');

    return (
        <div className="relative mb-4 w-full">
            <label className="absolute -top-2 left-3 px-1 text-sm text-white z-10 bg-[#131060]">
                {label}
            </label>
            <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="w-full h-[64px] bg-transparent border border-[#858080] text-[#878787] rounded-lg px-3 pt-4 pb-2 text-base focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080] appearance-none"
            >
                <option value="" disabled className='placeholder:text-[#878787]'>Select Company</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt} className="text-[#878787]">
                        {opt}
                    </option>
                ))}
            </select>
        </div>
    );
};

const OutlinedInput = ({ label, type, placeholder }) => {
    const [value, setValue] = useState('');

    return (
        <div className="relative mb-4 w-full">
            <label className="absolute -top-2 left-3 px-1 text-sm text-white z-10 bg-[#131060]">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className="w-full h-[64px] bg-transparent border border-[#858080] rounded-lg px-3 pt-4 pb-2 text-base text-white focus:outline-none focus:border-[#f2f2f2] placeholder:text-[#858080]"
            />
        </div>
    );
};

const ActiveTrucksCount = () => {
    const [data] = useState(initialData);
    const [selectedModule, setSelectedModule] = useState('Company A');
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

    const truckData = Array(6).fill({
        id: '8521',
        model: 'Volvo FH16',
        year: '2020',
        license: 'ABC - 2022',
        company: 'Assign',
        status: 'Healthy',
    });

    return (
        <>
            <div className="flex justify-between mb-2">
                <p className="text-[#fff] text-[22px] font-semibold py-3">Active Trucks</p>
                <button
                    className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
                    onClick={openCreateRolePopup}
                >
                    Add Truck
                </button>
            </div>
        
            <div className="flex gap-3 items-center mb-6">
                <p className='text-[16px] font-medium text-white'>Assign selected truck to</p>
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

            {/* Truck Boxes Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
                {truckData.map((truck, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4"
                        style={{
                            width: '100%',
                            height: '304px',
                            borderRadius: '16px',
                            paddingTop: '24px',
                            paddingBottom: '24px',
                            border: '1px solid #989898',
                            background: '#0B0741',
                        }}
                    >
                        <div className="flex items-center justify-between px-6">
                            <div className="flex items-center gap-2">
                                <img
                                    src="/managecompany/truck.svg"
                                    alt="Truck Icon"
                                    className="w-6 h-6"
                                />
                                <span className="text-white text-[18px] font-semibold">
                                    Truck - {truck.id}
                                </span>
                            </div>
                            <label className="flex gap-2 items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    className="hidden"
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
                        </div>
                                    <div className="border border-[#989898] px-2"></div>
                        <div className="flex flex-col gap-3 px-6 py-4">
                            <div className="flex justify-between">
                                <span className="text-[#A3A3A3] text-[14px] font-medium">Model:</span>
                                <span className="text-white text-[14px] font-medium">{truck.model}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#A3A3A3] text-[14px] font-medium">Year:</span>
                                <span className="text-white text-[14px] font-medium">{truck.year}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#A3A3A3] text-[14px] font-medium">License:</span>
                                <span className="text-white text-[14px] font-medium">{truck.license}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-[#A3A3A3] text-[14px] font-medium">Company:</span>
                                <span className="text-white text-[14px] font-medium">{truck.company}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between px-6">
                            <span className="text-[#A3A3A3] text-[14px] font-medium">Status</span>
                            <button className="bg-[#16A34A] text-white text-[14px] font-medium rounded-full px-4 py-1">
                                {truck.status}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Create Role Popup */}
            {createRolePopup && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
                    <div
                        className="text-white p-6 rounded-lg relative flex flex-col gap-[10px]"
                        style={{
                            width: '594px',
                            height: '541px',
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
                        <h2 className="text-[22px] font-semibold mb-2">Add Truck</h2>
                         <OutlinedInput type="text" label="Truck Number" placeholder='Enter Truck Number' />
                        <OutlinedInput type="text" label="Year" placeholder='Enter Model Year' />
                        <OutlinedInput type="text" label="License" placeholder='Enter License Number' />
                        <OutlinedSelect label="Assign" options={[ "Select Company, 28 Drivers", "10 Trucks, 15 Drivers", "20 Trucks, 40 Drivers" ]}/>
                        <OutlinedSelect label="Truck Status" options={[ "Select Health of Truck", "10 Trucks, 15 Drivers", "20 Trucks, 40 Drivers" ]}/>
                    </div>
                </div>
            )}
        </>
    );
};

export default ActiveTrucksCount;