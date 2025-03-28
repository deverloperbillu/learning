'use client'
import Image from 'next/image'

type ProductData = {
  image: string;
  title: string;
  price: number;
  category: string;
};

export const Card = ({getProductData}: { getProductData: ProductData }) => {
const {image, title, price, category} = getProductData;

  return (
        <div className="product-card text-center bg-white">
            <div className="image-container mb-2">
                <Image 
                src={image}
                alt={title}
                width={500}
                height={750}
                className='w-full h-[470px] object-cover'
                />
            </div>
            <h2 className='text-[#000] text-[14px]'>{title}</h2>
            <p className='text-[#000]'>${price}</p>
            <h3 className='text-[#000]'>{category}</h3>
        </div>
  )
}
