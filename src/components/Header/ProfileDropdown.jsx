import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResetPopup, setShowResetPopup] = useState(false);
  const navigate = useNavigate();

  const handleResetOpen = () => {
    setIsOpen(false);
    setShowResetPopup(true);
  };

  return (
    <>
      {/* {(isOpen || showResetPopup) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
          onClick={() => {
            setIsOpen(false);
            setShowResetPopup(false);
          }}
        />
      )} */}

      <div className="relative z-20">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 w-[203px] h-[44px] cursor-pointer"
        >
          <img
            src="/AdminProfile.svg"
            alt="Admin"
            className="w-[44px] h-[44px] rounded-full object-cover"
          />
          <div className="text-black text-sm leading-tight">
            <div className="font-bold text-[14px]">Admin Name</div>
            <div className="text-[12px] font-semibold">Admin</div>
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-0 top-12 w-[230px] rounded-[14px] bg-white shadow-xl z-30 overflow-hidden">
            <div
              className="flex items-center gap-3 px-4 py-3 text-[#1A1A1A] text-[15px] font-semibold cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setIsOpen(false);
                navigate("/manage-account");
              }}
            >
              <img
                src="/ProfileManage.svg"
                alt="Manage"
                className="w-[18px] h-[18px]"
              />
              Manage Account
            </div>

            <div
              className="flex items-center gap-3 px-4 py-3 text-[#1A1A1A] text-[15px] font-semibold cursor-pointer hover:bg-gray-100 border-t"
              onClick={handleResetOpen}
            >
              <img
                src="/ProfileChangePassword.svg"
                alt="Change Password"
                className="w-[18px] h-[18px]"
              />
              Change Password
            </div>

            <div
              className="flex items-center gap-3 px-4 py-3 text-[#1A1A1A] text-[15px] font-semibold cursor-pointer hover:bg-gray-100 border-t"
              onClick={() => {
                setIsOpen(false);
                navigate("/activity-log");
              }}
            >
              <img
                src="/profileActivity.svg"
                alt="Activity Log"
                className="w-[18px] h-[18px]"
              />
              Activity Log
            </div>

            <div
              className="flex items-center gap-3 px-4 py-3 text-[#1A1A1A] text-[15px] font-semibold cursor-pointer hover:bg-gray-100 border-t"
              onClick={() => {
                setIsOpen(false);
                navigate("/logout");
              }}
            >
              <img
                src="/ProfileLogout.svg"
                alt="Logout"
                className="w-[18px] h-[18px]"
              />
              Log out
            </div>
          </div>
        )}
      </div>

      {/* Reset Password Popup */}
      {showResetPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="relative w-[630px] h-[735px] rounded-lg shadow-2xl px-10 py-12"
            style={{
              background: 'radial-gradient(50% 50% at 50% 50%, #1D2461 0%, #080625 100%)'
            }}
          >
            <button
              className="absolute top-4 right-4 text-white text-xl font-bold"
              onClick={() => setShowResetPopup(false)}
            >
              ✕
            </button>

            <h2 className="text-white font-extrabold text-[32px] leading-[44px] tracking-[-0.11px] text-center mb-4">
              Reset Password
            </h2>

            <p
              className="text-white opacity-80 text-[18px] font-semibold leading-[25px] tracking-[-0.06px] text-center mb-10"
              style={{ width: "403px", margin: "0 auto" }}
            >
              Please enter your email and password to continue
            </p>

            <form className="flex flex-col gap-6">
              <div>
                <label className="text-white text-[16px] mb-2 block">Email</label>
                <input
                  type="email"
                  value="esteban_schiller@gmail.com"
                  readOnly
                  className="w-full h-[56px] px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-[6px] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-white text-[16px] mb-2 block">New Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full h-[56px] px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-[6px] focus:outline-none"
                />
              </div>
              <div>
                <label className="text-white text-[16px] mb-2 block">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full h-[56px] px-4 border border-[#D8D8D8] bg-[#F1F4F9] text-black rounded-[6px] focus:outline-none"
                />
              </div>

              <button
                type="button"
                className="w-[418px] h-[56px] mt-6 bg-[#6F1AFF] text-white text-[18px] font-bold rounded-[8px] opacity-90 mx-auto"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Save & Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDropdown;
