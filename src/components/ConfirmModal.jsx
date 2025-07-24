import React from 'react';

const ConfirmModal = ({ isOpen, onClose, onConfirm, email }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold text-[#1A1A1A] mb-4">Are you sure?</h2>
        <p className="text-gray-700 mb-6">
          You are about to delete user <span className="font-medium">{email}</span>. This action cannot be undone.
        </p>
        <div className="flex justify-end gap-4">
          <button
            className="bg-[#d3d3d3] text-[#1A1A1A] px-4 py-2 rounded-md font-medium opacity-100"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#FF4A68] text-white px-4 py-2 rounded-md font-medium opacity-100"
            onClick={onConfirm}
          >
            Yes, delete it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;