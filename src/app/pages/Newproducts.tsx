'use client';
import React, { useEffect, useState } from 'react';
import { Card } from '../components/UI/Card';
import axios from 'axios';
import Link from 'next/link';

interface Product {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
}

export const Newproducts: React.FC = () => {
    const [data, setData] = useState<Product[]>([]);

    const getProductData = async () => {
        try {
            const res = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=c62c3163dbec54e228f2e9f7af394281");
            console.log(res.data); 
            setData(res.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <ul className='max-w-7xl mx-auto grid grid-cols-4 gap-4 w-full my-8'>
            {data.map((apidata) => {
                const productData = {
                    poster_path: apidata.poster_path,
                    title: apidata.title,
                    release_date: apidata.release_date,
                    id: apidata.id.toString(),
                };
                return (
                    <li key={productData.id} className="list-none">
                        <Link href={`/movie/${productData.id}`} >
                            <Card getProductData={productData} />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
