import React from 'react';
import { useGetAllBoardsQuery, useGetAllAvatarsQuery } from '../../redux/slices/apiSlice';

const Customization = () => {
  const { data: boardsData, isLoading: isBoardsLoading, error: boardsError } = useGetAllBoardsQuery();
  const { data: avatarsData, isLoading: isAvatarsLoading, error: avatarsError } = useGetAllAvatarsQuery();

  return (
    <div className="p-6 bg-[#F3F7FD] min-h-screen font-roboto">
      <h2 className="text-lg font-semibold text-[#1B1E25] mb-6">App Theme Customization</h2>

      {/* App Icon, Inner Logo, Splash Screen */}
      {/* <div className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {['App Icon', 'Inner Logo', 'Splash Screen Logo'].map((title, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-sm font-medium text-[#1B1E25] mb-2">{title}</h3>
            <div className="w-[130px] h-[130px] border border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-3">
              <img
                src="https://via.placeholder.com/90x90.png?text=Image"
                alt={title}
                className="object-contain"
              />
            </div>
            <button className="text-sm bg-[#3B82F6] text-white px-4 py-1.5 rounded hover:bg-blue-600 transition">
              Change
            </button>
          </div>
        ))}
      </div> */}

      {/* Default Board Selection */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-sm font-medium text-[#1B1E25] mb-4">Set Default Board</h3>
        {isBoardsLoading ? (
          <div>Loading boards...</div>
        ) : boardsError ? (
          <div>Error loading boards: {boardsError.message}</div>
        ) : (
          <div className="flex justify-between items-center gap-4 overflow-x-auto">
            {boardsData?.data?.map((board, idx) => (
              <div key={board._id} className="flex flex-col items-center gap-2">
                <div className="p-[2px] rounded-xl bg-gradient-to-br from-[#FAC619] via-[#D45A0C] to-[#D45A0C]">
                  <div className="bg-gradient-to-br from-[#8E0DB0] to-[#3C0264] rounded-xl p-4 flex flex-col items-center">
                    <img
                      src={board.image}
                      alt={board.name}
                      className="w-20 h-20 object-contain mb-2"
                    />
                  </div>
                </div>
                <div className="text-sm font-medium text-[#1B1E25]">{board.name}</div>
                <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                  {idx === 0 ? (
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ads Section */}
      {/* <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-medium text-[#1B1E25]">Ads</h3>
          <button className="bg-[#8B5CF6] text-white px-4 py-1.5 rounded text-sm hover:bg-purple-700 transition">
            Add New Ads
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((ad, idx) => (
            <div key={idx} className="relative border border-dashed rounded-lg p-4">
              <button className="absolute top-2 right-2 text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src="https://via.placeholder.com/400x150.png?text=Ad+Banner"
                alt="Ad Banner"
                className="rounded mb-3"
              />
              <button className="text-sm bg-gray-200 text-black px-3 py-1 rounded mb-3">
                Upload New
              </button>
              <div className="mb-2">
                <label className="text-sm text-gray-600">Ads Headline Here</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Link here"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded text-sm"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition">
                  Save Changes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Avatar Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
        <h3 className="text-sm font-medium text-[#1B1E25] mb-4">Avatar</h3>
        {isAvatarsLoading ? (
          <div>Loading avatars...</div>
        ) : avatarsError ? (
          <div>Error loading avatars: {avatarsError.message}</div>
        ) : (
          <div className="flex items-end gap-4 overflow-x-auto">
            {avatarsData?.data?.map((avatar, idx) => (
              <div key={avatar._id} className="flex flex-col items-center gap-1">
                {avatar.default && (
                  <span className="text-[14px] text-[#979797]  px-2 py-1 rounded">Default</span>
                )}
                <div className="p-[2px] rounded-xl bg-gradient-to-br from-[#FAC619] via-[#D45A0C] to-[#D45A0C]">
                  <div className="bg-gradient-to-br from-[#8E0DB0] to-[#3C0264] rounded-xl p-2 flex flex-col items-center">
                    <img
                      src={avatar.image}
                      alt={avatar.name}
                      className="w-[95px] h-[112px] object-cover rounded"
                    />
                  </div>
                </div>

                <button className="text-xs bg-[#E2EAF8]  px-1.5 py-1 rounded-full flex items-center w-[32px] h-[32px]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_346_886)">
                      <path d="M15.8927 15.8935C16.3075 15.8935 16.7052 15.7287 16.9985 15.4355C17.2918 15.1422 17.4565 14.7444 17.4565 14.3297V6.51061C17.4565 6.09586 17.2918 5.6981 16.9985 5.40483C16.7052 5.11156 16.3075 4.9468 15.8927 4.9468H9.71563C9.45409 4.94936 9.19609 4.88629 8.96523 4.76335C8.73438 4.64041 8.53804 4.46153 8.3942 4.24308L7.76086 3.30479C7.61847 3.08857 7.42462 2.91108 7.19671 2.78826C6.96881 2.66544 6.71397 2.60112 6.45507 2.60107H3.38218C2.96743 2.60107 2.56966 2.76583 2.27639 3.05911C1.98312 3.35238 1.81836 3.75014 1.81836 4.16489V14.3297C1.81836 14.7444 1.98312 15.1422 2.27639 15.4355C2.56966 15.7287 2.96743 15.8935 3.38218 15.8935H15.8927Z" stroke="#4880FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.6377 8.07446V12.7659" stroke="#4880FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.29199 10.4202L9.63772 8.07446L11.9834 10.4202" stroke="#4880FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_346_886">
                        <rect width="18.7658" height="18.7658" fill="white" transform="translate(0.254883 0.255371)" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Customization;