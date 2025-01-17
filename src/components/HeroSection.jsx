import PropTypes from "prop-types";

const HeroSection = ({
  heading,
  paras,
  linkBar = "",
  picture,
  TrowRev,
  button,
  TspecialCaseWMB = "",
}) => {
  return (
    <>
  {/* Banner 1 - Only appears once */}
  <div className="bg-[#F8F4EF] w-full items-center ">
    
    <div className="h-[10vh] flex justify-center items-center text-5xl font-bold">THERE IS RIDEX FOR EVERYONE</div>
    <div className="flex justify-evenly h-[60vh]">
    <div className="w-1/3 flex flex-col justify-center items-center text-5xl font-bold gap-8">
    <div className="bg-[url('./assets/ACCESIBLE.jpeg')] h-[330px] w-[330px] bg-cover rounded-lg border-2 border-[#B48E5A] text-black"></div>
    ACCESIBLE</div>
    <div className="w-1/3 flex flex-col justify-center bg-[url('')] items-center text-5xl font-bold gap-8">
    <div className="bg-[url('./assets/img2.jpeg')] h-[330px] w-[330px] bg-cover rounded-lg border-2 border-[#B48E5A] text-black"></div>
    AVAILABLE</div>
    <div className="w-1/3 flex flex-col justify-center bg-[url('')] items-center text-5xl font-bold gap-8">
    <div className="bg-[url('./assets/AFFORDABLE.jpeg')] h-[330px] w-[330px] bg-cover rounded-lg border-2 border-[#B48E5A] text-black"></div>
    ANYWHERE</div>
    </div>


    <div className="w-full px-20">
    <div className="flex justify-between h-[50vh] w-full relative top-32">
      <div className="w-1000px">
        <div className=" pl-32" >
          <div className="text-gray-500 font-bold text-[120px]">01</div>
          <div className="text-left font-bold text-[30px] relative top-[-80px] left-[80px]">BECOME A DRIVER,
            <br></br>
            <div className="w-[200px] h-1 bg-purple-400"></div>
            MAKE WHAT YOU NEED
          </div>
        </div>
      </div>
      <div className="bg-[url('./assets/drive.jpeg')] bg-cover w-[300px] h-9/10 relative right-40 rounded-2xl p-8 border-2 border-[#B48E5A]"></div>
    </div>

    <div className="flex justify-between h-[50vh] w-full relative top-32 mt-28">
      
      <div className="bg-[url('./assets/planee.jpeg')] bg-cover w-[300px] h-9/10 relative left-40 rounded-2xl p-8 border-2 border-[#B48E5A]"></div>
      <div className="w-1000px">
        <div className=" pr-32" >
          <div className="text-gray-500 font-bold text-[120px]">02</div>
          <div className="text-left font-bold text-[30px] relative top-[-80px] left-[80px]">THE UBER YOU KNOW,
            <br></br>
            <div className="w-[200px] h-1 bg-purple-400"></div>
            REIMAGINED FOR BLOCKCHAIN
          </div>
        </div>
      </div>
    </div>
    
    <div className="flex justify-between h-[50vh] w-full relative top-32 mt-28">
      <div className="w-1000px">
        <div className=" pl-32" >
          <div className="text-gray-500 font-bold text-[120px]">03</div>
          <div className="text-left font-bold text-[30px] relative top-[-80px] left-[80px]">MAKE MONEY BY
            <br></br>
            <div className="w-[200px] h-1 bg-purple-400"></div>
            BECOMING A DIVER
          </div>
        </div>
      </div>
      <div className="bg-[url('./assets/keys.jpeg')] bg-cover w-[300px] h-9/10 relative right-40 rounded-2xl p-8 border-2 border-[#B48E5A]"></div>
    </div>
  

  <div className="flex justify-between h-[50vh] w-full relative top-32 mt-28">
      
      <div className="bg-[url('./assets/laptop.jpeg')] bg-cover w-[300px] h-9/10 relative left-40 rounded-2xl p-8 border-2 border-[#B48E5A]"></div>
      <div className="w-1000px">
        <div className=" pr-32" >
          <div className="text-gray-500 font-bold text-[120px]">04</div>
          <div className="text-left font-bold text-[30px] relative top-[-80px] left-[80px] ">GET A RIDE
            <br></br>
            <div className="w-[200px] h-1 bg-purple-400"></div>
            WHERE YOU WANT
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  {/* Content Section */}
  {/* <div
    className={`container-lg text-black flex bg-white ${
      TrowRev && "md:flex-row-reverse"
    } flex-col items-center justify-center gap-10 py-6 px-4 md:py-10 md:flex-row md:gap-32 md:px-10`}
  >
    <div className="flex items-center justify-center">
      <img alt="company-logo" width={552} height={552} src={picture} />
    </div>
    <div className="w-full md:w-[454px]">
      <div>
        <h1 className="text-[34px] md:text-[45px] lg:text-[52px] font-bold leading-tight">
          {heading}
        </h1>
        <p className="flex text-[19px] md:text-[23px] mb-[10px] space_grotesk">
          {paras}
        </p>
      </div>

      <div className="flex gap-x-7 h-fit items-center mt-7">
        <div
          className={`${TspecialCaseWMB} h-[48px] bg-black rounded-md flex justify-center items-center hover:bg-GG duration-200`}
        >
          <a href="/" className="text-white h-fit font-medium">
            {button}
          </a>
        </div>

        {linkBar && (
          <div className="items-end h-fit">
            <span className="text-black cursor-pointer">
              {linkBar}
              <div className="w-30 h-1 bg-gray-200 rounded-3xl"></div>
              <div className="w-30 h-1 rounded-3xl hover:{before:bg-grey-200 after:bg-black}"></div>
            </span>
          </div>
        )}
      </div>
    </div>
  </div> */}
  
</>

  );
};

export default HeroSection;

HeroSection.propTypes = {
  heading: PropTypes.string,
  paras: PropTypes.string,
  linkBar: PropTypes.string,
  picture: PropTypes.string,
  TrowRev: PropTypes.bool,
  button: PropTypes.string,
  TspecialCaseWMB: PropTypes.string,
};