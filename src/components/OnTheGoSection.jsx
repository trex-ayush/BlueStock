import React from "react";
import qrImage from "../assets/app-qr.png";
import appScreenshot from "../assets/s20.jpg";
import users from "../assets/app-qr.png";

const OnTheGoSection = () => {
  return (
    <div className="font-sans px-[20px] py-[5px]">
      <div className="flex flex-wrap justify-around items-center">
        <div className="flex-1 min-w-[300px] max-w-[500px] relative top-[-30px] left-[60px]">
          <h2 className="text-[28px] font-bold">On The Go</h2>
          <p className="text-[#666] text-[14px] leading-[1.6] my-[15px]">
            We believe that everyone should be able to wield technology while
            learn trading. Use Bluestock on the go, on your mobile device.
            Experience the ultimate trading experience on Android or IOS.
          </p>

          <div className="flex items-center mt-[70px] flex-wrap">
            <img src={qrImage} alt="QR Code" className="w-[150px] h-auto" />
            <div className="ml-[30px] mt-[15px] sm:mt-0">
              <h4 className="text-[#0033ff] font-bold text-[25px] mb-[5px]">Scan and download</h4>
              <span className="text-[15px] text-[#777]">
                Use your android device <br />
                to download the app
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center mt-[20px]">
          <img src={appScreenshot} alt="App Preview" className="w-full max-w-[300px]" />
        </div>
      </div>

      <div className="bg-[#eef2ff] p-[20px] m-[20px] rounded-[10px] flex flex-wrap justify-between items-center gap-[30px]">
        <div className="flex flex-wrap gap-[50px] text-center">
          <span className="text-[24px] font-bold">
            <strong className="text-[hsl(228,100%,60%)]">Bluestock App 2.0</strong> is Live Now!
          </span>
          <div className="relative top-[12px] text-gray-500 font-light">Download Our App</div>
          <div className="flex gap-[20px] justify-end items-center flex-wrap">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-[40px]"
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-[40px]"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="text-right">
        <img src={users} alt="Users" className="h-[30px] mb-[5px] inline-block" />
        <div className="text-[14px] text-[#222]">
          ⭐⭐⭐⭐⭐ <span>(5/5 by 100+ users)</span>
        </div>
      </div>
    </div>
  );
};

export default OnTheGoSection;
