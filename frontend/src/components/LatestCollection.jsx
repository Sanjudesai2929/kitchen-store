import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import ScrollReveal from './ScrollReveal'

const LatestCollection = () => {

  const { products } = useContext(ShopContext)

  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
  }, [products])

  return (

    <div className="py-16">

      {/* TITLE */}

      <ScrollReveal>

        <div className="text-center pb-10">

          <Title
            text1="LATEST"
            text2="COLLECTIONS"
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
            Fresh kitchen essentials designed to make
            everyday cooking easier and more beautiful.
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

        {latestProducts.map((item, index) => (

          <ScrollReveal
            key={index}
            delay={index * 80}
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
                image={item.image}
                name={item.name}
                price={item.price}
              />

            </div>

          </ScrollReveal>

        ))}

      </div>

    </div>
  )
}

export default LatestCollection