import { useEffect, useState } from "react";
import baseData from "../constants";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Loading from "./Loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function CoinsChart({ currency }) {
  const [chartData, setChartData] = useState([]);
  const [days, setDays] = useState(1);
  const id = useParams();

  useEffect(() => {
    const CoinChart = async () => {
      try {
        const res = await fetch(
          `${baseData.baseUrl}/coins/${id.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        const data = await res.json();
        setChartData(data.prices);
        // console.log("chart:", data.prices);
      } catch (error) {
        console.log(error);
      }
    };
    CoinChart();
  }, [currency, id, days]);

  const myData = {
    labels: chartData.map((value) => {
      const date = new Date(value[0]);
      const time =
        date.getHours() > 12
          ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
          : `${date.getHours()} : ${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: ` Price in Past Days ${days} in ${currency} `,
        data: chartData.map((value) => value[1]),
        borderColor: "#FFC436",
        borderWidth: "3",
      },
    ],
  };

  return (
    <>
      {chartData.length === 0 ? (
        <Loading />
      ) : (
        <div>
          {/* <Line data={myData} />  */}
          <Line
            data={myData}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }}
            // style={{ width: "60rem" }}
            className="md:w-1  "
          />

          <div className="mt-4 flex gap-4 justify-center">
            <button
              onClick={() => setDays(1)}
              className={
                days === 1
                  ? "text-[#E26EE5] border-[#E26EE5] border-[2px] p-2 "
                  : "border-[1px] p-2 border-[#474F7A] hover:border-[#FFD0EC]"
              }
            >
              24 hours
            </button>
            <button
              onClick={() => setDays(30)}
              className={
                days === 30
                  ? "text-[#E26EE5] border-[#E26EE5] border-[2px] p-2 "
                  : "border-[1px] p-2 border-[#474F7A] hover:border-[#FFD0EC]"
              }
            >
              1 Month
            </button>
            {/* <button onClick={() => setDays(365)}>1 Year</button> */}
          </div>
        </div>
      )}
    </>
  );
}

export default CoinsChart;
