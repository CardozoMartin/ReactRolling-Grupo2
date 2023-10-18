import ArticleCard from './ArticleCard';

const NewsList = (props) => {
  const { news, isLoading } = props;

  if (isLoading) {
    return <p className='mt-3 text-center text-bold'>Loading...</p>;
  }

  return (
    <section className='mt-3 row w-100'>
      {news.map((article) => (
        <ArticleCard key={article.source.id} article={article} />
      ))}
    </section>
  );
};
export default NewsList;