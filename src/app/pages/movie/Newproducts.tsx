'use client';
import React, { useEffect, useState } from 'react';
import { Card } from '../../components/UI/Card';
import axios from 'axios';
import Link from 'next/link';

interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    category: string;
}

export const Newproducts: React.FC = () => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    

    const getProductData = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products`);
            console.log(res.data); 
            setData(res.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    if (loading) return <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center h-full">Loading...</div>;
    if (!data) return <p className="text-center text-red-500">Data not found!</p>;

    return (
        <ul className='max-w-7xl mx-auto grid grid-cols-3 gap-4 w-full my-8'>
            {data.map((apidata) => {
                const productData = {
                    image: apidata.image,
                    title: apidata.title,
                    price: apidata.price,
                    category: apidata.category,
                    id: apidata.id.toString(),
                };
                return (
                    <li key={productData.id} className="list-none">
                        <Link href={`pages/movie/${productData.id}`} >
                            <Card getProductData={productData} />
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
