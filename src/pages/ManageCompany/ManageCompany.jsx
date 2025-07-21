import { NavLink, Outlet } from 'react-router-dom';

const ManageCompany = () => {
  return (
    <div className=" text-white flex flex-col overflow-hidden  mb-5"
   >
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default ManageCompany;
