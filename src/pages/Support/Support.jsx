import React, { useState } from 'react';
import Sidebar from '../../components/support/Sidebar';
import ChatArea from '../../components/support/ChatArea';
import { FAQSection } from '../../components/support/faq';
import ActiveTicketsTable from '../../components/support/ActiveTicketsTable';
import OrderTicketsTable from '../../components/support/OrderTicketsTable'; // Import the new component
import CustomPagination from '../../hooks/CustomPagination';

const Support = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <div>
      <div className=" text-white flex flex-col overflow-hidden  mb-5">
        <p className="text-[#fff] font-bold py-3">Live Chat</p>
        <div className="flex gap-3">
          <div className="bg-[#131060] w-[40%] rounded-[11px]">
            <Sidebar />
          </div>
          <div className="bg-[#131060] w-full rounded-[11px]">
            <ChatArea />
          </div>
        </div>

        {/* Active Ticket Table */}
        <div className="mt-6">
          <p className="text-white font-bold mb-3 text-[22px]">Active Ticket</p>
          <ActiveTicketsTable />
          <div className="flex justify-between items-center mt-4">
            <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq mt-6">
          <FAQSection />
        </div>

        {/* Order Tickets Table */}
        <div className="mt-6">
          <p className="text-white font-bold mb-3 text-[22px]">Disputes Between Dispatchers & Drivers</p>
          <OrderTicketsTable />
          <div className="flex justify-between items-center mt-4">
            <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;