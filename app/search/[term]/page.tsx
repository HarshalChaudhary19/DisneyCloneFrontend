import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
//url is cashing key
type props={
    params:{
        term:string;
    };
};

async function SearchPage({params:{term}}:props) {
  if(!term) notFound();
  const termToUse=decodeURI(term);
  //Api to get movies by search
  const movies=await getSearchedMovies(termToUse);
  //Another api to get trending movies
  const Popularmovies=await getPopularMovies();
  return (  
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-4xl font-bold px-10"> Results for {termToUse}</h1>
        <MoviesCarousel title="Movies" movies={movies} isVertical/>
        <MoviesCarousel title="You may also like" movies={Popularmovies}/>
      </div>
    </div>
  )
}

export default SearchPage
