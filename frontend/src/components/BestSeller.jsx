import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import ScrollReveal from './ScrollReveal'

const BestSeller = () => {

  const { products } = useContext(ShopContext)

  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {

    const bestProduct = products.filter(
      (item) => item.bestseller
    )

    setBestSeller(bestProduct.slice(0, 5))

  }, [products])

  return (

    <div className="py-16">

      {/* TITLE */}

      <ScrollReveal>

        <div className="text-center pb-10">

          <Title
            text1="BEST"
            text2="SELLERS"
          />

          <p className="
            max-w-xl
            mx-auto
            mt-3
            text-xs
            sm:text-sm
            md:text-base
            text-gray-500
          ">
            Customer favourites made for smarter kitchens.
          </p>

        </div>

      </ScrollReveal>


      {/* PRODUCTS */}

      <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        gap-x-4
        gap-y-10
      ">

        {bestSeller.map((item, index) => (

          <ScrollReveal
            key={index}
            delay={index * 100}
            direction="up"
          >

            <div className="
              group
              transition-all
              duration-500
              hover:-translate-y-2
            ">

              <ProductItem
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              />

            </div>

          </ScrollReveal>

        ))}

      </div>

    </div>
  )
}

export default BestSeller