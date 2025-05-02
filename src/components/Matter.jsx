import React from "react";

const Matter = () => {
  return (
    <div className="text-black px-[10px] py-[10px] m-[10px] font-sans">
      <div className="flex flex-wrap justify-between">
        <div className="flex-1 min-w-[300px] max-w-[1000px] mt-[30px] ml-[30px] relative left-[100px]">
          <div className="flex items-center gap-[10px] font-bold mb-[10px]">
            <span className="bg-[#00c56b] text-white px-[12px] py-[5px] rounded-[10px] text-sm">NEW</span>
            <span className="text-[14px] font-bold">App 2.0 →</span>
          </div>
          <h1 className="text-[32px] font-bold leading-[1.4] my-[20px] text-left">
            Free & Open <br />
            Stock Market Analytics <br />
            For GenZ
          </h1>
          <p className="text-[#666] text-[14px] mb-[20px] text-left">
            Thousands of traders and investors in India use our <br />
            stable and reliable mobile app regularly.
          </p>
          <div className="mt-[10px]">
            <p className="text-left font-bold">Get early access</p>
            <div className="flex items-center mt-[8px] border border-[#ccc] rounded-[6px] overflow-hidden w-[280px]">
              <span className="bg-[#eee] px-[10px] text-[14px]">+91</span>
              <input
                type="text"
                placeholder="Enter mobile number"
                className="flex-1 px-[10px] py-[10px] text-[14px] outline-none border-none"
              />
              <button className="bg-[#007bff] text-white px-[12px] py-[10px] text-[14px]">📨</button>
            </div>
          </div>
        </div>
        <div className="bg-[#eef2ff] w-full max-w-[600px] h-[380px] mt-[30px] mr-[50px] rounded-[10px] flex-1" />
      </div>

      <div className="mt-[80px]">
        <p className="text-[14px] text-[#777] mb-[10px] relative left-[210px]">Built for a growing India.</p>
        <div className="flex flex-wrap justify-around">
          <h2 className="text-[26px] leading-[1.5]">
            <span className="text-[#8b00ff] font-bold text-[35px] block">It’s easy</span>
            <span className="font-bold text-[35px] block">It’s powerful</span>
            <span className="text-[#8b00ff] font-bold text-[35px] block">It’s beautiful</span>
          </h2>
          <div className="text-center text-[#444] max-w-[400px] text-[18px]">
            <div className="text-[64px] relative bottom-[60px]">👍🏼</div>
            <p>
              <strong>Beautiful UI</strong> for the modern trader, <br />
              with access on all platforms, <br />
              to <strong>trade on the go</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-[60px]">
        <p className="text-[#888] text-[13px]">Power-packed with everything you need.</p>
        <h2 className="text-[34px] font-bold my-[10px]">Bluestock Highlights</h2>
        <p className="text-[#555] text-[14px] leading-[1.5]">
          Simplified enough for beginners, Detailed enough for experts. <br />
          Track upcoming IPOs, Leverage advanced tools to <br />
          make the best decisions.
        </p>
      </div>
    </div>
  );
};

export default Matter;
