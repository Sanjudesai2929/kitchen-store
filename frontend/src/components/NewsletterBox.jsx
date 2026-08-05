import React from 'react'
import ScrollReveal from './ScrollReveal'

const NewsletterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (

    <ScrollReveal>

      <div className="
        bg-[#262626]
        text-white
        px-6
        sm:px-12
        lg:px-20
        py-16
        text-center
      ">

        <p className="
          text-[#d97706]
          uppercase
          tracking-[4px]
          text-xs
          font-semibold
        ">
          Kitchen Containers
        </p>

        <h2 className="
          prata-regular
          text-3xl
          sm:text-4xl
          mt-4
        ">
          Make Your Kitchen Better
        </h2>

        <p className="
          text-gray-400
          mt-4
          text-sm
          max-w-lg
          mx-auto
        ">
          Subscribe to discover new kitchen products,
          special offers and useful kitchen ideas.
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="
            max-w-xl
            mx-auto
            mt-8
            flex
            bg-white
            p-1
          "
        >

          <input
            className="
              flex-1
              px-4
              py-3
              outline-none
              text-black
              text-sm
            "
            type="email"
            placeholder="Enter your email"
            required
          />

          <button
            type="submit"
            className="
              bg-[#d97706]
              text-white
              px-6
              sm:px-10
              text-xs
              font-semibold
              tracking-wide
              hover:bg-[#b45309]
              transition
            "
          >
            SUBSCRIBE
          </button>

        </form>

      </div>

    </ScrollReveal>
  )
}

export default NewsletterBox