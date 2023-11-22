import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const { data: movies } = useFetch(apiPath, queryTerm)
  useTitle(`Search result for ${queryTerm}`);


  return (
    <main>
      <section className="py-7 text-white">
        <p className="text-3xl text-black-700">{movies.length === 0? `No result found for ${queryTerm}`:`Result for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
       <div className="flex justify-start flex-wrap">
        { movies.map((movie)=>(
          <Card key={movie.id} movie={movie}/>
        )) }
      
       </div>
      </section>
    </main>
  )
}
  