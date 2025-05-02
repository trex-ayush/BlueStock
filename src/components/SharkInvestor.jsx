import React, { useState } from 'react';

const investors = [
  {
    name: "Rakesh Jhunjhunwala",
    img: "/assets/investor/rakesh.png",
    desc: "He started investing in the 90s. His investment st...",
  },
  {
    name: "Anil Goel",
    img: "/assets/1624005931412-removebg-preview.png",
    desc: "He started investing in the 90s. His investment st...",
  },
  {
    name: "Ashish Dhawan",
    img: "/assets/Anil Goel.png",
    desc: "He started investing in the 90s. His investment st...",
  },
  {
    name: "Ashish Kacholia",
    img: "/assets/Ashish Dhawan.png",
    desc: "He started investing in the 90s. His investment st...",
  },
  {
    name: "Dolly Rajeev Khanna",
    img: "/assets/Ashish Kacholia.png",
    desc: "He started investing in the 90s. His investment st...",
  },
  {
    name: "Hemendra Kothari",
    img: "/assets/Dolly Rajeev Khanna.png",
    desc: "He started investing in the 90s. His investment st...",
  },
  {
    name: "Nemish Shah",
    img: "/assets/Hemendra Kothari.png",
    desc: "He started investing in the 90s. His investment st...",
  },
  {
    name: "Porinju Veliyath",
    img: "/assets/Nemish Shah.png",
    desc: "He started investing in the 90s. His investment st...",
  },
];

const SharkInvestor = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInvestors = investors.filter(investor =>
    investor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-[90%] max-w-[1300px] mx-auto mt-10">
      <nav className="text-sm text-indigo-600 mb-2">
        <a href="#" className="hover:underline">Home</a> &gt; <span>Shark Investor</span>
      </nav>

      <div className="mb-8 ml-3">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Shark Investors</h1>
        <p className="text-gray-600 text-sm">Look into the portfolio of these Super Investors to find out their favourite stocks.</p>
      </div>

      <div className="text-right mb-6 mr-3">
        <label className="block text-gray-500 text-sm mb-1 mr-1">Search by Name</label>
        <input
          type="text"
          placeholder="e.g. Damani"
          className="w-52 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ml-3 mb-10">
        {filteredInvestors.map((investor, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-5 text-center transition-transform hover:-translate-y-1 duration-200 min-h-[300px]"
          >
            <img
              src={investor.img}
              alt={investor.name}
              className="w-40 h-40 object-contain mx-auto rounded-md mb-4"
            />
            <h3 className="text-base font-semibold text-gray-800">{investor.name}</h3>
            <p className="text-sm text-gray-600 my-2">{investor.desc}</p>
            <button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold px-4 py-2 rounded-md">
              View Holdings
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharkInvestor;
