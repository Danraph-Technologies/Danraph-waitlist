import React from "react";
import danraphImage from "../assets/danraph-image.png";
import img1 from "../assets/danraph-icon.png";
import img2 from "../assets/danraph-location.png";
import img3 from "../assets/flame.png";
import img4 from "../assets/icon.png";
import img5 from "../assets/danraph-vector.png";
import img6 from "../assets/calender.png";
import img7 from "../assets/arrow.png";
import img8 from "../assets/locatiooon.png";
import img9 from "../assets/Avatars.png";
import img10 from "../assets/twitter.png";
import img11 from "../assets/youtube.png";
import img12 from "../assets/linkedin.png";
import img13 from "../assets/FacebookLogo.png";
import img14 from "../assets/waitlist frame.png";
import img15 from "../assets/car frame.png";
import img16 from "../assets/frame run.png";
import img17 from "../assets/hand-1.png";
import img18 from "../assets/money.png";
import img19 from "../assets/money hand.png";
import img20 from "../assets/comma.png"
import img21 from "../assets/..png"

function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center md:pb-16 pb-10 ">
        <img
          src={danraphImage}
          alt="Danraph"
          className="md:w-[198px] w-[130px]"
        />
      </div>

      <div className="flex flex-col justify-center items-center w-full ">
        <div className="flex items-center md:gap-5 gap-2 justify-between w-full max-w-[1025px] px-5 ">
          <div className="md:-translate-y-[20px] -translate-y-[10px]">
            <img
              src={img1}
              alt=""
              className="md:w-full sm:w-[40px] w-[20px] "
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="bg-black p-1 rounded-[5px] ">
              <img
                src={img2}
                alt=""
                className="md:w-[18px] sm:w-[14px] w-[10px]"
              />
            </div>
            <div className="flex gap-2 items-center bg-black text-white rounded-[5px] px-2 py-[2px]">
              <img src={img3} alt="" className="w-[14px]" />
              <p className="md:text-[16px] sm:text-[14px] text-[12px] text-center ">
                Swift transport coming your way
              </p>
            </div>
          </div>

          <div className="md:translate-y-[30px]  translate-y-[10px]">
            <img
              src={img4}
              alt="danraph-logo"
              className="md:w-[68px] sm:w-[45px] w-[30px]"
            />
          </div>
        </div>

        <div className="md:pt-[50px] pt-[20px] md:w-[800px] sm:w-[500px] w-[309px] ">
          <h1 className="md:text-[60px] sm:text-[35px] text-[25px] px-2 font-extrabold text-center ">
            Smart Campus Shuttle at Your
            <span className="relative  ">
              <img
                src={img5}
                alt="color"
                className="absolute md:top-5 top-1 left-0 "
              />
              <span className="relative z-10 text-black md:px-5 sm:px-4 px-2">
                Fingertips
              </span>
            </span>
          </h1>
          <p className="font-medium md:text-[24px] sm:text-[18px] text-[16px] p-2 text-center text-[#0A111A]">
            Join the waitlist today and enjoy safer, quicker, and more
            affordable rides around campus.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex  justify-between max-w-[1000px] w-full sm:px-5 px-3  gap-3 items-center md:pt-[20px] pt-[7px]">
          <img
            src={img6}
            alt=""
            className=" md:-translate-y-10 -translate-y-[130px] md:w-[58px] sm:w-[38px] w-[20px]  "
          />
          <div className="flex flex-wrap items-center justify-center md:gap-5 gap-2 ">
            <input
              type="email"
              placeholder="Your Email address"
              className=" outline-0 relative md:w-[424px] sm:w-[380px] w-[210px] p-md:2 p-1 border-2 border-[#303030] rounded-[8px] placeholder:black "
            />
            <button className=" text-[12px] md:text-[16px] relative flex items-center gap-2 bg-[#E6E6E6] rounded-md px-3 md:py-2 py-1 border-2 border-[#767676] font-semibold hover:bg-[#767676] transition-all duration-300 cursor-pointer ">
              Join waitlist
              <span>
                <img src={img7} alt="" />
              </span>
            </button>
          </div>

          <img
            src={img8}
            alt=""
            className=" md:translate-y-8 -translate-y-[70px] md:w-[60px] sm:w-[45px] w-[30px] "
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center sm:gap-5 gap-3 py-4 px-2 ">
        <img src={img9} alt="" className="sm:w-[90px] w-[50px] " />
        <p className="font-semibold sm:text-[16px] text-[14px] ">
          Join 2,000+ others who signed up
        </p>
        <p className="hidden sm:block">|</p>
        <div className="flex items-center gap-1">
          <img
            src={img10}
            alt=""
            className="cursor-pointer sm:w-[20px] w-[15px] "
          />
          <img
            src={img11}
            alt=""
            className="cursor-pointer sm:w-[20px] w-[15px] "
          />
          <img
            src={img12}
            alt=""
            className="cursor-pointer sm:w-[20px] w-[15px] "
          />
          <img
            src={img13}
            alt=""
            className="cursor-pointer sm:w-[20px] w-[15px] "
          />
        </div>
      </div>
      <div className="flex justify-center items-center px-5 sm:py-10 py-5 ">
        <div className="grid sm:gap-10 gap-7 mx-auto sm:grid-cols-2 grid-cols-1 md:grid-cols-3 max-w-[1080px] w-full ">
          <div
            className="flex bg-[#F6F6F6] shadow-md shadow-[#a8a8a8] py-10 px-3 md:px-0 rounded-[10px] 
            md:bg-transparent md:shadow-none md:py-0 md:rounded-none flex-col gap-2 leading-[35px] text-center items-center "
          >
            <img src={img14} alt="" className="w-[40px] sm:w-[56px]" />
            <h2 className="sm:text-[29.5px] text-[20px] font-medium">
              Book Your Ride
            </h2>
            <p>Request a shuttle via the app</p>
          </div>
          <div
            className="flex bg-[#F6F6F6] shadow-md shadow-[#a8a8a8] py-10 px-3 md:px-0 rounded-[10px] 
            md:bg-transparent md:shadow-none md:py-0 md:rounded-none flex-col gap-2 leading-[35px] text-center items-center "
          >
            <img src={img15} alt="" className="w-[40px] sm:w-[56px]" />
            <h2 className="sm:text-[29.5px] text-[20px] font-medium">
              Go to Your Station
            </h2>
            <p>Get assigned to the nearest pickup point</p>
          </div>
          <div
            className="flex bg-[#F6F6F6] shadow-md shadow-[#a8a8a8] py-10 px-3 md:px-0 rounded-[10px] 
            md:bg-transparent md:shadow-none md:py-0 md:rounded-none flex-col gap-2 leading-[35px] text-center items-center "
          >
            <img src={img16} alt="" className="w-[40px] sm:w-[56px]" />
            <h2 className="sm:text-[29.5px] text-[20px] font-medium">
              Hop In & Go
            </h2>
            <p>Ride with ease, no confusion, no delays</p>
          </div>
        </div>
      </div>
      <div className="bg-[#F6F6F6] w-full  flex flex-col justify-center items-center px-2 pt-[90px] pb-[20px]  md:my-[80px] my-[30px] relative ">
        <p className="bg-[#E1F3FF] md:w-[116px] md:h-[116px] w-[80px] h-[80px] rounded-full absolute md:top-20 md:right-28 top-2 right-5 "></p>
        <h1 className="max-w-[710px]  font-semibold md:text-[55px] sm:text-[40px] text-[30px] text-center sm:px-5 ">
          Track every ride, save every minute
        </h1>
        <p className="text-[#74737A] md:text-[22px]  sm:text-[18px] text-center py-2 px-5 ">
          Running a school shuttle service is complex. getting students to class
          on time shouldn’t be.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2  py-8 sm:py-14 gap-4 px-3 max-w-[1179px] w-full relative ">
            <img src={img20} alt="" className="absolute bottom-20 -left-3"/>
            <img src={img21} alt="" className="absolute bottom-24 md:-right-[14px] sm:-right-[5px] -right-[3px]"/>
          <div className="bg-white px-4 py-6 rounded-[10px] flex flex-col gap-4 z-10 ">
            <img src={img17} alt="" className="w-[50px]" />
            <h2 className="text-[20px] font-semibold">Easy Ride Management</h2>
            <p className="text-[#6C6C6C]">
              Before EcoCruise Shuttle, tracking rides and assigning drivers was
              stressful. Confusion at pickup stations, wasted fuel, and missed
              rides were common.
            </p>
          </div>

          <div className="bg-white px-4 py-6 rounded-[10px] flex flex-col gap-4 z-10 ">
            <img src={img18} alt="" className="w-[50px]" />
            <h2 className="text-[20px] font-semibold">
              Smart Student Bookings
            </h2>
            <p className="text-[#6C6C6C]">
              With EcoCruise Shuttle, students can request rides directly from
              the app. The system matches them to the nearest pickup station.
            </p>
          </div>

          <div className="bg-white px-4 py-6 rounded-[10px] flex flex-col gap-4 z-10">
            <img src={img19} alt="" className="w-[50px]" />
            <h2 className="text-[20px] font-semibold">
              Optimized Driver Assignment
            </h2>
            <p className="text-[#6C6C6C]">
              Students and drivers get instant updates from pickup station
              alerts to trip confirmations. Everyone stays informed in real
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
