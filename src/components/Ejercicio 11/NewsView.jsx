import { useQuery } from "@tanstack/react-query";

import { fetchNews } from "../../Utils";
import SearchForm from "./SearchForm";


const NewsView = (props) => {

    const { article } = props;

    const { 
        data: news, 
        isLoading, 
        isError 
      } = useQuery({ queryKey: ['news'], queryFn: fetchNews });
    
      if (isLoading) {
        return <div>Loading...</div>;
      }
    
      if (isError) {
        return <div>Error fetching data.</div>;
      }

      if (isError){
        return (
          <>
          <h1 className="text-center text-light mt-4">Rolling News 📰</h1>
          <hr className="w-50 container" />
          <div className="alert alert-danger w-50 container mt-3">
            An error occurred loading the blogs</div>
          </>
        )
      }
    
      return (
        <>
        <h1 className="text-center text-light mt-4">Rolling News 📰</h1>
        <hr className="w-50 container" />
        {isLoading ? (<h3 className="mt-3 text-center">Loading ...</h3>
        ) : <SearchForm article={article} />
    }
      </>
      )
}
export default NewsView;