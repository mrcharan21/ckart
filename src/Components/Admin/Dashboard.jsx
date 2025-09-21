import React from "react";
import { Chart } from "react-google-charts";
import { FaChartArea, FaChartBar } from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// ✅ Register ChartJS modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Dashboard() {
  // Google Pie Chart
  const pieData = [
    ["Task", "Hours per Day"],
    ["Work", 9],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  const pieOptions = {
    title: "My Daily Activities",
  };

  // Area Chart
  const areaData = {
    labels: ["Mar 1", "Mar 3", "Mar 5", "Mar 7", "Mar 9", "Mar 11", "Mar 13"],
    datasets: [
      {
        label: "Revenue",
        data: [10000, 30000, 20000, 30000, 35000, 25000, 40000],
        borderColor: "#3b82f6", // Tailwind blue-500
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const areaOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  // Bar Chart
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [4000, 5000, 6000, 8000, 10000, 15000],
        backgroundColor: "#3b82f6", // Tailwind blue-500
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      {/* Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-blue-600 text-white p-4 rounded-lg shadow">
          <h4 className="text-lg font-semibold">Total Customers</h4>
          <h3 className="text-center text-2xl mt-2">
            <span className="bg-red-600 px-3 py-1 rounded-full">10</span>
          </h3>
        </div>

        <div className="bg-green-600 text-white p-4 rounded-lg shadow">
          <h4 className="text-lg font-semibold">Total Orders</h4>
          <h3 className="text-center text-2xl mt-2">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full">
              25
            </span>
          </h3>
        </div>

        <div className="bg-sky-500 text-white p-4 rounded-lg shadow">
          <h4 className="text-lg font-semibold">Pending Tasks</h4>
          <h3 className="text-center text-2xl mt-2">
            <span className="bg-gray-600 px-3 py-1 rounded-full">7</span>
          </h3>
        </div>

        <div className="bg-gray-800 text-white p-4 rounded-lg shadow">
          <h4 className="text-lg font-semibold">Messages</h4>
          <h3 className="text-center text-2xl mt-2">
            <span className="bg-gray-200 text-gray-900 px-3 py-1 rounded-full">
              12
            </span>
          </h3>
        </div>
      </div>

      {/* Google Pie Chart */}
      <div className="mt-6 bg-white shadow rounded-lg p-4">
        <Chart
          chartType="PieChart"
          data={pieData}
          options={pieOptions}
          width={"100%"}
          height={"400px"}
        />
      </div>

      {/* Area & Bar Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-lg shadow">
          <div className="border-b px-4 py-2 font-semibold flex items-center gap-2">
            <FaChartArea className="text-blue-600" />
            Area Chart Example
          </div>
          <div className="p-4">
            <Line data={areaData} options={areaOptions} height={200} />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="border-b px-4 py-2 font-semibold flex items-center gap-2">
            <FaChartBar className="text-blue-600" />
            Bar Chart Example
          </div>
          <div className="p-4">
            <Bar data={barData} options={barOptions} height={200} />
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="mt-6 bg-white rounded-lg shadow p-4">
        <h3 className="text-lg font-bold mb-2">Additional Content</h3>
        <p className="mb-3 text-gray-700">
          This section can be used for any additional information or statistics
          you want to display.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Statistic 1: Value</li>
          <li>Statistic 2: Value</li>
          <li>Statistic 3: Value</li>
        </ul>
      </div>
    </div>
  );
}
