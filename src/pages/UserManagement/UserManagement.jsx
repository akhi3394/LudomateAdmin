import React, { useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { useGetUserListQuery, useDeleteUserMutation } from '../../redux/slices/userApiSlice';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmModal from '../../components/ConfirmModal';

const UserManagement = () => {
  const { data: users, isLoading, error } = useGetUserListQuery();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({ id: null, email: '' });

  const handleDelete = async (userId, email) => {
    setSelectedUser({ id: userId, email });
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await deleteUser(selectedUser.id).unwrap();
      toast.success(`User ${selectedUser.email} has been deleted successfully.`, {
        position: 'top-right',
        autoClose: 3000,
        theme: 'light',
      });
      console.log(`User ${selectedUser.id} deleted successfully`);
    } catch (err) {
      console.error('Failed to delete user:', err);
      toast.error(err.data?.message || 'Failed to delete user. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'light',
      });
    } finally {
      setIsModalOpen(false);
      setSelectedUser({ id: null, email: '' });
    }
  };

  if (isLoading) {
    return (
      <div className="p-4 md:p-6 w-full flex justify-center items-center">
        <span className="flex items-center gap-2 text-gray-600">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Loading users...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 md:p-6 w-full">
        <p className="text-red-500 text-center">
          {error.data?.message || 'Failed to load users. Please try again.'}
        </p>
      </div>
    );
  }

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
          <thead className="text-[#1A1A1A] border-b bg-[#FCFDFD]">
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
            {users?.data?.map((user) => (
              <tr key={user._id} className="border-b hover:bg-[#f9f9f9]">
                <td className="px-4 py-3">
                  <img
                    src={user.profilePic || '/profile-avatar.png'}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-3 font-medium">{user.userName || 'NA'}</td>
                <td className="px-4 py-3 text-gray-700">{user.email}</td>
                <td className="px-4 py-3 text-[#2ED047] font-semibold">{`${user.gameWon}/${user.gameTotal}`}</td>
                <td className="px-4 py-3 text-[#565656]">{user.status}</td>
                <td className="px-4 py-3 flex gap-2">
                  {/* <button className="bg-[#C9F5E9] text-[#1BA97A] px-4 py-1 rounded-md font-medium hover:opacity-90 transition">
                    Edit
                  </button> */}
                  <button
                    className="bg-[#FFE0E6] text-[#FF4A68] px-4 py-1 rounded-md font-medium opacity-100"
                    onClick={() => handleDelete(user._id, user.email)}
                    disabled={isDeleting}
                  >
                    {isDeleting ? 'Deleting...' : 'Delete'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        email={selectedUser.email}
      />
    </div>
  );
};

export default UserManagement;