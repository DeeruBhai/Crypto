import CoinModal from "./components/CoinModal";
import NavBar from "./components/NavBar";
import Coins from "./sections/Coins";

function App() {
  return (
    <main className="min-h-screen relative max-container  bg-[#1F2544]">
      <NavBar className="max-container" />
      <section className="h-[90vh]">
        <div>
          <h1 className="text-[#f4eff2] font-mono  text-4xl justify-center flex pt-4 uppercase ">
            <b>Track and trade</b>
          </h1>{" "}
          <p className="text-[#FFD0EC] uppercase font-mono bg-clip-text text-transparent text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-8xl justify-center flex pt-2 ">
            <b>Crypto currencies</b>
          </p>
        </div>
        <CoinModal />
      </section>
      <section>
        <div className="text-[#FFD0EC] font-mono text-xl  items-center justify-center flex flex-row relative md:mt-16 md:pt-16">
          <p className="w-3/4">
            A cryptocurrency, crypto-currency, or crypto is a digital currency
            designed to work as a medium of exchange through a computer network
            that is not reliant on any central authority, such as a government
            or bank, to uphold or maintain it.
          </p>
        </div>
      </section>

      <section className="x1:padding-l wide:padding-r padding-b bg-[#1F2544] relative mt-20">
        <Coins />
      </section>
    </main>
  );
}

export default App;
