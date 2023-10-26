import { Link } from "react-router-dom";

const WeatherCard = (props) => {
    const { article } = props;

    console.log(article)
      return (
        <article className='col-12 col-md-4 p-0 mb-4'>
          <div className='card ms-4 h-100'>
            <header className='card-header'>
              <h1 className='text-secondary mt-2 mb-0'>{article.title}</h1>
              <h2>{article.category}</h2>
              <h3>{article.country}</h3>
            </header>
            <div className='card-body'>
              <p>{article.description}</p>
            </div>
            <footer className='card-footer text-center'>
              <Link
                to={article.link}
                className='btn-full-news w-100'
                target='_blank'
                rel='noreferrer'
              >
                See full news
              </Link>
            </footer>
          </div>
        </article>
      );
}
export default WeatherCard;