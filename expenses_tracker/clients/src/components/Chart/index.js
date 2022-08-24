import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Chart.css"

ChartJS.register(ArcElement, Tooltip, Legend);
const config = {
   data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
         {
            label: "# of Votes",
            data: [300, 60, 100],
            backgroundColor: [
               "rgb(255, 99, 132 )",
               "rgb(54, 162, 235 )",
               "rgb(255, 206, 86 )",
            ],
            borderWidth: 1,
            hoverOffset: 4,
            borderRadius: 30,
            spacing: 6,
         },
      ],
   },
   options: {
      cutout: 95,
   },
};
export default function Chart() {
   return (
      <div className="container .d-flex .justify-center .align-center">
         <div className="chart-inner">
            <Doughnut {...config} />;
         </div>
      </div>)
}
