import { useQuery } from "@tanstack/react-query";

import NewsCard from "./NewsCard";

import { getNews } from "./news";


  const NewsList = () => {
    
  const {data: news,} = useQuery({queryKey: ['news'], queryFn: getNews});


  return (
    <section className='mt-3 row w-100'>
    {news.map((article, index) => (
      <NewsCard key={index} article={article} />
    ))}
  </section>
  )
}

export default NewsList;