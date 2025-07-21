import React from 'react'
import { NavLink } from 'react-router-dom'

const NavTabs = () => {
  return (
      <div className="flex gap-[10px] mb-4">
        {/* Company Management Box */}
        <NavLink
          to="/manage-company"
          className="w-full  h-[113px] bg-[#131060] border border-[#1C1889] rounded-md flex items-center justify-between px-6 py-10"
        >
          <span className="text-white text-[22px] font-semibold ">Company Management</span>
          <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11.5C2 9.5 3 8.5 5 8.5H10V19.5C10 21.5 11 22.5 13 22.5H5C3 22.5 2 21.5 2 19.5V15.5" stroke="#F1F1F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10.11 4.5C10.03 4.8 10 5.13 10 5.5V8.5H5V6.5C5 5.4 5.9 4.5 7 4.5H10.11Z" stroke="#F1F1F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 8.5V13.5" stroke="#F1F1F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 8.5V13.5" stroke="#F1F1F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17 17.5H15C14.45 17.5 14 17.95 14 18.5V22.5H18V18.5C18 17.95 17.55 17.5 17 17.5Z" stroke="#F1F1F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 13.5V17.5" stroke="#F1F1F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 19.5V5.5C10 3.5 11 2.5 13 2.5H19C21 2.5 22 3.5 22 5.5V19.5C22 21.5 21 22.5 19 22.5H13C11 22.5 10 21.5 10 19.5Z" stroke="#F1F1F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </NavLink>

        {/* Truck Management Box */}
        <NavLink
          to="/manage-company/truck-managment"
          className="w-full  h-[113px] bg-[#131060] border border-[#1C1889] rounded-md flex items-center justify-between px-6 py-10"
        >
          <span className="text-white font-semibold text-[22px]">Truck & Driver Management</span>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 6.5C2 4.29 3.79 2.5 6 2.5H15V12.5C15 13.6 14.1 14.5 13 14.5H2V11.49" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19 20.5H18C18 19.4 17.1 18.5 16 18.5C14.9 18.5 14 19.4 14 20.5H10C10 19.4 9.1 18.5 8 18.5C6.9 18.5 6 19.4 6 20.5H5C3.34 20.5 2 19.16 2 17.5V14.5H13C14.1 14.5 15 13.6 15 12.5V5.5H16.84C17.56 5.5 18.22 5.89 18.58 6.51L20.29 9.5H19C18.45 9.5 18 9.95 18 10.5V13.5C18 14.05 18.45 14.5 19 14.5H22V17.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 22.5C9.10457 22.5 10 21.6046 10 20.5C10 19.3954 9.10457 18.5 8 18.5C6.89543 18.5 6 19.3954 6 20.5C6 21.6046 6.89543 22.5 8 22.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 22.5C17.1046 22.5 18 21.6046 18 20.5C18 19.3954 17.1046 18.5 16 18.5C14.8954 18.5 14 19.3954 14 20.5C14 21.6046 14.8954 22.5 16 22.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 12.5V14.5H19C18.45 14.5 18 14.05 18 13.5V10.5C18 9.95 18.45 9.5 19 9.5H20.29L22 12.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </NavLink>
      </div>
  )
}

export default NavTabs
