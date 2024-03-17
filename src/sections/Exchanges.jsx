import { useEffect, useState } from "react";
import baseData from "../constants";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
function Exchanges() {
  const [isLoading, setLoading] = useState(true);
  const [exchangess, setExchanges] = useState([1, 2]);

  useEffect(() => {
    const getExchangeData = async () => {
      const res = await fetch(`${baseData.baseUrl}/exchanges`);
      const exchangess = await res.json();
      setExchanges(exchangess);
      // console.log(exchangess);
      setLoading(false);
      console.log("exchangess");
      console.log(exchangess);
    };
    getExchangeData();
  }, []);

  return (
    <div className="h-full bg-[#1F2544]">
      <NavBar />
      <section>{/* <about cryptocurrency> */}</section>
      <section>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="text-[#FFD0EC] h-1/2  max-container bg-[#1F2544] pt-8 ">
            <div className="font-mono text-lg justify-center items-center flex   pb-8">
              <p className="w-3/4">
                A cryptocurrency exchange, or a digital currency exchange (DCE),
                is a business that allows customers to trade cryptocurrencies or
                digital currencies for other assets, such as conventional fiat
                money or other digital currencies. Exchanges may accept credit
                card payments, wire transfers or other forms of payment in
                exchange for digital currencies or cryptocurrencies. A
                cryptocurrency exchange can be a market maker that typically
                takes the bid–ask spreads as a transaction commission for its
                service or, as a matching platform, simply charges fees.{" "}
              </p>
            </div>

            <table className="w-3/4 m-auto border-spacing-y-3.5 overflow-scroll table-auto border-[#474F7A] border-2">
              <thead className="  border-[#474F7A] border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[#1F2544] text-[#1F2544]">
                <tr>
                  <th className="max-md:hidden">Logo</th>
                  <th className="p-4">Name</th>
                  <th>Trade volume</th>
                  <th>Trust score rank</th>
                  <th>Trust score </th>
                </tr>
              </thead>
              <tbody>
                {exchangess.map((items) => {
                  console.log(items.name);
                  return (
                    <tr
                      key={items.name}
                      className="pt-8   border-[#474F7A] border-2"
                    >
                      <td className="px-8 max-md:hidden">
                        <img
                          src={items.image}
                          alt={items.name}
                          height={"60px"}
                          className="py-2 m-auto"
                        />
                      </td>
                      <td className="text-center">{items.name}</td>
                      <td className="text-center">
                        {items.trade_volume_24h_btc_normalized}
                      </td>
                      <td className="text-center">{items.trust_score_rank}</td>
                      <td className="text-center">{items.trust_score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export default Exchanges;
//<ExcahngeCards key={items.id} exchangeData={items} />
