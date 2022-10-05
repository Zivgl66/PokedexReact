import "./barChart.component.css";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const BarChartComponent = ({ stats }) => {
  const labels = [
    "hp",
    "attack",
    "defense",
    "special-attack",
    "special-defense",
    "speed",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        plugins: [ChartDataLabels],

        label: "Stats",
        backgroundColor: "#FFDE00",
        borderColor: "#FFDE00",
        data: [
          stats[0].base_stat,
          stats[1].base_stat,
          stats[2].base_stat,
          stats[3].base_stat,
          stats[4].base_stat,
          stats[5].base_stat,
        ],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} width={50} height={15} />
    </div>
  );
};

export default BarChartComponent;
