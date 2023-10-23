import { useQuery } from "@tanstack/react-query";

import NewsCard from "./NewsCard";


  const NewsList = () => {
    
  const {data: news,} = useQuery();

  return (
    <section className='mt-3 row w-100'>
    {news.map((article) => (
      <NewsCard key={article.source.id} article={article} />
    ))}
  </section>
  )
}

export default NewsList;