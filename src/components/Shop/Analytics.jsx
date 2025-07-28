import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { useGetBonusStatsQuery, useGetMostPurchasedDiceQuery, useGetMonthlySalesQuery, useGetCustomerStatsQuery, useGetRevenueStatsQuery, useGetEarningsStatsQuery } from '../../redux/slices/apiSlice';
const COLORS = ['#3B82F6', '#A5B4FC']

const Analytics = () => {
  const { data: bonusStats, isLoading: isBonusLoading, error: bonusError } = useGetBonusStatsQuery();
  const { data: mostPurchasedDice, isLoading: isDiceLoading, error: diceError } = useGetMostPurchasedDiceQuery();
  const { data: monthlySales, isLoading: isSalesLoading, error: salesError } = useGetMonthlySalesQuery({ year: 2025, month: 6 });
  const { data: customerStats, isLoading: customerLoading, error: customerError } = useGetCustomerStatsQuery()
  const { data: revenueStats, isLoading: revenueLoading, error: revenueError } = useGetRevenueStatsQuery()
  const { data: earningsStats, isLoading: earningsLoading, error: earningsError } = useGetEarningsStatsQuery()


  const bonusData = bonusStats?.data?.map(stat => ({
    name: stat.day,
    total: stat.total,
  }));

  const salesData = monthlySales?.data?.map(sale => ({
    name: sale.day,
    total: sale.total,
  }));
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]


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
    <div className=" bg-[#F3F7FD] min-h-screen lg:max-w-screen-md 2xl:max-w-screen-xl">
      {/* Weekly Bonus Stats */}
      <div className="bg-white rounded-lg p-4 md:p-6 shadow mb-6">
        <h2 className="text-lg font-semibold text-[#1B1E25] mb-4">Weekly Bonus Stats</h2>
        {isBonusLoading ? (
          <div>Loading...</div>
        ) : bonusError ? (
          <div>Error: {bonusError.message}</div>
        ) : (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={bonusData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              barCategoryGap={10}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#1B1E25" fontSize={12} />
              <YAxis stroke="#1B1E25" fontSize={12} />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                itemStyle={{ color: '#1B1E25' }}
              />
              <Legend wrapperStyle={{ fontSize: '12px', color: '#1B1E25' }} />
              <Bar dataKey="total" fill="#4CAF50" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Most Purchased Dice */}
      {/* <div className="bg-white rounded-lg p-4 md:p-6 shadow mb-6">
        <h2 className="text-lg font-semibold text-[#1B1E25] mb-4">Most Purchased Dice</h2>
        {isDiceLoading ? (
          <div>Loading...</div>
        ) : diceError ? (
          <div>Error: {diceError.message}</div>
        ) : (
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <img
                src={mostPurchasedDice?.data?.image}
                alt={mostPurchasedDice?.data?.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-[#1B1E25]">{mostPurchasedDice?.data?.name}</p>
              <p className="text-xs text-gray-500">Total Purchases: {mostPurchasedDice?.data?.totalPurchases}</p>
              <p className="text-sm text-green-500 font-bold">₹{mostPurchasedDice?.data?.price}</p>
            </div>
          </div>
        )}
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 w-full">
        {/* Customers */}
        <div className="bg-white rounded-lg p-4 shadow-sm flex flex-col justify-center items-center text-center w-full">
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


      </div>



      {/* Monthly Sales Chart */}
      <div className="bg-white rounded-lg p-4 md:p-6 shadow">
        <h2 className="text-lg font-semibold text-[#1B1E25] mb-4">Monthly Sales Chart (June 2025)</h2>
        {isSalesLoading ? (
          <div>Loading...</div>
        ) : salesError ? (
          <div>Error: {salesError.message}</div>
        ) : (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart
              data={salesData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#1B1E25" fontSize={12} />
              <YAxis stroke="#1B1E25" fontSize={12} />
              <Tooltip
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc' }}
                itemStyle={{ color: '#1B1E25' }}
              />
              <Legend wrapperStyle={{ fontSize: '12px', color: '#1B1E25' }} />
              <Line type="monotone" dataKey="total" stroke="#2196F3" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Analytics;