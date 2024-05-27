import MoviesCarousel from '@/components/MoviesCarousel';
import { getDiscoverMovies } from '@/lib/getMovies';
import React from 'react'
type props={
  params:{
    id:string;
  }
  searchParams:{
    genre:string;
  };
};
async function GenrePage({params:{id},searchParams:{genre}}:props) {
  const movies=await getDiscoverMovies(id);
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-5 mt-32 xl:mt-42'>
        <h1 className='text-4xl font-bold px-10'>Results for {genre}</h1>
        <MoviesCarousel title={'Genre'} movies={movies} isVertical/>
      </div>
    </div>
  )
}

export default GenrePage
