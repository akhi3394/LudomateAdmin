import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { FiUpload, FiLoader } from 'react-icons/fi';
import { useGetNotificationsQuery, useSendNotificationMutation, useUpdateNotificationStatusMutation } from '../../redux/slices/apiSlice';
import { toast } from 'react-toastify';

const PushNotification = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [actionType, setActionType] = useState(null); // To track the type of action (status update or delete)
  const [currentStatus, setCurrentStatus] = useState(null); // To store the current status for updates
  const [loadingActions, setLoadingActions] = useState({}); // Object to track loading states per action/ID
  const { data: notifications, isLoading, error, refetch } = useGetNotificationsQuery();
  const [sendNotification] = useSendNotificationMutation();
  const [updateNotificationStatus] = useUpdateNotificationStatusMutation();

  useEffect(() => {
    if (error) {
      console.error('Failed to fetch notifications:', error);
      toast.error('Failed to load notifications');
    }
  }, [error]);

  const handleSendNotification = async () => {
    if (message.trim()) {
      setLoadingActions((prev) => ({ ...prev, create: true }));
      try {
        await sendNotification({ userId: 'ALL', title: '🎉 New Update Available!', body: message });
        toast.success('Notification sent successfully!');
        setIsModalOpen(false);
        setMessage('');
        refetch();
      } catch (err) {
        toast.error('Failed to send notification');
      } finally {
        setLoadingActions((prev) => ({ ...prev, create: false }));
      }
    }
  };

  const handleConfirmation = (id, currentStatus, type) => {
    setSelectedId(id);
    setCurrentStatus(currentStatus);
    setActionType(type);
    setConfirmOpen(true);
  };

  const handleProceedAction = async () => {
    if (!selectedId || !actionType) return;

    setLoadingActions((prev) => ({ ...prev, [selectedId]: true }));
    let newStatus;
    if (actionType === 'delete') {
      newStatus = 'DELETE';
    } else if (actionType === 'status') {
      newStatus = currentStatus === 'ACTIVE' ? 'BLOCKED' : 'ACTIVE';
    }

    try {
      await updateNotificationStatus({ id: selectedId, status: newStatus });
      toast.success(
        actionType === 'delete'
          ? 'Notification marked as deleted!'
          : `Notification status updated to ${newStatus}`
      );
      setConfirmOpen(false);
      setSelectedId(null);
      setActionType(null);
      setCurrentStatus(null);
      refetch();
    } catch (err) {
      toast.error(
        actionType === 'delete'
          ? 'Failed to delete notification'
          : 'Failed to update notification status'
      );
    } finally {
      setLoadingActions((prev) => ({ ...prev, [selectedId]: false }));
    }
  };

  const handleCancelAction = () => {
    setConfirmOpen(false);
    setSelectedId(null);
    setActionType(null);
    setCurrentStatus(null);
  };

  if (isLoading) return <div className="min-h-screen bg-[#EFF6FB] p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#EFF6FB] p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-[#1B1E25]">Push Notification</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#3F83F8] text-white text-sm px-4 py-2 rounded-md hover:bg-[#2563EB] transition-all"
        >
          + Create New Notification
        </button>
      </div>
      <div className="w-full mx-auto bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-4">
          {notifications?.data?.length ? (
            notifications.data.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border-b px-4 py-4 bg-white"
              >
                <div>
                  <p className="text-sm font-semibold text-[#1B1E25]">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Created {new Date(item.createdAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </p>
                </div>
                <div className="text-sm text-[#1B1E25]">{item.body}</div>
                <div className="text-sm text-[#1B1E25]">{item.userId?.email || 'All Users'}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleConfirmation(item._id, item.status, 'status')}
                    className="text-blue-500 hover:text-blue-600 flex items-center gap-1 text-sm font-medium"
                    disabled={loadingActions[item._id]}
                  >
                    {loadingActions[item._id] ? (
                      <FiLoader className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <FiEdit className="w-4 h-4" />
                        {item.status}
                      </>
                    )}
                  </button>
                  {item.status !== 'DELETE' && (
                    <button
                      onClick={() => handleConfirmation(item._id, item.status, 'delete')}
                      className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm font-medium"
                      disabled={loadingActions[item._id]}
                    >
                      {loadingActions[item._id] ? (
                        <FiLoader className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <FiTrash2 className="w-4 h-4" />
                          Delete
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No notifications available</p>
          )}
        </div>
      </div>

      {/* Modal for Creating Notification */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-lg w-full max-w-xl shadow-lg relative">
            <div className="border-b px-6 py-4 flex justify-between items-center bg-gray-100 rounded-t-lg">
              <h2 className="text-center w-full text-lg font-semibold text-[#1B1E25]">
                New Push Notification
              </h2>
              <button
                className="absolute right-4 text-2xl text-gray-600 hover:text-black"
                onClick={() => setIsModalOpen(false)}
              >
                <IoMdClose />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[#1B1E25]">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Send to info */}
              <div>
                <label className="block text-sm font-medium mb-1 text-[#1B1E25]">Send to</label>
                <p className="text-sm text-gray-500">
                  Push Notification will be sent to all users with access to the selected documents.
                </p>
              </div>

              {/* Upload Document */}
              <div>
                <label className="block text-sm font-medium mb-2 text-[#1B1E25]">Document</label>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F6F8FF] flex items-center justify-center">
                    <FiUpload className="text-[#3F83F8] text-xl" />
                  </div>
                  <div className="flex-1 border border-dashed rounded-lg h-12" />
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button
                onClick={handleSendNotification}
                className="bg-[#845EF7] text-white w-full py-2 rounded-md text-sm hover:bg-[#6F4BD8] transition-all"
                disabled={loadingActions.create}
              >
                {loadingActions.create ? (
                  <FiLoader className="w-4 h-4 animate-spin inline-block" />
                ) : (
                  'Send Notification'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Popup */}
      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg w-full max-w-md shadow-lg relative p-6">
            <div className="border-b px-4 py-3 flex justify-between items-center bg-gray-100 rounded-t-lg">
              <h2 className="text-lg font-semibold text-[#1B1E25]">
                {actionType === 'delete' ? 'Confirm Deletion' : 'Confirm Status Change'}
              </h2>
              <button
                className="text-2xl text-gray-600 hover:text-black"
                onClick={handleCancelAction}
              >
                <IoMdClose />
              </button>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-700">
                {actionType === 'delete'
                  ? 'Are you sure you want to delete this notification? This action cannot be undone.'
                  : 'Are you sure you want to change the notification status?'}
              </p>
            </div>
            <div className="px-4 pb-4 flex justify-end gap-2">
              <button
                onClick={handleCancelAction}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                disabled={loadingActions[selectedId]}
              >
                Cancel
              </button>
              <button
                onClick={handleProceedAction}
                className="px-4 py-2 bg-[#845EF7] text-white text-sm rounded-md hover:bg-[#6F4BD8] transition-all"
                disabled={loadingActions[selectedId]}
              >
                {loadingActions[selectedId] ? (
                  <FiLoader className="w-4 h-4 animate-spin inline-block" />
                ) : actionType === 'delete' ? (
                  'Proceed'
                ) : (
                  'Confirm'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PushNotification;