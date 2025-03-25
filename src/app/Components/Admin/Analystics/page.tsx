"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3200 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 7000 },
  { month: "Jul", sales: 6800 },
  { month: "Aug", sales: 7500 },
  { month: "Sep", sales: 8000 },
  { month: "Oct", sales: 8200 },
  { month: "Nov", sales: 8700 },
  { month: "Dec", sales: 9200 },
];

const Analytics = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-xl">
      <h2 className="text-xl font-semibold mb-4">📊 Sales Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData}>
          <XAxis dataKey="month" stroke="#4B5563" />
          <YAxis stroke="#4B5563" />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
