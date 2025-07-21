import React from 'react'

const Customization = () => {
  return (
    <div className="p-6 bg-[#F3F7FD] min-h-screen font-roboto">
      <h2 className="text-lg font-semibold text-[#1B1E25] mb-6">App Theme Customization</h2>

      {/* App Icon, Inner Logo, Splash Screen */}
      <div className="bg-white p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
      </div>

      {/* Default Board Selection */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-sm font-medium text-[#1B1E25] mb-4">Set Default Board</h3>
        <div className="flex justify-between items-center gap-4 overflow-x-auto">
          {[1, 2, 3, 4].map((style, idx) => (
            <div key={style} className="flex flex-col items-center gap-2">
              <img
                src={`https://via.placeholder.com/90x90.png?text=Style+${style}`}
                alt={`Style ${style}`}
                className="w-[90px] h-[90px] rounded-lg border border-gray-300"
              />
              <div className="text-sm font-medium text-[#1B1E25]">Style {style}</div>
              <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                {style === 1 ? (
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Ads Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
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
      </div>

      {/* Avatar Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
        <h3 className="text-sm font-medium text-[#1B1E25] mb-4">Avatar</h3>
        <div className="flex items-end gap-4 overflow-x-auto">
          {[
            'https://via.placeholder.com/60x60.png?text=1',
            'https://via.placeholder.com/60x60.png?text=2',
            'https://via.placeholder.com/60x60.png?text=3',
            'https://via.placeholder.com/60x60.png?text=4',
            'https://via.placeholder.com/60x60.png?text=5',
            'https://via.placeholder.com/60x60.png?text=6',
            'https://via.placeholder.com/60x60.png?text=7',
            'https://via.placeholder.com/60x60.png?text=8',
          ].map((img, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <div className="w-[64px] h-[64px] rounded-lg border-4 border-purple-600 overflow-hidden">
                <img
                  src={img}
                  alt={`Avatar ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="text-xs bg-[#E0E7FF] text-blue-600 px-1.5 py-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Customization
