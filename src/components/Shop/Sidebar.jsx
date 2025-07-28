import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiBox, FiBarChart2, FiSend, FiPackage } from 'react-icons/fi';

const Sidebar = () => {
    const linkStyle = ({ isActive }) =>
        `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium ${isActive
            ? 'bg-[#E9F1FF] text-[#3772FF]'
            : 'text-[#1B1E25] hover:bg-[#F5F8FC]'
        }`;

    return (
        <div className="w-[260px] h-[500px] fixed top-[135px] p-5 ml-5 bg-white rounded-2xl shadow-sm">
            <button className="w-full bg-[#3772FF] text-white py-2 rounded-lg text-sm font-medium mb-6">
                + Add New Product
            </button>

            <h3 className="text-[13px] font-medium text-[#1B1E25] mb-4 px-3">My Shop</h3>

            <nav className="space-y-1">
                <NavLink to="/shop-orders/products" className={linkStyle}>
                    <div className="flex items-center gap-2">
                        <FiBox className="w-4 h-4" />
                        Products
                    </div>
                    <span className="text-[#3772FF] text-xs font-semibold">30</span>
                </NavLink>

                <NavLink to="/shop-orders/analytics" className={linkStyle}>
                    <div className="flex items-center gap-2">
                        <FiBarChart2 className="w-4 h-4" />
                        Sells Analytics
                    </div>
                </NavLink>

                <div className="flex items-center justify-between px-3 py-2 text-sm text-[#1B1E25] hover:bg-[#F5F8FC] rounded-lg cursor-pointer">
                    <div className="flex items-center gap-2">
                        <FiSend className="w-4 h-4" />
                        Earning
                    </div>
                    <span className="text-[#667085] text-xs font-medium">24,532</span>
                </div>

                <div className="flex items-center justify-between px-3 py-2 text-sm text-[#1B1E25] hover:bg-[#F5F8FC] rounded-lg cursor-pointer">
                    <div className="flex items-center gap-2">
                        <FiPackage className="w-4 h-4" />
                        Order List
                    </div>
                    <span className="text-[#667085] text-xs font-medium">24,532</span>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
