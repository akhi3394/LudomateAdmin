import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full ">
      <Sidebar />
      {/* Sidebar assumed fixed width: 248px */}
      <div className="flex-1 flex flex-col pl-[248px] overflow-x-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto pt-[98px]">
          {/* Add overflow-x-auto wrapper here */}
          <div className="overflow-x-auto h-full px-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Layout;