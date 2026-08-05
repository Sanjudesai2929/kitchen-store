import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <section className="w-full bg-[#faf9f6] border border-gray-200 overflow-hidden">

      <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row min-h-[550px]">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 flex items-center px-8 sm:px-12 lg:px-20 py-16 md:py-0">

          <div className="max-w-xl">

            {/* Small Heading */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-[2px] bg-[#d97706]"></span>

              <p className="text-[#d97706] uppercase tracking-[3px] text-sm font-semibold">
                Kitchen Essentials
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="prata-regular text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-[#262626]">
              Make Your Kitchen
              <br />

              <span className="text-[#d97706]">
                Better & Beautiful
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-sm sm:text-base leading-7 max-w-lg">
              Discover smart, stylish and practical kitchen essentials
              designed to make everyday cooking easier, organized and
              enjoyable.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">

              <button
                className="bg-[#262626] text-white px-8 py-4 text-sm
                font-semibold tracking-wide hover:bg-[#d97706]
                transition-all duration-300"
              >
                SHOP NOW
              </button>

              <button
                className="border border-[#262626] text-[#262626]
                px-8 py-4 text-sm font-semibold tracking-wide
                hover:bg-[#262626] hover:text-white
                transition-all duration-300"
              >
                VIEW COLLECTION
              </button>

            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mt-10 pt-6 border-t border-gray-200">

              <div>
                <p className="font-semibold text-[#262626] text-sm">
                  ✓ Quality Products
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#262626] text-sm">
                  ✓ Smart Kitchen
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#262626] text-sm">
                  ✓ Easy Shopping
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0">

          {/* Background Shape */}
          <div className="absolute inset-0 bg-[#f3e9dc]"></div>

          {/* Decorative Circle */}
          <div className="absolute w-[350px] h-[350px]
            lg:w-[500px] lg:h-[500px]
            rounded-full bg-[#e8d3b5]
            right-[-100px] top-1/2
            -translate-y-1/2">
          </div>

          {/* Product Image */}
          <img
            src={assets.hero_img}
            alt="Kitchen Containers Kitchen Products"
            className="
              relative
              z-10
              w-full
              h-full
              object-cover
              md:object-contain
              object-center
            "
          />

          {/* Floating Badge */}
          <div className="
            absolute
            z-20
            bottom-8
            left-8
            bg-white
            px-6
            py-4
            shadow-lg
          ">
            <p className="text-xs uppercase tracking-widest text-gray-500">
               Kitchen Containers
            </p>

            <p className="text-lg font-semibold text-[#262626] mt-1">
              Smart • Stylish • Practical
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero