import React from 'react';
import { CalendarOutlined, PhoneOutlined } from '@ant-design/icons';



const detailVsWashData = [
  {
    feature: "Loose interior dirt",
    quickClean: "Vacuum reaches what it can reach",
    properDetail: "Compressed air blows it out of seams and vents first, then it gets extracted"
  },
  {
    feature: "Salt stains in carpet",
    quickClean: "Wiped down. Comes back in a week.",
    properDetail: "Hot water extraction pulls the salt out of the fiber"
  },
  {
    feature: "Vents, seams, cracks",
    quickClean: "Usually skipped",
    properDetail: "Detail brushes and air, done deliberately"
  },
  {
    feature: "Seats and carpet",
    quickClean: "Spot wiped",
    properDetail: "Shampoo and extraction"
  },
  {
    feature: "Exterior contamination",
    quickClean: "Soap and rinse",
    properDetail: "Iron remover and clay mitt pull out what is bonded to the paint"
  },
  {
    feature: "Protection applied",
    quickClean: "None",
    properDetail: "Spray wax or sealant, lasts months"
  },
  {
    feature: "Time on the vehicle",
    quickClean: "Minutes",
    properDetail: "Hours"
  },
  {
    feature: "How long the result lasts",
    quickClean: "Days",
    properDetail: "Months"
  }
];

export default function CarWashAndVacSection() {
  return (
    <section id="car-wash-and-vac" className="relative bg-neutral-950 py-16 sm:py-20 lg:py-24 border-b border-neutral-900 overflow-hidden ">

      {/* Background Ambient Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-red-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>DETAILING VS CAR WASH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Outfit'] tracking-tight leading-[1.15]">
            What Separates a Detail From a <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-amber-500">
              Car Wash and Vac
            </span>
          </h2>
        </div>

        {/* Sleek, Minimal, Scrollable Comparison Table (Mobile & Desktop) */}
        <div className="overflow-x-auto rounded-2xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm shadow-2xl">
          <table className="w-full min-w-160 text-left border-collapse">
            <thead>
              <tr className="border-b border-neutral-800 bg-neutral-900/70">
                <th className="py-3.5 px-5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider w-[28%] whitespace-nowrap">
                  Treatment Area
                </th>
                <th className="py-3.5 px-5 text-[11px] font-semibold text-neutral-400 uppercase tracking-wider w-[36%] min-w-45">
                  A quick clean
                </th>
                <th className="py-3.5 px-5 text-[11px] font-bold text-red-400 uppercase tracking-wider w-[36%] min-w-55 bg-red-950/20">
                  A proper detail (Dos Bros)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-800/60 text-xs sm:text-sm font-normal">
              {detailVsWashData.map((row, idx) => (
                <tr key={idx} className="hover:bg-neutral-900/40 transition-colors">
                  <td className="py-3.5 px-5 font-medium text-neutral-200 whitespace-nowrap">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-5 text-neutral-400 leading-relaxed min-w-45">
                    {row.quickClean}
                  </td>
                  <td className="py-3.5 px-5 text-neutral-200 bg-red-950/10 font-normal leading-relaxed min-w-55">
                    {row.properDetail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2-Column Zero-Click & Value Math Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch pt-2">

          {/* Right Column: Value Math & Honest Recommendation */}
          <div className="rounded-2xl sm:rounded-3xl border border-neutral-800 bg-neutral-900/40 overflow-hidden flex flex-col justify-between shadow-lg">
            <div>
              {/* Question Header with Theme Red Background */}
              <div className="bg-linear-to-r from-red-600 to-red-700 px-6 py-4 sm:px-7 sm:py-5 border-b border-red-500/30 min-h-18 sm:min-h-20 flex items-center">
                <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] leading-snug">
                  Is it worth paying for something you could technically do yourself?
                </h3>
              </div>

              {/* Answer Content */}
              <div className="p-6 sm:p-7 space-y-3.5 text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                <p>
                  Fair question. Run the math the other way. A car wash every couple of weeks runs you around 300 dollars a year and your vehicle never actually gets clean inside. One Express Full Detail is 245 dollars and the interior stays right for months. Cost per month of actually clean, the detail wins, and you did not spend a single Saturday on it.
                </p>
              </div>
            </div>
          </div>

          {/* Left Column: Zero-click answer block */}
          <div className="rounded-2xl sm:rounded-3xl border border-neutral-800 bg-neutral-900/40 overflow-hidden flex flex-col justify-between shadow-lg">
            <div>
              {/* Question Header with Theme Red Background */}
              <div className="bg-linear-to-r from-red-600 to-red-700 px-6 py-4 sm:px-7 sm:py-5 border-b border-red-500/30 min-h-18 sm:min-h-20 flex items-center">
                <h4 className="text-base sm:text-lg font-bold text-white font-['Outfit'] leading-snug">
                  Is car detailing the same as a car wash?
                </h4>
              </div>

              {/* Answer Content */}
              <div className="p-6 sm:p-7 space-y-3">
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                  <strong className="text-white font-semibold">No.</strong> A car wash cleans the outside surface. Detailing cleans, restores, and protects both the inside and the outside, and the results last months instead of days.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 pb-6 sm:px-7 sm:pb-7">
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-red-600 hover:bg-red-500 transition-colors cursor-pointer"
                >
                  {/* <CalendarOutlined /> */}
                  <span>Get My Free Quote</span>
                </a>

                <a
                  href="tel:3202873573"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 transition-colors"
                >
                  <PhoneOutlined className="text-red-500" />
                  <span>Call 320-287-3573</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
