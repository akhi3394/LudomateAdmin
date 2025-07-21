import { useNavigate } from 'react-router-dom';

const companies = [
    {
        name: 'Stream Logistics',
        plan: 'Premium Plan',
        employees: 245,
        shipments: 1856,
        color: 'bg-[#FF6B00]',
        initials: 'SL',
    },
    {
        name: 'Global Express',
        plan: 'Standard Plan',
        employees: 546,
        shipments: 3256,
        color: 'bg-[#00B2FF]',
        initials: 'GE',
    },
    {
        name: 'Swift Delivery',
        plan: 'Basic Plan',
        employees: 123,
        shipments: 756,
        color: 'bg-[#B1B1B1]',
        initials: 'SD',
    },
    {
        name: 'Stream Logistics',
        plan: 'Premium Plan',
        employees: 245,
        shipments: 1856,
        color: 'bg-[#FF6B00]',
        initials: 'SL',
    },
    {
        name: 'Global Express',
        plan: 'Standard Plan',
        employees: 546,
        shipments: 3256,
        color: 'bg-[#00B2FF]',
        initials: 'GE',
    },
    {
        name: 'Swift Delivery',
        plan: 'Basic Plan',
        employees: 123,
        shipments: 756,
        color: 'bg-[#B1B1B1]',
        initials: 'SD',
    },
];

const ActiveCompany = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4 lg:p-8 min-h-screen text-white">
            {/* Header */}
            <div className="flex items-center gap-6 mb-8">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="w-[42px] h-[42px] rounded-full bg-transparent hover:opacity-80 transition"
                >
                    <img src="/dashboardicons/backbutton.svg" alt="Back" className="w-full h-full" />
                </button>
                <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">Active Company</h1>
            </div>

            {/* Company Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company, index) => (
                    <div
                        key={index}
                        className="w-full bg-[#131060] border border-[#1C1889] rounded-[12px] p-6 flex flex-col gap-4"
                    >
                        {/* Header: Initials and Name */}
                        <div className="flex items-center gap-3">
                            <div className={`w-[44px] h-[44px] rounded-full text-white flex items-center justify-center text-[16px] font-semibold ${company.color}`}>
                                {company.initials}
                            </div>
                            <div>
                                <div className="text-[16px] font-medium leading-[24px]">{company.name}</div>
                                <div className="text-[#CACACA] text-[12px] font-normal leading-[18px]">{company.plan}</div>
                            </div>
                        </div>

                        {/* Employee & Shipment section (icons and numbers aligned properly) */}
                        <div className="flex flex-col gap-2 w-full">
                            {/* Top row with labels + icons */}
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <img src="/dashboardicons/employee.svg" alt="employee" className="w-[24px] h-[24px]" />
                                    <span className="text-[12px] font-normal leading-[18px]">Employee</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/dashboardicons/shipment.svg" alt="shipment" className="w-[24px] h-[24px]" />
                                    <span className="text-[12px] font-normal leading-[18px]">Shipment</span>
                                </div>
                            </div>

                            {/* Bottom row with numbers */}
                            <div className="flex justify-between">
                                <span className="text-[14px] font-medium">{company.employees}</span>
                                <span className="text-[14px] font-medium">{company.shipments}</span>
                            </div>
                        </div>


                        {/* Divider */}
                        <div className="w-full border-t border-[#8B8B8B] my-2"></div>

                        {/* Order Details */}
                        <div className="flex flex-col gap-3">
                            <span className="text-[16px] font-medium">Order Details</span>
                            <div className="space-y-2">
                                <div>
                                    <div className="text-[12px] mb-1">Pending</div>
                                    <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-400 w-[40%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[12px] mb-1">In Progress</div>
                                    <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                                        <div className="h-full bg-[#1CA4FF] w-[60%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[12px] mb-1">Completed</div>
                                    <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                                        <div className="h-full bg-[#00D471] w-[80%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveCompany;
