import { Link, NavLink } from 'react-router-dom';
import DispatchingCompanyTable from './dispatchingCompanyTable';
import CustomPagination from '../../../hooks/CustomPagination';
import { useState } from 'react';
import Subscription from './SubscriptionPlan';
import NavTabs from '../NavTabs';

const CompanyManagement = () => {
      const [currentPage, setCurrentPage] = useState(1);
        const totalPages = 10;
  return (
    <div>
      <NavTabs/>
      <h2 className="text-[30px] leading-[45px] font-bold mb-4 text-white">Company Management</h2>
      <div className="mb-6">
        <DispatchingCompanyTable/>
        <div className="flex justify-between items-center mt-4">
          <p className="text-[18px] text-[#FFFFFF]">Showing 6 out of 120 results</p>
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <Subscription/>
    </div>
  );
};

export default CompanyManagement;
