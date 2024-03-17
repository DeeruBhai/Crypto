import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import baseData from "../constants";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa6";

function Coins() {
  const [isLoading, setLoading] = useState(true);
  const [coins, setCoins] = useState([1, 2]);
  const [currency, setCurrency] = useState("inr");
  const [search, setSearch] = useState("");
  const currencySymbol = currency === "inr" ? "₹ " : "$ ";

  useEffect(() => {
    const getCoinsData = async () => {
      const res = await fetch(
        `${baseData.baseUrl}/coins/markets?vs_currency=${currency}`
      );
      const coins = await res.json();
      setCoins(coins);
      // console.log(coins);
      setLoading(false);
      console.log("coins");
      console.log(coins);
    };
    getCoinsData();
  }, [currency]);

  return (
    <div className="h-full bg-[#1F2544] ">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="text-[#FFD0EC] h-1/2  max-container bg-[#1F2544] mt-8 ">
          <div className="flex sm:flex-row items-center justify-center w-full gap-8 flex-col">
            <div>
              <input
                type="text"
                placeholder="Search for coin"
                onChange={(e) => setSearch(e.target.value)}
                className="p-1 rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center  gap-4">
              {" "}
              <h3>Currency format :</h3>
              <button
                onClick={() => setCurrency("inr")}
                className={
                  currency === "inr"
                    ? "text-[#E26EE5] border-[#E26EE5] border-[2px] p-2"
                    : "border-[1px] p-2 border-[#474F7A] hover:border-[#FFD0EC]"
                }
              >
                inr
              </button>
              <button
                onClick={() => setCurrency("usd")}
                className={
                  currency === "usd"
                    ? "text-[#E26EE5] border-[#E26EE5] border-[2px] p-2"
                    : "border-[1px] p-2 border-[#474F7A] hover:border-[#FFD0EC]"
                }
              >
                usd
              </button>
            </div>
          </div>
          <table className="w-3/4 m-auto mt-4 border-spacing-y-3.5 overflow-scroll table-auto border-slate-50 border-2">
            <thead className="  border-[#474F7A] border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#1F2544] text-[#1F2544]">
              <tr>
                <th className="max-md:hidden">Logo</th>
                <th className="p-4">Name</th>
                <th>Price</th>
                <th className="px-4">Price Change %</th>
                <th className="px-4">Chart</th>
              </tr>
            </thead>
            <tbody>
              {coins
                .filter((data) => {
                  if (data == "") {
                    return data;
                  } else if (
                    data.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return data;
                  }
                })
                .map((items) => {
                  console.log(items.name);
                  return (
                    <tr
                      key={items.name}
                      className="pt-8   border-[#474F7A] border-2"
                    >
                      <td className="max-md:hidden">
                        <img
                          src={items.image}
                          alt={items.name}
                          className=" py-2  m-auto max-h-20 "
                        />
                      </td>
                      <td className="text-center">{items.name}</td>
                      <td className="text-center">
                        {currencySymbol}

                        {items.current_price}
                      </td>
                      <td
                        className={
                          items.price_change_percentage_24h > 0
                            ? "text-center text-green-600"
                            : "text-center text-red-600"
                        }
                      >
                        {items.price_change_percentage_24h.toFixed(2)}
                      </td>
                      <div className="flex justify-center items-center h-full py-8">
                        <td className=" text-justify ">
                          <Link to={`/home/${items.id}`}>
                            <FaChartLine className=" hover:text-[#E26EE5]" />
                          </Link>
                        </td>
                      </div>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Coins;
