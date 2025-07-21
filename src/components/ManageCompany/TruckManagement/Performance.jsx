import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const driverData = [
  { month: "2025-01", speed: 62 },
  { month: "2025-02", speed: 45 },
  { month: "2025-03", speed: 54 },
  { month: "2025-04", speed: 80 },
  { month: "2025-05", speed: 100 },
  { month: "2025-06", speed: 70 },
];

const timelinessData = [
  { month: "Jan", value: 65 },
  { month: "Feb", value: 50 },
  { month: "Mar", value: 60 },
  { month: "Apr", value: 100 },
  { month: "May", value: 80 },
  { month: "Jun", value: 70 },
];

const violationsData = [
  { month: "Jan", count: 7 },
  { month: "Feb", count: 7 },
  { month: "Mar", count: 10 },
  { month: "Apr", count: 8 },
  { month: "May", count: 11 },
  { month: "Jun", count: 15 },
];

const Performance = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[22px] font-semibold text-white">Driver Performance</h2>
        <select className="bg-white w-[279px] h-[49px] text-black rounded-md px-3 py-1 shadow-sm text-sm focus:outline-none">
          <option>Last 6 months</option>
          <option>Last 3 months</option>
          <option>This Year</option>
        </select>
      </div>

      {/* Driver Performance Card */}
      <div className="text-white rounded-xl shadow-md mb-6">
        <div className="bg-[#131060] rounded-lg p-4">
          <h3 className="text-[22px] font-semibold mb-4">Driver Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={driverData} barSize={40}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="month" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f215b", border: "none" }}
                labelStyle={{ color: "#fff" }}
                itemStyle={{ color: "#fff" }}
              />
              <Legend
                verticalAlign="bottom"
                wrapperStyle={{ color: "white", marginTop: 10 }}
              />
              <Bar dataKey="speed" name="Average Speed" fill="#5FCB42" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Two charts side by side */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Timeliness Performance */}
        <div className="w-full lg:w-1/2 text-white rounded-xl shadow-md">
          <div className="bg-[#131060] rounded-lg p-4">
            <h3 className="text-[22px] font-semibold mb-4">Timeliness Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={timelinessData} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="month" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1f215b", border: "none" }}
                  labelStyle={{ color: "#fff" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend
                  verticalAlign="bottom"
                  wrapperStyle={{ color: "white", marginTop: 10 }}
                />
                <Bar dataKey="value" name="Timeliness" fill="#5FCB42" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Violations */}
        <div className="w-full lg:w-1/2 text-white rounded-xl shadow-md">
          <div className="bg-[#131060] rounded-lg p-4">
            <h3 className="text-[22px] font-semibold mb-4">Violations</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={violationsData} barSize={40}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                <XAxis dataKey="month" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1f215b", border: "none" }}
                  labelStyle={{ color: "#fff" }}
                  itemStyle={{ color: "#fff" }}
                />
                <Legend
                  verticalAlign="bottom"
                  wrapperStyle={{ color: "white", marginTop: 10 }}
                />
                <Bar dataKey="count" name="Violations" fill="#5FCB42" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
