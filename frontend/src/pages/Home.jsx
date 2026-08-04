import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ScrollReveal from '../components/ScrollReveal'

const Home = () => {
  return (
    <main className="bg-white overflow-hidden">

      {/* HERO */}
      <section>
        <Hero />
      </section>


      {/* LATEST COLLECTION */}
      <ScrollReveal direction="up">
        <section className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
          <LatestCollection />
        </section>
      </ScrollReveal>


      {/* KITCHEN STORY */}
      <ScrollReveal direction="left">
        <section className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 py-16">

          <div className="
            relative
            overflow-hidden
            bg-[#f5eee4]
            min-h-[380px]
            flex
            items-center
          ">

            {/* Background decoration */}
            <div className="
              absolute
              w-[350px]
              h-[350px]
              rounded-full
              bg-[#ead8bd]
              -right-32
              -top-32
            "></div>

            <div className="relative z-10 w-full md:w-1/2 px-8 sm:px-12 lg:px-16 py-12">

              <p className="
                text-[#d97706]
                text-xs
                uppercase
                tracking-[4px]
                font-semibold
                mb-4
              ">
                Kitchen Zar
              </p>

              <h2 className="
                prata-regular
                text-3xl
                sm:text-4xl
                lg:text-5xl
                text-[#262626]
                leading-tight
              ">
                Everything Your
                <br />
                Kitchen Needs.
              </h2>

              <p className="
                mt-5
                text-gray-600
                text-sm
                sm:text-base
                leading-7
                max-w-lg
              ">
                From smart storage solutions to everyday kitchen essentials,
                discover products designed to bring simplicity, style and
                convenience into your home.
              </p>

              <button className="
                mt-7
                bg-[#262626]
                text-white
                px-7
                py-3
                text-sm
                tracking-wide
                hover:bg-[#d97706]
                transition
              ">
                EXPLORE COLLECTION
              </button>

            </div>

            {/* Decorative right side */}
            <div className="
              hidden
              md:flex
              absolute
              right-0
              top-0
              w-1/2
              h-full
              items-center
              justify-center
            ">

              <div className="
                text-[150px]
                lg:text-[190px]
                opacity-10
                select-none
              ">
                🍳
              </div>

            </div>

          </div>

        </section>
      </ScrollReveal>


      {/* BEST SELLERS */}
      <ScrollReveal direction="up">
        <section className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
          <BestSeller />
        </section>
      </ScrollReveal>


      {/* POLICY */}
      <ScrollReveal direction="up">
        <section className="mt-16 bg-[#faf9f6]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12">
            <OurPolicy />
          </div>
        </section>
      </ScrollReveal>


      {/* NEWSLETTER */}
      <ScrollReveal direction="up">
        <section className="
          max-w-[1500px]
          mx-auto
          px-4
          sm:px-8
          lg:px-12
          py-20
        ">
          <NewsletterBox />
        </section>
      </ScrollReveal>

    </main>
  )
}

export default Home