import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <>
      <div
        className="w-full bg-cover bg-center h-[100vh] flex items-center justify-center rounded-b-[500px]"
        style={{
          backgroundImage: "url('https://t3.ftcdn.net/jpg/04/71/21/78/360_F_471217874_Zz50oiyf7MCLoxABYk71LgtSAa8rEO8a.jpg')",
        }}
      >
        <div className="flex justify-between items-center gap-32 h-full w-full text-white ">
          <div className="w-1/2 h-full flex flex-col justify-top items-center gap-8 relative top-[25%]">
            <h1 className="animate-slide-from-left font-bold text-[110px] text-black">COMFORT</h1>
            <p className="animate-fade-in text-[16px] px-[50px] box-border w-[500px] text-left font-semibold text-submain text-[#B48E5A]">
              RIDEX OFFERS ECO-FRIENDLY TRAVEL WITH SECURE, COMFORTABLE RIDES. OUR SUSTAINABLE PRACTICES REDUCE ENVIRONMENTAL IMPACT, WHILE ENSURING SAFETY AND COMFORT REMAIN TOP PRIORITIES FOR EVERY PASSENGER.
            </p>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-top items-center gap-8 relative top-[25%]">
            <h1 className="animate-slide-from-right font-bold text-[110px] text-black">VOYAGES</h1>
            <p className="animate-fade-in text-[16px] px-[100px] box-border w-[500px] text-right font-semibold text-[#B48E5A]">
              REQUEST A RIDE FOR NOW OR LATER. REQUEST A RIDE, HOP IN, AND GO.
            </p>
            <Link
              to="/book-ride"
              className="opacity-1 animate-fade-in-delayed text-[20px] border-2 rounded-md font-semibold border-[#B48E5A] px-4 py-2 hover:bg-opacity-50 hover:bg-main transition hover:scale-125 hover:backdrop-blur-sm mr-[-150px] hover:border-purple-700 text-[#B48E5A]"
            >
              GET STARTED
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
