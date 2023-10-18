// import { getNews } from "../../endpoints/endpoints";

import NewsCard from "./NewsCard";
// import SearchForm from "./SearchForm";

// const NewsList = () => {
  
//   const {data, isLoading, isError} = useQuery(['news'], getNews)

  const NewsList = (props) => {
    const { news, isLoading } = props;
  
    if (isLoading) {
      return <p className='mt-3 text-center text-bold'>Loading...</p>;
    }


  return (
    <section className='mt-3 row w-100'>
    {news.map((article) => (
      <NewsCard key={article.source.id} article={article} />
    ))}
  </section>
    // <section className="news-list text-light text-center">
    //     <h1 className="mt-5 mb-5">ROLLING NEWS 📰</h1>
    //     {data.results.map((new) => (
    //     <SearchForm />
    //     // <NewsCard />
    //     ))} 
    // </section>
  )
}

export default NewsList;