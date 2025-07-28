import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  LineChart,
  Line,
  Cell,
} from 'recharts';
import { useGetAllCoinsQuery, useGetCustomerStatsQuery, useGetEarningsStatsQuery, useGetMostPurchasedDiceQuery, useGetRevenueStatsQuery, useGetSalesStatsQuery } from '../../redux/slices/apiSlice';
const COLORS = ['#3B82F6', '#A5B4FC']

const salesData = [
  { name: 'Mon', sales: 30 },
  { name: 'Tue', sales: 50 },
  { name: 'Wed', sales: 70 },
  { name: 'Thu', sales: 40 },
  { name: 'Fri', sales: 60 },
  { name: 'Sat', coins: 35 },
  { name: 'Sun', sales: 55 },
];

const Bonus = () => {
    const [selectedYear, setSelectedYear] = useState('2025')
    const { data: salesStats, isLoading: salesLoading, error: salesError } = useGetSalesStatsQuery({ mode: 'monthly', year: 2025 })
  const { data: coinsData, isLoading, error } = useGetAllCoinsQuery();
  const { data: customerStats, isLoading: customerLoading, error: customerError } = useGetCustomerStatsQuery()
  const { data: revenueStats, isLoading: revenueLoading, error: revenueError } = useGetRevenueStatsQuery()
  const { data: earningsStats, isLoading: earningsLoading, error: earningsError } = useGetEarningsStatsQuery()
  const { data: mostPurchasedDice, isLoading: isDiceLoading, error: diceError } = useGetMostPurchasedDiceQuery();



  if (isLoading) return <div className="p-6 bg-[#EDF3F9] min-h-screen">Loading...</div>;
  if (error) return <div className="p-6 bg-[#EDF3F9] min-h-screen">Error loading data</div>;

  const bonusItems = [
    { name: 'Daily Bonus', price: coinsData?.data?.find(item => item.name === 'Daily Bonus')?.price || 0, coin: coinsData?.data?.find(item => item.name === 'Daily Bonus')?.coin || 0, image: coinsData?.data?.find(item => item.name === 'Daily Bonus')?.image || '/dummy.png', default: true },
    ...coinsData?.data?.map(item => ({
      name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
      price: item.price,
      coin: item.coin,
      image: item.image || '/dummy.png',
      default: item.default
    })) || []
  ].filter(item => item.name !== 'Daily Bonus');


const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
  const salesData = salesStats?.data?.map(item => ({
    name: months[item.month - 1],
    value: item.total
  })) || []

  const pieData = [
    { name: 'New', value: customerStats?.data?.newUsers || 0 },
    { name: 'Repeated', value: customerStats?.data?.repeatedUsers || 0 }
  ]

  const revenueData = revenueStats?.data?.map(item => ({
    name: `Day ${item.day}`,
    Sales: item.sales,
    Profit: item.profit
  })) || []

  const earningsData = earningsStats?.data?.map(item => ({
    name: item.year.toString(),
    value: item.earning
  })) || []

  return (
    <div className="p-6 bg-[#EDF3F9] min-h-screen">
      <h1 className="text-2xl font-semibold text-[#1A1A1A] mb-6">Bonus Management</h1>

      {/* Top Card Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
        {/* Daily Bonus */}
        <h2 className="text-base font-semibold text-[#1A1A1A] mb-2">DAILY BONUS</h2>
        <div className="mb-6 flex justify-start">
          <div className="flex flex-col items-center gap-2">
            {/* Gradient border wrapper for image + price */}
            <div className="p-[2px] rounded-xl bg-gradient-to-br from-[#FAC619] via-[#D45A0C] to-[#D45A0C]">
              <div className="bg-gradient-to-br from-[#8E0DB0] to-[#3C0264] rounded-xl p-4 flex flex-col items-center">
                <img
                  src={coinsData?.data[0]?.image}
                  alt="Daily Bonus"
                  className="w-[55px] h-[56px] object-contain mb-1"
                />
                <p className="text-sm text-[#D1FF17]">Free</p>
              </div>
            </div>

            {/* Checkbox outside gradient */}
            <label className="flex items-center gap-2 text-sm text-[#999999] mt-2">
              <input
                type="checkbox"
                className="form-checkbox accent-[#58006D]"
                value={true}
              />
              Auto Send
            </label>
          </div>
        </div>


        <hr className="my-4" />

        {/* Bonus Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {bonusItems.filter(item => item.name !== 'Daily Bonus').map((item, i) => (
            <div key={i}>
              {/* Item name (outside gradient box) */}
              <p className="text-center font-semibold">{item.name}</p>

              {/* Gradient border wrapper */}
              <div className="p-[2px] rounded-xl bg-gradient-to-br from-[#FAC619] via-[#D45A0C] to-[#D45A0C] mt-2">
                {/* Inner gradient background box */}
                <div className="flex flex-col items-center rounded-xl py-4 px-2 text-white bg-gradient-to-br from-[#8E0DB0] to-[#3C0264]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 object-contain mb-2"
                  />
                  <p className="text-sm text-[#D1FF17] mt-1">₹ {item.price}</p>
                </div>
              </div>

              {/* Edit button (outside gradient box) */}
              <button className="flex items-center gap-1 mt-2 text-xs text-[#FF0000] mx-auto">
                <FaEdit className="text-lg" />
                Edit
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Cards */}
     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
           {/* Customers */}
           <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col justify-center items-center text-center">
             <p className="text-sm font-semibold mb-2">Customers</p>
             <PieChart width={120} height={120}>
               <Pie
                 data={pieData}
                 cx="50%"
                 cy="50%"
                 innerRadius={35}
                 outerRadius={50}
                 dataKey="value"
               >
                 {pieData.map((entry, index) => (
                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                 ))}
               </Pie>
             </PieChart>
   
             <div className="flex items-center justify-center gap-6 mt-4">
               <div className="text-center">
                 <p className="text-lg font-semibold text-black">
                   {customerStats?.data?.newUsers || 0}
                 </p>
                 <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                   <span className="w-2 h-2 bg-blue-600 rounded-full"></span> New Customers
                 </p>
               </div>
   
               <div className="text-center">
                 <p className="text-lg font-semibold text-black">
                   {customerStats?.data?.repeatedUsers || 0}
                 </p>
                 <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                   <span className="w-2 h-2 bg-blue-200 rounded-full"></span> Repeated
                 </p>
               </div>
             </div>
           </div>
   
   
           {/* Featured Product */}
          <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-between min-h-[220px] w-full">
             <p className="text-sm font-semibold text-[#1B1E25] mb-2">Featured Product</p>
   
             {isDiceLoading ? (
               <div className="h-[100px] flex items-center justify-center">Loading...</div>
             ) : diceError ? (
               <div className="text-red-500 text-sm">Error: {diceError.message}</div>
             ) : (
               <div className="relative w-full flex items-center justify-center">
                 {/* Left Arrow */}
                 <button className="absolute left-0 bg-white rounded-full p-1 shadow-md hover:bg-gray-100">
                   <span className="text-xl">&lt;</span>
                 </button>
   
                 {/* Dice Image */}
                 <img
                   src={mostPurchasedDice?.data?.image}
                   alt={mostPurchasedDice?.data?.name}
                   className="w-[90px] h-[90px] object-contain"
                 />
   
                 {/* Right Arrow */}
                 <button className="absolute right-0 bg-white rounded-full p-1 shadow-md hover:bg-gray-100">
                   <span className="text-xl">&gt;</span>
                 </button>
               </div>
             )}
   
             {/* Name and Price */}
             {!isDiceLoading && !diceError && (
               <>
                 <p className="text-sm font-semibold text-[#1B1E25] mt-3">{mostPurchasedDice?.data?.name}</p>
                 <p className="text-sm font-semibold text-[#4880FF]">${mostPurchasedDice?.data?.price}</p>
               </>
             )}
           </div>
   
           {/* Sales Analytics */}
           <div className="bg-white rounded-lg p-4 shadow-sm">
             <h3 className="text-sm font-medium text-[#1B1E25] mb-2">Sales Analytics</h3>
             <ResponsiveContainer width="100%" height={120}>
               <LineChart data={salesData}>
                 <XAxis dataKey="name" />
                 <YAxis hide />
                 <Tooltip />
                 <Line type="monotone" dataKey="value" stroke="#6366F1" strokeWidth={2} />
               </LineChart>
             </ResponsiveContainer>
           </div>
         </div>
    </div>
  );
};

export default Bonus;