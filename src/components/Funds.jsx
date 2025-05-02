import React from 'react';

const Funds = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* Fund Card 1 */}
      <div className="bg-gray-100 rounded-lg p-4 shadow">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src="https://www.canararobeco.com/images/logo.png" alt="Canara Robeco" className="h-8" />
            <h4 className="text-lg font-semibold">Canara Bank</h4>
          </div>
          <div className="flex flex-col text-sm md:text-right">
            <p>AUM: <br /> ₹ 10,816.61 Cr.</p>
            <p>Expense Ratio: 0.5%</p>
            <p className="text-green-600">5Y CAGR: ▲ 18.48%</p>
          </div>
        </div>
        <div className="mt-4">
          <h5 className="font-semibold mb-1">Performance</h5>
          <p className="text-sm">The fund’s annualised performance has been 15.3% since inception.</p>
        </div>
        <div className="mt-4">
          <h5 className="font-semibold mb-1">Risk</h5>
          <p className="text-sm">The fund has been categorised as Very High by SEBI and has a standard deviation of 9.09% vs its category average of 9.61%.</p>
        </div>
        <div className="mt-4">
          <h5 className="font-semibold mb-1">Composition</h5>
          <p className="text-sm">Large Cap makes up for the majority of the fund at 89.57% along with the largest allocation towards Private Banks at 22.27%.</p>
        </div>
      </div>

      {/* Repeat for other cards */}
      {[...Array(5)].map((_, idx) => (
        <div key={idx} className="bg-gray-100 rounded-lg p-4 shadow">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src="https://www.barodabnpparibasmf.in/images/logo.png" alt={`Fund ${idx}`} className="h-8" />
              <h4 className="text-lg font-semibold">Baroda BNP</h4>
            </div>
            <div className="flex flex-col text-sm md:text-right">
              <p>AUM: ₹ 1,693.42 Cr.</p>
              <p>Expense Ratio: 0.92%</p>
              <p className="text-green-600">5Y CAGR: ▲ 18.19%</p>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="font-semibold mb-1">Performance</h5>
            <p className="text-sm">The fund’s annualised performance has been 15.3% since inception.</p>
          </div>
          <div className="mt-4">
            <h5 className="font-semibold mb-1">Risk</h5>
            <p className="text-sm">The fund has been categorised as Very High by SEBI and has a standard deviation of 9.05% vs its category average of 9.61%.</p>
          </div>
          <div className="mt-4">
            <h5 className="font-semibold mb-1">Composition</h5>
            <p className="text-sm">Large Cap makes up for the majority of the fund at 78.74% along with the largest allocation towards Private Banks at 18.98%.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Funds;
