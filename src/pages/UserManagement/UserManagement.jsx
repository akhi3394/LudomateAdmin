import React from 'react';
import { FiFilter } from 'react-icons/fi';

const users = new Array(10).fill({
  profile: '/profile-avatar.png',
  userId: 'Arush@1213',
  email: 'arush1213@gmail.com',
  matches: '3/450',
  status: 'Online',
});

const UserManagement = () => {
  return (
    <div className="p-4 md:p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[#1A1A1A]">User Management</h1>
        <button className="flex items-center gap-2 bg-[#4880FF] text-[#ffffff] px-4 py-2 rounded-lg shadow-sm hover:bg-[#e2efff]">
          <FiFilter size={20} />
          <span className="text-sm font-medium">Filter</span>
        </button>
      </div>

      <div className="overflow-auto rounded-xl bg-white shadow-md">
        <table className="min-w-[800px] w-full table-auto text-sm text-left">
          <thead className=" text-[#1A1A1A] border-b bg-[#FCFDFD]">
            <tr className="text-sm font-semibold">
              <th className="px-4 py-3">Profile</th>
              <th className="px-4 py-3">User id</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">
                <div className="flex flex-col">
                  <span>Total Match</span>
                  <span className="text-[11px] text-red-500 font-normal">wins/total matches</span>
                </div>
              </th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Operations</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx} className="border-b hover:bg-[#f9f9f9]">
                <td className="px-4 py-3">
                  <img
                    src={user.profile}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-3 font-medium">{user.userId}</td>
                <td className="px-4 py-3 text-gray-700">{user.email}</td>
                <td className="px-4 py-3 text-[#2ED047] font-semibold">{user.matches}</td>
                <td className="px-4 py-3 text-[#565656]">{user.status}</td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="bg-[#C9F5E9] text-[#1BA97A] px-4 py-1 rounded-md font-medium hover:opacity-90 transition">
                    Edit
                  </button>
                  <button className="bg-[#FFE0E6] text-[#FF4A68] px-4 py-1 rounded-md font-medium hover:opacity-90 transition">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
