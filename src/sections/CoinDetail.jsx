import { useEffect, useState } from "react";
import baseData from "../constants";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";
import { FaRankingStar } from "react-icons/fa6";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import CoinsChart from "../components/CoinsChart";

function CoinDetail() {
  const [isLoading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  const params = useParams();
  const [currency, setCurrency] = useState("inr");
  const currencySymbol = currency === "inr" ? "₹ " : "$ ";
  //   const price =
  //     currency === "inr"
  //       ? coin.market_data.current_price.inr
  //       : coin.market_data.current_price.usd;

  useEffect(() => {
    const getcoin = async () => {
      try {
        const res = await fetch(`${baseData.baseUrl}/coins/${params.id}`);
        const data = await res.json();
        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getcoin();
  }, []);
  return (
    <div className="bg-[#1F2544] h-full md:w-full md:h-full min-h-screen">
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="max-container">
            <div className=" max-container  flex flex-col text-[#FFD0EC] p-6 gap-8 w-full md:flex-row ">
              <div className="flex flex-col  justify-start items-center gap-2">
                <div>
                  <img
                    src={coin.image.large}
                    alt={coin.id}
                    className="max-h-40"
                  />
                </div>
                <div className="capitalize pt-2 font-bold text-2xl">
                  {coin.id}
                </div>
                <div>
                  {currencySymbol} {coin.market_data.current_price[currency]}
                </div>
                <div
                  className={
                    coin.market_data.price_change_24h > 0
                      ? "text-center text-green-600"
                      : "text-center text-red-600"
                  }
                >
                  <span
                    className="
                    inline-block pr-2  "
                  >
                    {coin.market_data.price_change_24h > 0 ? (
                      <BiSolidUpArrow />
                    ) : (
                      <BiSolidDownArrow />
                    )}
                  </span>
                  {coin.market_data.price_change_24h.toFixed(4)} %
                </div>
                <div className="flex gap-2">
                  <FaRankingStar className="text-amber-300 text-xl" />#
                  {coin.market_data.market_cap_rank}
                </div>
                <div className="max-w-60 max-h-60 text-xs text-justify indent-8">
                  {coin.description.el.split(".")[0]}.
                </div>
                <div className="flex items-center justify-center w-full gap-4 ">
                  <h3>Currency format :</h3>
                  <button
                    onClick={() => setCurrency("inr")}
                    className={
                      currency === "inr"
                        ? "text-[#E26EE5] border-[#E26EE5] border-[2px] p-2 sm:p-1"
                        : "border-[1px] p-2 border-[#474F7A] hover:border-[#FFD0EC]sm:p-1"
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
                <div className="text-xs pt-4">
                  Last updated on : {coin.last_updated}
                </div>
              </div>
              <div className=" md:w-3/4 lg:w-full lg:h-full">
                <CoinsChart
                  currency={currency}
                  className="md:w-3/4 md:h-full"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CoinDetail;
