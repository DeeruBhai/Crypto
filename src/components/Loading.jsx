import { ColorRing } from "react-loader-spinner";

function Loading() {
  console.log("loading...");
  return (
    <div className="flex justify-center items-center h-[100vh] max-container bg-[#1F2544] p-auto">
      <ColorRing
        visible={true}
        height="100"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
    // <div className="absolute top-[6%] font-xl text-black"> Loading...</div>
  );
}

export default Loading;
