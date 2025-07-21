import React from 'react';

const DownloadInvoiceReportForm = () => {
    return (
        <div className="">
            <h2 className="text-lg my-4 text-[#fff]">Download Invoice and Reports</h2>
            <div className="bg-[#131060] p-6 rounded-lg shadow-lg w-full">

                {/* Date Range Picker */}
                {/* Date Range Picker */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2 text-white">Select date range</label>
                    <div className="flex space-x-4">
                        {/* From Date */}
                        <div className="relative flex-1">
                            <p className="text-[10px] text-[#cecece] mb-1">From</p>
                            <img
                                src="/dateIcons.svg"
                                alt="calendar"
                                className="w-[24px] h-[24px] absolute left-3 top-[30px] pointer-events-none"
                            />
                            <input
                                type="date"
                                className="w-full bg-[#131060] text-[#fff] border border-[#fff] rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                defaultValue="2025-04-19"
                            />
                        </div>

                        {/* To Date */}
                        <div className="relative flex-1">
                            <p className="text-[10px] text-[#cecece] mb-1">To</p>
                            <img
                                src="/dateIcons.svg"
                                alt="calendar"
                                className="w-[24px] h-[24px] absolute left-3 top-[30px] pointer-events-none"
                            />
                            <input
                                type="date"
                                className="w-full  bg-[#131060] text-[#fff] border border-[#fff] rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                defaultValue="2025-04-24"
                            />
                        </div>
                    </div>
                </div>


                {/* Company Dropdown and Report Type */}
                <div className="flex space-x-4 mb-6">
                    {/* Company Dropdown */}
                    <div className="flex-1">
                        <label className="block text-[10px] font-medium mb-2 text-[#cecece]">Select Company</label>
                        <div className="relative">
                            <select className="w-full bg-[#131060] text-[#fff] border border-[#fff] rounded-lg py-2 px-3 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500">
                                <option>All Company</option>
                            </select>
                            <span className="absolute right-3 top-3 text-gray-400">▼</span>
                        </div>
                    </div>

                    {/* Report Type Checkboxes */}
                    <div className="flex-1">
                        <label className="block text-[10px] font-medium mb-2 text-[#cecece]">Report type</label>
                        <div className="flex flex-wrap gap-4">
                            {['Invoices', 'Transaction Summary', 'Subscription Logs', 'Revenue Reports'].map((label, i) => (
                                <label key={label} className="flex gap-2 items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        defaultChecked={i < 2}
                                        className="hidden"
                                        onChange={(e) => {
                                            const outerSpan = e.target.nextSibling;
                                            const innerSpan = outerSpan.querySelector('span');
                                            if (e.target.checked) {
                                                outerSpan.classList.remove('bg-opacity-30');
                                                outerSpan.classList.add('bg-opacity-100');
                                                innerSpan.classList.add('opacity-100');
                                            } else {
                                                outerSpan.classList.remove('bg-opacity-100');
                                                outerSpan.classList.add('bg-opacity-30');
                                                innerSpan.classList.remove('opacity-100');
                                            }
                                        }}
                                    />
                                    <span className="w-[24px] h-[24px] flex items-center justify-center bg-[#65558F] bg-opacity-30 rounded-md transition-all duration-200 relative">
                                        <span className="w-[16px] h-[16px] bg-[#65558F] rounded-sm opacity-0 transition-opacity">
                                            <svg
                                                className="w-full h-full text-white"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </span>
                                    </span>
                                    <span className="text-white">{label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Generate Report Button */}
                <div className="flex justify-end my-5">
                    <button className="w-[200px] bg-[#6F1AFF]  text-white font-semibold py-2 px-4 rounded-lg transition duration-200">
                        Generate Report
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DownloadInvoiceReportForm;
