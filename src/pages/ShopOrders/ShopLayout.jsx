import React from 'react';
import Sidebar from '../../components/Shop/Sidebar';

const ShopLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F3F7FD] ">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto p-3 relative left-[280px] ">
        <div className=" p-6 rounded-lg  min-h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ShopLayout;
