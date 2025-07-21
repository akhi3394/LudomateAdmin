import React, { useState } from 'react';

const data = [
    {
        roleName: 'Bluedart Logistics',
        description: 'Bluedart Dispatch Portal',
        assignedUser: 'View',
        permissionSummary: '#1D4ED8',
        createdOn: 'Active',
        subdomain: 'Bluedart.yourapp.com',
        LastUpdated: "23/04/2025"
    },
    {
        roleName: 'Bluedart Logistics',
        description: 'Bluedart Dispatch Portal',
        assignedUser: 'View',
        permissionSummary: '#1D4ED8',
        createdOn: 'Pending',
        subdomain: 'Bluedart.yourapp.com',
        LastUpdated: "23/04/2025"
    },
    {
        roleName: 'Bluedart Logistics',
        description: 'Bluedart Dispatch Portal',
        assignedUser: 'View',
        permissionSummary: '#1D4ED8',
        createdOn: 'Disable',
        subdomain: 'Bluedart.yourapp.com',
        LastUpdated: "23/04/2025"
    },
    {
        roleName: 'Bluedart Logistics',
        description: 'Bluedart Dispatch Portal',
        assignedUser: 'View',
        permissionSummary: '#1D4ED8',
        createdOn: 'Active',
        subdomain: 'Bluedart.yourapp.com',
        LastUpdated: "23/04/2025"
    },
];

