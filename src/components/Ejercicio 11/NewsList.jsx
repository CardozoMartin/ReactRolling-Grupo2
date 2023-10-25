import { useQuery } from "@tanstack/react-query";

import NewsCard from "./NewsCard";

import { getNews } from "./news";


  const NewsList = () => {
    
  const {data} = useQuery({queryKey: ['news'], queryFn: getNews});

  const news = data.sources

  return (
    <section className="container">
    <div className='row mt-3 w-100'>
    {news.map((article, index) => (
      <NewsCard key={index} article={article} />
    ))}
  </div>
  </section>
  )
}

export default NewsList;