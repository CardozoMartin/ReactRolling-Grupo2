import { Link } from "react-router-dom";

const NewsCard = (props) => {
    const { article } = props;
  
    return (
      <article className='col-12 col-md-4 p-0 mb-2'>
        <div className='card m-1 h-100'>
          <header className='card-header'>
            <img
              src={article.urlToImage}
              alt={article.title}
              className='rounded article-image'
            />
            <p className='text-secondary mt-2 mb-0'>{article.source.name}</p>
            <h2>{article.title}</h2>
          </header>
          <div className='card-body'>
            <p>{article.content}</p>
          </div>
          <footer className='card-footer'>
            <Link
              to={article.url}
              className='btn btn-primary w-100'
              target='_blank'
              rel='noreferrer'
            >
              Visit website
            </Link>
          </footer>
        </div>
      </article>
    );
  };
  export default NewsCard;