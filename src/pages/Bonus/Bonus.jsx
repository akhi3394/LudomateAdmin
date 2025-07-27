import React from 'react';
import { FaEdit } from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { useGetAllCoinsQuery } from '../../redux/slices/apiSlice';

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
  const { data: coinsData, isLoading, error } = useGetAllCoinsQuery();

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Customers */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-[#1A1A1A] mb-3">Customers</h3>
          <div className="flex items-center justify-between">
            <img src="/dummy.png" alt="Customer Chart" className="w-16 h-16" />
            <div className="text-right">
              <p className="text-xl font-bold text-[#1A1A1A]">34,249</p>
              <p className="text-xs text-[#999999]">New Customers</p>
              <p className="text-sm font-semibold text-[#1A1A1A] mt-1">1420</p>
              <p className="text-xs text-[#999999]">Repeated</p>
            </div>
          </div>
        </div>

        {/* Featured Product */}
        <div className="bg-white rounded-xl p-4 shadow-sm flex flex-col items-center justify-center">
          <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">Featured Product</h3>
          <img src={bonusItems.find(item => item.name === 'Gold')?.image} alt="Product" className="w-16 h-16 mb-2" />
          <p className="text-sm font-semibold text-[#1A1A1A]">Gold 100 Coins</p>
          <p className="text-sm text-[#3E79F7]">₹ {bonusItems.find(item => item.name === 'Gold')?.price}</p>
        </div>

        {/* Sales Analytics - Recharts Graph */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-[#1A1A1A] mb-3">Sales Analytics</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#3E79F7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Bonus;