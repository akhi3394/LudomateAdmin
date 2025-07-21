import { useState } from "react";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSettingsClick = () => console.log("Settings clicked");
  const handleMailClick = () => console.log("Mail clicked");
  const handleTransactionClick = () => console.log("Transaction clicked");

  return (
    <>
      {/* {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
        />
      )} */}

      <div className="relative z-20">
        {/* Notification Icon */}
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer relative flex justify-center">
          <img src="/NotificationIcon.svg" alt="" />
          <span className="absolute -top-1 -right-1 text-white text-xs bg-red-500 rounded-full px-1">6</span>
        </div>

        {isOpen && (
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-[280px] rounded-[16px] bg-white z-30 py-4 shadow-xl">
            {/* Header */}
            <p className="text-black text-[15px] font-bold px-4 mb-4">Notification</p>
            <div className="border-b border-gray-200 mb-2" />

            {/* Items */}
            <div className="space-y-3 px-4">
              {/* Item 1 */}
              <div className="flex items-start gap-3 cursor-pointer" onClick={handleSettingsClick}>
                <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(180deg, #4E96FF 0%, #80C9FC 100%)" }}>
                  <img src="/headericons/settings.svg" alt="Settings" className="w-[13px] h-[16px]" />
                </div>
                <div>
                  <p className="text-black text-[14px] font-semibold">Settings</p>
                  <p className="text-gray-500 text-[12px]">Update Dashboard</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3 cursor-pointer" onClick={handleMailClick}>
                <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(180deg, #F97FD9 0%, #FFC1E6 100%)" }}>
                  <img src="/headericons/eventupdate.svg" alt="Event" className="w-[13px] h-[16px]" />
                </div>
                <div>
                  <p className="text-[#D53C94] text-[14px] font-semibold">Event Update</p>
                  <p className="text-gray-500 text-[12px]">An event date update again</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3 cursor-pointer" onClick={handleMailClick}>
                <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(180deg, #9E8FFF 0%, #EBCBFF 100%)" }}>
                  <img src="/headericons/profile.svg" alt="Profile" className="w-[13px] h-[16px]" />
                </div>
                <div>
                  <p className="text-[#7551F8] text-[14px] font-semibold">Profile</p>
                  <p className="text-gray-500 text-[12px]">Update your profile</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-3 cursor-pointer" onClick={handleTransactionClick}>
                <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(180deg, #FF8F8F 0%, #FFC1C1 100%)" }}>
                  <img src="/headericons/applicationerror.svg" alt="Error" className="w-[13px] h-[16px]" />
                </div>
                <div>
                  <p className="text-[#F14C4C] text-[14px] font-semibold">Application Error</p>
                  <p className="text-gray-500 text-[12px]">Check your running application</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 mt-4 pt-3 text-center">
              <button className="text-sm text-gray-600 font-medium hover:underline">
                See all notification
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationDropdown;