const CustomBranding = () => {
    const [showDropdown, setShowDropdown] = useState(null);
    const [createRolePopup, setCreateRolePopup] = useState(false);
    const [editPopup, setEditPopup] = useState({ open: false, role: null });
    const [enabled, setEnabled] = useState(false);
    const [roleName, setRoleName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const [primaryColor, setPrimaryColor] = useState("#6F1AFF");
    const [secondaryColor, setSecondaryColor] = useState("#14AE5C");
    const [typography, setTypography] = useState("Poppins");
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
    // Font options
    const fontFamilies = [
        "Poppins",
        "Roboto",
        "Montserrat",
        "Inter",
        "Open Sans",
        "Nunito",
        "Lato"
    ];

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
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



    const handlePermissionChange = (perm) => {
        setPermissions((prev) => ({
            ...prev,
            [perm]: !prev[perm],
        }));
    };

    return (
        <>
            <div className="flex justify-between mb-2">
                <p className="text-[#fff] text-[22px] font-semibold py-3">Custom Branding for Companies</p>
                <button
                    className="bg-[#6F1AFF] text-[#fff] text-[22px] font-semibold rounded-lg py-[16px] px-[22px]"
                    onClick={openCreateRolePopup}
                >
                    Create Brand
                </button>
            </div>
            <div className="overflow-auto rounded-xl mb-5 shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[1000px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Company Name</th>
                            <th className="px-5">Brand Name</th>
                            <th className="px-5">Logo Preview</th>
                            <th className="px-5">Primary Color</th>
                            <th className="px-5">Branding Status</th>
                            <th className="px-5">Subdomain</th>
                            <th className="px-5">Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((role, index) => (
                            <tr
                                key={index}
                                className={`bg-[#070539] text-white h-[90px] ${index !== data.length - 1 ? 'border-b border-[#fff]' : ''}`}
                            >
                                <td className="px-5">{role.roleName}</td>
                                <td className="px-5">{role.description}</td>
                                <td className="px-5">
                                    <span className='flex items-center gap-1'>
                                        <img src="/emoji.svg" alt="heloo" />
                                        <span className='underline'>{role.assignedUser}</span>
                                    </span>
                                </td>
                                <td className="px-5"><span className='bg-[#F8F8F840] px-2 py-2 rounded-[10px]'>{role.permissionSummary}</span></td>
                                <td className="px-5">
                                    <span
                                        className={`text-[#F5F5F5] text-[14px] inline-flex items-center justify-center w-[72px] h-[32px] gap-[10px] rounded-[24px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${role.createdOn === 'Active' ? 'bg-[#14AE5C]' :
                                            role.createdOn === 'Pending' ? 'bg-[#E8B931]' :
                                                role.createdOn === 'Disable' ? 'bg-[#EC221F]' : ''}`}
                                    >
                                        {role.createdOn}
                                    </span>
                                </td>

                                <td className="px-5 relative"><span className='bg-[#F8F8F840] px-2 py-2 rounded-[10px]'>{role.subdomain}</span></td>
                                <td className="px-5 relative">{role.LastUpdated}</td>
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
                            width: "594px",
                            height: "auto",
                            background: "#131060",
                            border: "1px solid #FFFFFF",
                            borderRadius: "16px",
                            padding: "24px",
                        }}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-xl"
                            onClick={closeCreateRolePopup}
                        >
                            <img src="/Xicon.svg" alt="Close" className="w-6 h-6" />
                        </button>
                        <h2 className="text-[22px] font-semibold mb-4">Bluedart Logistics</h2>
                        <div className="mb-1">
                            <label className="text-[12px] text-white mb-1 block">Company name</label>
                            <input
                                type="text"
                                value={roleName}
                                onChange={(e) => setRoleName(e.target.value)}
                                className="w-full h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                placeholder="Enter Company Name"
                            />
                        </div>
                        <div className="mb-1">
                            <label className="text-[12px] text-white mb-1 block">Brand name</label>
                            <input
                                type="text"
                                value={roleName}
                                onChange={(e) => setRoleName(e.target.value)}
                                className="w-full h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                                placeholder="Enter Brand Name"
                            />
                        </div>
                        <div className="mb-2 flex-1 h-[182px]">
                            <label className="text-[12px] text-gray-400 mb-1 block">Company Logo</label>
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

                        {/* PRIMARY COLOR */}
                        <div className="mb-1">
                            <label className="text-[12px] text-white mb-1 block">Primary Color</label>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-2 flex-1 h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 9.07001H4C3.59 9.07001 3.25 8.73001 3.25 8.32001V4C3.25 2.48 4.48 1.25 6 1.25H18C19.52 1.25 20.75 2.48 20.75 4V8.32001C20.75 8.73001 20.41 9.07001 20 9.07001ZM4.75 7.57001H19.25V4C19.25 3.31 18.69 2.75 18 2.75H6C5.31 2.75 4.75 3.31 4.75 4V7.57001Z" fill="#F1F1F1" />
                                        <path d="M12.5002 22.7496H11.5002C9.98024 22.7496 8.75024 21.5196 8.75024 19.9996V17.8996C8.75024 17.4496 8.51023 17.0296 8.11023 16.8096L5.15027 15.1396C3.97027 14.4796 3.24023 13.2296 3.24023 11.8696V8.30957C3.24023 7.89957 3.58023 7.55957 3.99023 7.55957H19.9902C20.4002 7.55957 20.7402 7.89957 20.7402 8.30957V11.8696C20.7402 13.2196 20.0103 14.4696 18.8303 15.1396L15.8702 16.8096C15.4802 17.0296 15.2302 17.4496 15.2302 17.8996V19.9996C15.2502 21.5196 14.0202 22.7496 12.5002 22.7496ZM4.75024 9.06958V11.8796C4.75024 12.6896 5.19026 13.4396 5.89026 13.8396L8.85022 15.5096C9.71022 15.9996 10.2502 16.9096 10.2502 17.8996V19.9996C10.2502 20.6896 10.8102 21.2496 11.5002 21.2496H12.5002C13.1902 21.2496 13.7502 20.6896 13.7502 19.9996V17.8996C13.7502 16.9096 14.2903 15.9896 15.1503 15.5096L18.1102 13.8396C18.8202 13.4396 19.2502 12.6896 19.2502 11.8796V9.06958H4.75024Z" fill="#F1F1F1" />
                                    </svg>
                                    <span className="text-white">Select color</span>
                                    <input
                                        type="color"
                                        value={primaryColor}
                                        onChange={(e) => setPrimaryColor(e.target.value)}
                                        className="ml-2 w-[40px] h-[40px] opacity-0 absolute"
                                        style={{ cursor: 'pointer' }}
                                        id="primaryColorInput"
                                    />
                                    <span className="text-white ml-2">{primaryColor}</span>
                                </div>
                            </div>
                        </div>

                        {/* SECONDARY COLOR */}
                        <div className="mb-1">
                            <label className="text-[12px] text-white mb-1 block">Secondary Color</label>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-2 flex-1 h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 9.07001H4C3.59 9.07001 3.25 8.73001 3.25 8.32001V4C3.25 2.48 4.48 1.25 6 1.25H18C19.52 1.25 20.75 2.48 20.75 4V8.32001C20.75 8.73001 20.41 9.07001 20 9.07001ZM4.75 7.57001H19.25V4C19.25 3.31 18.69 2.75 18 2.75H6C5.31 2.75 4.75 3.31 4.75 4V7.57001Z" fill="#F1F1F1" />
                                        <path d="M12.5002 22.7496H11.5002C9.98024 22.7496 8.75024 21.5196 8.75024 19.9996V17.8996C8.75024 17.4496 8.51023 17.0296 8.11023 16.8096L5.15027 15.1396C3.97027 14.4796 3.24023 13.2296 3.24023 11.8696V8.30957C3.24023 7.89957 3.58023 7.55957 3.99023 7.55957H19.9902C20.4002 7.55957 20.7402 7.89957 20.7402 8.30957V11.8696C20.7402 13.2196 20.0103 14.4696 18.8303 15.1396L15.8702 16.8096C15.4802 17.0296 15.2302 17.4496 15.2302 17.8996V19.9996C15.2502 21.5196 14.0202 22.7496 12.5002 22.7496ZM4.75024 9.06958V11.8796C4.75024 12.6896 5.19026 13.4396 5.89026 13.8396L8.85022 15.5096C9.71022 15.9996 10.2502 16.9096 10.2502 17.8996V19.9996C10.2502 20.6896 10.8102 21.2496 11.5002 21.2496H12.5002C13.1902 21.2496 13.7502 20.6896 13.7502 19.9996V17.8996C13.7502 16.9096 14.2903 15.9896 15.1503 15.5096L18.1102 13.8396C18.8202 13.4396 19.2502 12.6896 19.2502 11.8796V9.06958H4.75024Z" fill="#F1F1F1" />
                                    </svg>
                                    <span className="text-white">Select color</span>
                                    <input
                                        type="color"
                                        value={secondaryColor}
                                        onChange={(e) => setSecondaryColor(e.target.value)}
                                        className="ml-2 w-[40px] h-[40px] opacity-0 absolute"
                                        style={{ cursor: 'pointer' }}
                                        id="secondaryColorInput"
                                    />
                                    <span className="text-white ml-2">{secondaryColor}</span>
                                </div>
                            </div>
                        </div>


                        {/* TYPOGRAPHY */}
                        <div className="mb-1">
                            <label className="text-[12px] text-white mb-1 block">Typography</label>
                            <select
                                value={typography}
                                onChange={(e) => setTypography(e.target.value)}
                                className="w-full h-[48px] px-4 py-2 bg-transparent text-white border border-[#FFFFFF] rounded-lg focus:outline-none"
                            >
                                {fontFamilies.map((font) => (
                                    <option key={font} value={font} className="bg-[#131060] text-white">
                                        {font}
                                    </option>
                                ))}
                            </select>
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
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}


        </>
    );
};

export default CustomBranding;