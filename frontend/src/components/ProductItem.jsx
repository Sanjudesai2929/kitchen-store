import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    
    const {currency} = useContext(ShopContext);

  return (
    <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
   <div className="overflow-hidden bg-[#f8f7f4]">

  <img
    src={image[0]}
    alt={name}
    className="
      w-full
      aspect-square
      object-cover
      transition-transform
      duration-700
      ease-out
      group-hover:scale-105
    "
  />

</div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className=' text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
