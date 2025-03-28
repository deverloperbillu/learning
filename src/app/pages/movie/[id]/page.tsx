'use client';
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { addCart } from "../../../redux/cartSlice";
import { useDispatch } from 'react-redux';
const Moviedetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
        if (id) {
            axios.get(`https://fakestoreapi.com/products/${id}`)
                .then((res) => {
                    setMovie(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [id]);


    if (loading) return <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center h-full">Loading...</div>;
    if (!movie) return <p className="text-center text-red-500">Movie not found!</p>;

    return (
       <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
  <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-5 items-center">
      <div className="relative bg-[#fff]">
        <Image
          className="w-full hidden dark:block max-w-[300px] m-auto"
          src={movie.image}
          alt={movie.title}
		  width={500}
          height={750}
        />
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-0">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
          {movie.title}
        </h1>
        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
          <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
          ${movie.price}
          </p>
        </div>
        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
          <button onClick={() => dispatch(addCart(movie)) }
            className="text-white mt-4 sm:mt-0 flex items-center justify-center bg-[#2563eb] py-[.625rem] px-[1.25rem] rounded-[.5rem]"
            role="button"
          >
            <svg
              className="w-5 h-5 -ms-2 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </button>
        </div>
        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          {movie.description}
        </p>
      </div>
    </div>
  </div>
</section>

    );
};

export default Moviedetail;
function addToCart(movie: any): any {
  throw new Error("Function not implemented.");
}

