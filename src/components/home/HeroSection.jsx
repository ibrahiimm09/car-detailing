import React from 'react';
import heroBackground from '../../assets/morris-mn-car-detailing-hero-background.webp';
import heroBackgroundMobile from '../../assets/morris-mn-auto-detailing-mobile-hero.webp';
import {
  StarFilled,
  CalendarOutlined,
  PhoneOutlined,
  CarOutlined
} from '@ant-design/icons';
import {
  Sparkles,
  Droplets,
  Armchair,
  Truck,
  Building2,
  Ship
} from 'lucide-react';

const servicesList = [
  {
    title: 'Interior Detailing',
    icon: <Armchair className="w-5 h-5 text-[#fb2c36]" />
  },
  {
    title: 'Exterior & Hand Wash',
    icon: <Droplets className="w-5 h-5 text-[#fb2c36]" />
  },
  {
    title: 'Full Detail Package',
    icon: <Sparkles className="w-5 h-5 text-[#fb2c36]" />
  },
  {
    title: 'Truck & Farm Vehicles',
    icon: <Truck className="w-5 h-5 text-[#fb2c36]" />
  },
  {
    title: 'Fleet & Commercial',
    icon: <Building2 className="w-5 h-5 text-[#fb2c36]" />
  },
  {
    title: 'Boat & Pontoon Detailing',
    icon: <Ship className="w-5 h-5 text-[#fb2c36]" />
  }
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[52dvh] sm:min-h-[62dvh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-950 py-8 sm:py-12 lg:py-20 ">

      {/* Background Image – Mobile */}
      <div className="absolute inset-x-0 top-0 h-[52dvh] sm:h-[62dvh] z-0 pointer-events-none overflow-hidden block md:hidden">
        <img
          src={heroBackgroundMobile.src || heroBackgroundMobile}
          alt="Professional car detailing service in Morris, MN by Dos Bros Auto Detailing"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="500"
          height="889"
          className="w-full h-full object-cover object-center opacity-45 brightness-90"
        />
      </div>

      {/* Background Image – Desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
        <img
          src={heroBackground.src || heroBackground}
          alt="Premium auto detailing and paint correction services near Stevens County, Minnesota"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          width="1920"
          height="1080"
          className="w-full h-full object-cover object-center opacity-30 brightness-75 scale-105"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Headline, Bio & Action Buttons (7 to 8 Cols on desktop) */}
          <div className="lg:col-span-7 xl:col-span-8 text-left space-y-6">

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-800 shadow-md backdrop-blur-md">
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              <span className="text-white text-xs sm:text-sm font-semibold">
                5.0 Google Rating
              </span>
            </div>

            {/* Main Headline with Highlight Gradient */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight font-['Outfit'] leading-[1.12]">
              Best Mobile Car Detailing <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-amber-500">
                in Morris, MN
              </span>
            </h1>

            {/* Prominent Subtitle */}
            <p className="text-base sm:text-lg font-bold text-neutral-200 font-['Outfit'] leading-relaxed">
              Two brothers from Morris. We come to you.
            </p>

            {/* Detailed Description */}
            <p className="text-xs sm:text-sm text-neutral-100 leading-relaxed font-normal max-w-2xl">
              Dos Bros Detailing is a trusted expert mobile car detailing service based right here in Morris, Minnesota. Reyes and Mariano are two brothers from town, and we bring professional interior and exterior detailing straight to your driveway, your workplace, or your farm site. Serving Morris, Alexandria, Glenwood, Starbuck, Benson, & surrounding towns.
            </p>

            {/* CTA Buttons with Consistent Color Theme */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-600/20 hover:-translate-y-0.5 transition-all duration-200 border border-red-500/40"
              >
                <CalendarOutlined className="text-sm" />
                <span>Book Your Detailing</span>
              </a>

              <a
                href="tel:3202873573"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 shadow-sm hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-md"
              >
                <PhoneOutlined className="text-red-500 text-sm" />
                <span>Call 320-287-3573</span>
              </a>
            </div>

          </div>

          {/* Right Column: "Our Services Include:" Sidebar Card (Strictly Locked Width) */}
          <div className="lg:col-span-5 xl:col-span-4 w-full flex justify-center lg:justify-end lg:mb-0 mb-10">
            <div
              className="relative rounded-2xl bg-neutral-950/85 border border-neutral-800/90 p-4 sm:p-5 lg:p-6 shadow-2xl backdrop-blur-xl w-full max-w-95"
              style={{ maxWidth: '380px' }}
            >

              {/* Card Header with Car Icon */}
              <div className="flex items-center gap-2.5 pb-3.5 mb-3 border-b border-neutral-800/80">
                <CarOutlined className="text-white text-base" />
                <p className="text-sm sm:text-base font-semibold text-white font-['Outfit']">
                  Our Services Include:
                </p>
              </div>

              {/* Services List */}
              <div className="space-y-2.5">
                {servicesList.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-neutral-900/70 border border-neutral-800/80 text-left cursor-default "
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-950 flex items-center justify-center shrink-0 border border-neutral-800">
                      {service.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-200 flex-1">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
