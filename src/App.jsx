import CoinModal from "./components/CoinModal";
import NavBar from "./components/NavBar";
import Coins from "./sections/Coins";

function App() {
  return (
    <main className="min-h-screen relative max-container  bg-[#1F2544]">
      <NavBar className="max-container" />
      <section className="h-[90vh]">
        <div className="text-[#FFD0EC] font-mono text-4xl justify-center flex pt-6 ">
          <h1>
            <b>CRYPT</b>
          </h1>
        </div>
        <CoinModal />
      </section>
      <section>
        <div className="text-[#FFD0EC] font-mono text-xl  items-center justify-center flex flex-row">
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
