import { useQuery } from "@tanstack/react-query";

import SearchForm from "./SearchForm";

import { getNews } from "./news";


const NewsView = (props) => {

    const { article } = props;

    const { 
        isLoading, 
        isError ,
      } = useQuery({ queryKey: ['news'], queryFn: getNews });
    
      if (isLoading) {
        return <div className="text-light text-center">Loading...</div>;
      }

      if (isError){
        return (
          <>
          <h1 className="text-center text-light mt-4">Rolling News 📰</h1>
          <hr className="w-50 container" />
          <div className="alert alert-danger w-50 container mt-3">
            Error fetching data</div>
          </>
        )
      }
    
      return (
        <>
        <h1 className="text-center text-light mt-4">Rolling News 📰</h1>
        <hr className="w-50 container" />
        <SearchForm article={article} />
      </>
      )
}
export default NewsView;