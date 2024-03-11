import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { homeicon } from "../assets/icons";

function ErrorPage() {
  return (
    <>
      <div
        className="flex flex-col text-4xl font-bold justify-items-center gap-12 items-center p-52 bg-[#1F2544] text-[#81689D] 
      absolute  w-full"
      >
        Error 404 page not found !
        <Link
          to="/"
          className="font-semibold text-[#FFD0EC] hover:underline hover:text-[#E26EE5]"
        >
          {/* <FontAwesomeIcon icon={faHouse} className="text-black" /> */}
          <img
            src={homeicon}
            alt="headerlogo"
            width={70}
            height={20}
            className="inline-block"
          />
          <span className="p-6">Home Page</span>
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
