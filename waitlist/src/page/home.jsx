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
import img20 from "../assets/comma.png";
import img21 from "../assets/..png";
import img22 from "../assets/leftstand.png";
import img23 from "../assets/right-stand.png";
import img24 from "../assets/cars.png";
import img25 from "../assets/facebook1.png";
import img26 from "../assets/instagram1.png";
import img27 from "../assets/twitter1.png";
import img28 from "../assets/left.png";
import img29 from "../assets/right.png";
import img30 from "../assets/round.png";
import img31 from "../assets/mail.png";

function Home() {
  return (
    <div>
      {
        /* Top Logo*/
        <div className="flex flex-col justify-center items-center md:pb-16 pb-10 ">
          <img
            src={danraphImage}
            alt="Danraph"
            className="md:w-[198px] w-[130px]"
          />
        </div>
      }
      {
        /*hero section*/
        <div>
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
                <span
                  className=" inline-flex md:w-[350px] md:h-[75px] w-[150px] h-[35px] sm:w-[210px] sm:h-[50px] bg-blue-200 justify-center items-center px-6"
                  style={{
                    clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)",
                  }}
                >
                  <span className="text-black z-10 ">Fingertips</span>
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
              <a href="https://x.com/danraphservices" target="_blank">
                <img
                  src={img10}
                  alt=""
                  className="cursor-pointer sm:w-[20px] w-[15px] "
                />
              </a>

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
              <a href="https://www.facebook.com/share/1CF27NVZwA/?mibextid=wwXIfr" target="_blank">
                <img
                  src={img13}
                  alt=""
                  className="cursor-pointer sm:w-[20px] w-[15px] "
                />
              </a>
            </div>
          </div>
        </div>
      }
      {
        /*Body1*/
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
      }
      {
        /*Body2*/
        <div className="bg-[#F6F6F6] w-full  flex flex-col justify-center items-center px-2 pt-[90px] pb-[20px]  md:my-[80px] my-[30px] relative ">
          <p className="bg-[#E1F3FF] md:w-[116px] md:h-[116px] w-[80px] h-[80px] rounded-full absolute md:top-20 md:right-28 top-2 right-5 "></p>
          <h1 className="max-w-[710px] z-10  font-semibold md:text-[55px] sm:text-[40px] text-[30px] text-center sm:px-5 ">
            Track every ride, save every minute
          </h1>
          <p className="text-[#74737A] md:text-[22px]  sm:text-[18px] text-center py-2 px-5 ">
            Running a school shuttle service is complex. getting students to
            class on time shouldn’t be.
          </p>

          <div className="grid grid-cols-1  md:grid-cols-3 sm:grid-cols-2  py-8 sm:py-14 gap-4 px-3 max-w-[1179px] w-full relative ">
            <img src={img20} alt="" className="absolute bottom-20 -left-3" />
            <img
              src={img21}
              alt=""
              className="absolute bottom-24 md:-right-[12px] sm:-right-[5px] -right-[3px]"
            />
            <div className="bg-white px-4 py-6 rounded-[10px] flex flex-col gap-4 z-10 ">
              <img src={img17} alt="" className="w-[50px]" />
              <h2 className="text-[20px] font-semibold">
                Easy Ride Management
              </h2>
              <p className="text-[#6C6C6C]">
                Before EcoCruise Shuttle, tracking rides and assigning drivers
                was stressful. Confusion at pickup stations, wasted fuel, and
                missed rides were common.
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

            <div className="bg-white px-4 py-6 rounded-[10px] flex flex-col gap-4 z-10 ">
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
      }
      {
        /*Body3*/
        <div className=" relative   flex justify-center items-center px-3">
          <img src={img23} alt="" className="absolute md:-top-8 top-0 left-0" />
          <img src={img22} alt="" className="absolute bottom-0 right-8 " />

          <div className="grid z-10  pt-10 grid-cols-1 sm:grid-cols-[45%_53%] items-center   md:grid-cols-[40%_59%] lg:gap-10 gap-3 ">
            <div className="w-full z-10 ">
              <h2 className="lg:text-[36px]  sm:text-[27px] text-[22px] font-semibold ">
                Join the Waitlist Today
              </h2>
              <p className="text-[#6C6C6C] lg:text-[20px] sm:text-[16px] py-2 text-[13px] ">
                Don’t miss out! Be among the first to experience stress-free
                school transport.
              </p>
              <img src={img24} alt="" className="w-[444px] " />
            </div>

            <div className="bg-[#E3E3E3] w-full pt-10 pb-8 z-10 px-5 rounded-[5px] shadow-md shadow-[#a5a5a5] ">
              <h2 className="text-[#777777]"> FILL IN THE FIELDS</h2>
              <p className="font-semibold md:text-[32px] sm:text-[26px] text-[22px]  ">
                Join the Waitlist Today
              </p>

              <form action="" className="flex flex-col gap-6  ">
                <div className="flex flex-col ">
                  <label htmlFor="" className="text-[#2A2A2A]">
                    Name
                  </label>
                  <input
                    type="text"
                    className="bg-white outline-0 md:py-[12px] sm:py-[10px] py-[6px] px-[5px] rounded-[5px] "
                  />
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="" className="text-[#2A2A2A]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="bg-white outline-0 md:py-[12px] sm:py-[10px] py-[6px] px-[5px] rounded-[5px] "
                  />
                </div>
                <button className="bg-[#004AAD] text-[white] md:py-[10px] sm:py-[8px] py-[6px] cursor-pointer rounded-[5px] lg:mt-10 mb-3 ">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      }
      {
        /*Footer*/
        <div className="bg-[#F6F6F6] mt-14 h-[85vh] relative  sm:h-[100vh] flex flex-col justify-center items-center overflow-x-hidden ">
          <img
            src={img28}
            alt=""
            className="absolute md:top-[120px] top-2 left-5 w-[150px] md:w-[300px] lg:w-[375px] "
          />
          <img
            src={img29}
            alt=""
            className="absolute md:bottom-28 bottom-5 md:right-0 -right-5   w-[200px] md:w-[400px] lg:w-[467px]"
          />
          <img
            src={img30}
            alt=""
            className="absolute bottom-20 right-44 w-[20px] md:w-[50px]"
          />
          <h1 className="md:text-[48px] text-[25px] px-2 max-w-[980px] w-full text-center text-[#262828] font-display ">
            Join The Waitlist Now And Be Part Of The Smarter Way To Move Around
            Campus.
          </h1>
          <div className="flex flex-wrap items-center justify-center md:gap-5 gap-2 py-10 ">
            <input
              type="email"
              placeholder="Your Email address"
              className=" outline-0 relative md:w-[420px] sm:w-[380px] w-[210px]  py-2 px-1 border-2 border-[#303030] rounded-[8px] placeholder:black "
            />
            <button className=" text-[12px] md:text-[16px] relative flex items-center gap-2 bg-[#E6E6E6] rounded-md px-3 md:py-3 py-2 border-2 border-[#767676] font-semibold hover:bg-[#767676] transition-all duration-300 cursor-pointer ">
              Join waitlist
              <span>
                <img src={img7} alt="" />
              </span>
            </button>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/share/1CF27NVZwA/?mibextid=wwXIfr "
              target="_blank"
            >
              <div className="border flex justify-center border-black rounded-full w-[45px] h-[45px] sm:w-[61px] sm:h-[61px] p-3 cursor-pointer ">
                <img src={img25} alt="" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/danraphservices/"
              target="_blank"
            >
              <div className="border flex justify-center border-black rounded-full w-[45px] h-[45px] sm:w-[61px] sm:h-[61px] p-3 cursor-pointer ">
                <img src={img26} alt="" />
              </div>
            </a>
            <a href="https://x.com/danraphservices" target="_blank">
              <div className="border flex justify-center border-black rounded-full w-[45px] h-[45px] sm:w-[61px] sm:h-[61px] p-3 cursor-pointer ">
                <img src={img27} alt="" />
              </div>
            </a>
          </div>

          <div className="flex items-center gap-2 pt-10 ">
            <img src={img31} alt="" />
            <a href="mailto:Info@danraphservices.com" target="_blank">
              <p className="text-[#727272] font-medium ">
                Info@danraphservices.com
              </p>
            </a>
          </div>
        </div>
      }
    </div>
  );
}

export default Home;
