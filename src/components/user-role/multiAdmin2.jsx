import React from 'react';

const tableData = [
    {
        dateTime: '25/04/2025 10:30AM',
        userName: 'John Doe',
        role: 'Super Admin',
        actionType: 'User Updated',
        description: 'Changed Permission for John Smith',
        affectedItem: 'User ID- #45678',
        ipAddress: '192.168.1.20',
    },
    {
        dateTime: '25/04/2025 10:30AM',
        userName: 'John Doe',
        role: 'Super Admin',
        actionType: 'User Updated',
        description: 'Changed Permission for John Smith',
        affectedItem: 'User ID- #45678',
        ipAddress: '192.168.1.20',
    },
    {
        dateTime: '25/04/2025 10:30AM',
        userName: 'John Doe',
        role: 'Super Admin',
        actionType: 'User Updated',
        description: 'Changed Permission for John Smith',
        affectedItem: 'User ID- #45678',
        ipAddress: '192.168.1.20',
    },{
        dateTime: '25/04/2025 10:30AM',
        userName: 'John Doe',
        role: 'Super Admin',
        actionType: 'User Updated',
        description: 'Changed Permission for John Smith',
        affectedItem: 'User ID- #45678',
        ipAddress: '192.168.1.20',
    },
];

const MultiAdmin2 = () => {
    return (
        <div>
            <p className="text-white font-bold mb-3 text-[22px]">
                Multi-Admin User Management
            </p>
            <div className="overflow-auto rounded-xl shadow-[0px_1.97px_6.47px_0px_#00000005,0px_9px_18.2px_0px_#00000008,0px_22.78px_48.83px_0px_#0000000A,0px_45px_112px_0px_#0000000F]">
                <table className="min-w-[800px] w-full text-left">
                    <thead>
                        <tr className="bg-[#070539] h-[55px] text-white text-sm border-b border-[#fff]">
                            <th className="px-5">Date & Time</th>
                            <th className="px-5">User Name</th>
                            <th className="px-5">Role</th>
                            <th className="px-5">Action Type</th>
                            <th className="px-5">Description</th>
                            <th className="px-5">Affected Item</th>
                            <th className="px-5">IP Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr
                                key={index}
                                className={`bg-[#131060] text-white h-[90px] ${
                                    index !== tableData.length - 1 ? 'border-b border-[#fff]' : ''
                                }`}
                            >
                                <td className="px-5">{row.dateTime}</td>
                                <td className="px-5">{row.userName}</td>
                                <td className="px-5">{row.role}</td>
                                <td className="px-5">{row.actionType}</td>
                                <td className="px-5">{row.description}</td>
                                <td className="px-5">{row.affectedItem}</td>
                                <td className="px-5">{row.ipAddress}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MultiAdmin2;