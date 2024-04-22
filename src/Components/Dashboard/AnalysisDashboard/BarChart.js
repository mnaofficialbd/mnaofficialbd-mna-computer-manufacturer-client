import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: [
      "Processor",
      "Graphics C",
      "Headphone",
      "Mouse",
      "SSD",
      "Keyboard",
      "Webcam",
    ],
    datasets: [
      {
        label: "Product Stock",
        data: [1700, 120, 50700, 45000, 2500, 12000, 2000, 65500],
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Price",
        data: [15800, 14950, 1000, 275, 1900, 400, 5250, 350],
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  const options = {};

  return (
    <section className="">
      <Bar options={options} data={data} />
    </section>
  );
};

export default BarChart;