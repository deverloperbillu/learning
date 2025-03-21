'use client';
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const Moviedetail = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState<any>([]);

    useEffect(() => {
        if (id) {
            axios.get("https://api.themoviedb.org/3/movie/${id}?api_key=c62c3163dbec54e228f2e9f7af394281")
                .then((res) => setMovies(res.data))
                .catch((err) => console.error(err));
        }
    }, [id]);

    if (!movies) return <p>Loading...</p>;

    return (
        <div className="max-w-4xl mx-auto py-10">
            <Image
                src={movies.poster_path}
                alt={movies.title}
                width={500}
                height={750}
            />
            <h1 className="text-2xl font-bold mt-4">{movies.title}</h1>
            <p className="text-gray-700">{movies.overview}</p>
            <p className="text-gray-600">Release Date: {movies.release_date}</p>
            <p className="text-gray-600">Rating: {movies.vote_average}</p>
        </div>
    );
};
