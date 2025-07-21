import React from 'react';

const tabs = ["Plans", "Renewable", "Cancellation"];

const TabSwitcher = ({ currentTab, setTab }) => {
  return (
    <div className="w-full overflow-hidden mb-6">
      <div className="inline-flex bg-[#070539] p-1 rounded-[5px]">
        {tabs.map((tab) => (
          <div
            key={tab}
            onClick={() => setTab(tab)}
            className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              currentTab === tab
                ? "bg-[#0A0666] text-white rounded-[5px]"
                : "text-[#BFBFBF]"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSwitcher;
