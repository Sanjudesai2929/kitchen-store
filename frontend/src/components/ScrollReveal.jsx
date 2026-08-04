import React, { useEffect, useRef, useState } from 'react'

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up'
}) => {

  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }

      },
      {
        threshold: 0.15
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()

  }, [])

  const directionClass = {
    up: 'translate-y-10',
    left: '-translate-x-10',
    right: 'translate-x-10',
    none: ''
  }

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`
      }}
      className={`
        transition-all
        duration-700
        ease-out
        ${visible
          ? 'opacity-100 translate-x-0 translate-y-0'
          : `opacity-0 ${directionClass[direction]}`
        }
        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default ScrollReveal