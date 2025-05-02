import React from "react";

const Feature = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-[20px] py-[50px] font-sans">
      <div className="flex flex-wrap justify-center gap-[20px] max-w-[1200px] w-full">
        <div className="flex-1 min-w-[240px] max-w-[300px] rounded-[10px] p-[20px] bg-[#f2f0ff]">
          <div className="font-bold text-[#2a00a0] border-b border-[#ddd] pb-[5px] mb-[15px] flex items-center gap-[8px] text-[16px]">
            Learn Chart <span role="img">✏️</span>
          </div>
          <ul className="list-none p-0">
            {["Technical, Fundamental", "Finology, Facts, Equity", "Trading Psychology", "Risk Assessment", "Option Trading"].map((item, i) => (
              <li key={i} className="my-[10px] flex items-center text-[14px] font-medium">
                <span className="bg-[#00c56b] text-white rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center mr-[10px]">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 min-w-[240px] max-w-[300px] rounded-[10px] p-[20px] bg-[#ffeaea]">
          <div className="font-bold text-[#2a00a0] border-b border-[#ddd] pb-[5px] mb-[15px] flex items-center gap-[8px] text-[16px]">
            Analytics <span role="img">📨</span>
          </div>
          <ul className="list-none p-0">
            {["Live Sector Trend", "IPO DRHP", "Sectoral Distribution", "Stock Overview", "TradingView Chart", "Technical, Fundamental"].map((item, i) => (
              <li key={i} className="my-[10px] flex items-center text-[14px] font-medium">
                <span className="bg-[#00c56b] text-white rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center mr-[10px]">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 min-w-[240px] max-w-[300px] rounded-[10px] p-[20px] bg-[#fff2d9]">
          <div className="font-bold text-[#2a00a0] border-b border-[#ddd] pb-[5px] mb-[15px] flex items-center gap-[8px] text-[16px]">
            Club <span role="img">⚡</span>
          </div>
          <ul className="list-none p-0">
            {["Educational Resources", "Real-time Chat", "Forums"].map((item, i) => (
              <li key={i} className="my-[10px] flex items-center text-[14px] font-medium">
                <span className="bg-[#00c56b] text-white rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center mr-[10px]">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-[20px] mt-[60px] w-full">
        <div className="flex-1 min-w-[300px] max-w-[600px] text-center">
          <h2 className="text-[28px] font-bold mb-[15px]">Why do traders love Bluestock?</h2>
          <p className="text-[#777] text-[12px] leading-[1.6] mb-[20px]">
            Bluestock caters to traders looking to enhance
            <br />
            their technical analysis skills, providing a user-friendly
            <br />
            environment to interpret and leverage charts effectively
            <br />
            for strategic decision-making in the financial markets.
          </p>
          <div className="flex gap-[40px] justify-center mt-[20px]">
            <div className="bg-[#fff2d9] px-[25px] py-[15px] rounded-[10px] font-bold">Analytics</div>
            <div className="bg-[#fff2d9] px-[25px] py-[15px] rounded-[10px] font-bold">Blogs</div>
            <div className="bg-[#fff2d9] px-[25px] py-[15px] rounded-[10px] font-bold">Videos</div>
          </div>
        </div>

        <div className="flex-1 min-w-[300px] max-w-[600px] flex flex-col justify-center items-center text-center mt-[40px]">
          <div className="text-[44px] mb-[5px]">🎊</div>
          <div className="w-[140px] h-[140px] rounded-full bg-gradient-to-r from-[hsl(163,96%,82%)] to-[hsl(188,84%,67%)] flex items-center justify-center text-[22px] font-bold text-center mt-[10px]">
            Shark Investor
          </div>
        </div>
      </div>

      <div className="text-center mt-[50px] max-w-[1000px] w-full mx-auto px-[20px]">
        <span className="bg-[#00c56b] text-black text-[12px] font-bold px-[10px] py-[5px] rounded-[5px] inline-block mb-[10px]">Resources</span>
        <h2 className="text-[28px] font-bold mb-[10px]">All things finance, right here</h2>
        <p className="text-[#777] text-[15px] leading-[1.6]">
          Master the art of investing and secure your financial future
          <br />
          with Bluestock learning resources.
        </p>
      </div>
    </div>
  );
};

export default Feature;
