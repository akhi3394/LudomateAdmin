import React from 'react'
import { useGetEarningsStatsQuery } from '../../redux/slices/apiSlice'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const Earning = () => {
    const { data: earningsStats, isLoading: earningsLoading, error: earningsError } = useGetEarningsStatsQuery()

    const earningsData = earningsStats?.data?.map(item => ({
        name: item.year.toString(),
        value: item.earning
    })) || []
    return (
        <div className="bg-white rounded-lg p-4 shadow-sm 2xl:max-w-screen-lg lg:max-w-screen-md">
            <h3 className="text-sm font-medium text-[#1B1E25] mb-2">Total Earning: <span className="font-bold">{earningsStats?.totalEarning || 0}</span></h3>
            <ResponsiveContainer width="100%" height={500}>
                <LineChart data={earningsData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#EF4444" strokeWidth={2} dot />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Earning
