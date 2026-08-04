import React from 'react'
import { assets } from '../assets/assets'
import ScrollReveal from './ScrollReveal'

const OurPolicy = () => {

  const policies = [
    {
      image: assets.exchange_icon,
      title: 'Easy Returns',
      description: 'Simple and hassle-free returns'
    },
    {
      image: assets.quality_icon,
      title: 'Quality Products',
      description: 'Carefully selected kitchen essentials'
    },
    {
      image: assets.support_img,
      title: 'Dedicated Support',
      description: 'We are here whenever you need us'
    }
  ]

  return (

    <div className="
      grid
      grid-cols-1
      sm:grid-cols-3
      gap-10
      py-20
    ">

      {policies.map((item, index) => (

        <ScrollReveal
          key={index}
          delay={index * 150}
          direction="up"
        >

          <div className="
            text-center
            px-5
            group
          ">

            <div className="
              w-20
              h-20
              mx-auto
              rounded-full
              bg-white
              shadow-sm
              flex
              items-center
              justify-center
              transition
              duration-500
              group-hover:-translate-y-2
              group-hover:shadow-lg
            ">

              <img
                src={item.image}
                className="w-10"
                alt={item.title}
              />

            </div>

            <p className="
              mt-5
              font-semibold
              text-[#262626]
            ">
              {item.title}
            </p>

            <p className="
              mt-2
              text-sm
              text-gray-500
            ">
              {item.description}
            </p>

          </div>

        </ScrollReveal>

      ))}

    </div>
  )
}

export default OurPolicy