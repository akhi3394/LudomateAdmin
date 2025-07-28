import React, { useState } from 'react';
import { useGetAllBoardsQuery } from '../../redux/slices/apiSlice';

const categories = {
  teamModes: [
    { title: '2 Players', image: '/dummy.png' },
    { title: '4 Players', image: '/dummy.png' },
  ],
  variations: [
    { title: 'Quick' },
    { title: 'Classic' },
    { title: 'Master' },
  ],
  playingModes: [
    { title: 'Local', image: '/dummy.png' },
    { title: 'Computer', image: '/dummy.png' },
  ],
};

const GameManagement = () => {
  const [toggles, setToggles] = useState({});
  const { data: boardsData, isLoading, error } = useGetAllBoardsQuery();

  const handleToggle = (section, idx) => {
    setToggles((prev) => ({
      ...prev,
      [`${section}-${idx}`]: !prev[`${section}-${idx}`],
    }));
  };

  return (
    <div className="p-4 md:p-6 bg-[#EAF1F8] min-h-screen w-full">
      <h1 className="text-2xl font-semibold mb-6 text-[#1A1A1A]">Game Management</h1>

      {/* Reusable Section for Team Modes */}
      <Section
        title="Control Game Team Modes"
        items={categories.teamModes}
        sectionKey="teamModes"
        toggles={toggles}
        handleToggle={handleToggle}
        showImage
      />

      <Section
        title="Control Game Variations"
        items={categories.variations}
        sectionKey="variations"
        toggles={toggles}
        handleToggle={handleToggle}
      />

      <Section
        title="Control Game Playing Modes"
        items={categories.playingModes}
        sectionKey="playingModes"
        toggles={toggles}
        handleToggle={handleToggle}
        showImage
      />

      {/* Boards Section with API data */}
      {isLoading ? (
        <div>Loading boards...</div>
      ) : error ? (
        <div>Error loading boards: {error.message}</div>
      ) : (
        <Section
          title="Control Game Boards"
          items={boardsData?.data?.map(board => ({
            title: board.name,
            image: board.image
          })) || []}
          sectionKey="boards"
          toggles={toggles}
          handleToggle={handleToggle}
          showImage
        />
      )}

      {/* Terms & Conditions and Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CardWithText title="Terms & Conditions" />
        <CardWithText title="Rules" />
      </div>
    </div>
  );
};

const Section = ({ title, items, sectionKey, toggles, handleToggle, showImage }) => {
  return (
    <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
      <h2 className="font-semibold mb-4 text-[#1A1A1A]">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center rounded-lg p-4">
            {showImage && (
              <div className="p-[2px] rounded-xl bg-gradient-to-br from-[#FAC619] via-[#D45A0C] to-[#D45A0C]">
                <div className="bg-gradient-to-br from-[#8E0DB0] to-[#3C0264] rounded-xl p-4 flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain mb-2"
                  />
                </div>
              </div>

            )}
            <span className="text-sm font-medium mb-2">{item.title}</span>
            <Toggle
              checked={toggles[`${sectionKey}-${idx}`] || false}
              onChange={() => handleToggle(sectionKey, idx)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Toggle = ({ checked, onChange }) => (
  <div className="flex items-center gap-2 mt-2">
    <span className="text-xs">Off</span>
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={onChange}
      />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-all"></div>
      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
    </label>
    <span className="text-xs">On</span>
  </div>
);

const CardWithText = ({ title }) => (
  <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col h-full">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 flex-grow">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </p>
    <button className="self-end mt-4 bg-[#3E79F7] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2e66d3]">
      Update
    </button>
  </div>
);

export default GameManagement;