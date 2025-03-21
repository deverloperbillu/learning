'use client'
import Image from 'next/image'

type ProductData = {
  poster_path: string;
  title: string;
  release_date: string;
};

export const Card = ({getProductData}: { getProductData: ProductData }) => {
const {poster_path, title, release_date} = getProductData;

const formattedDate = new Date(release_date).toLocaleDateString ("en-US",{
    year: "numeric",
    month: "long",
    day: "numeric",
});
  return (
        <div className="product-card text-center bg-white">
            <div className="image-container mb-2">
                <Image 
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                width={500}
                height={750}
                className='w-full h-[470px] object-cover'
                />
            </div>
            <h2 className='text-[#000] text-[14px]'>{title}</h2>
            <h3 className='text-[#000] font-semibold'>{formattedDate}</h3>
        </div>
  )
}
