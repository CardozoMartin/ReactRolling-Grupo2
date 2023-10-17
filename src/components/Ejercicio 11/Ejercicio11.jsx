import { useState } from 'react';

import SearchForm from '../components/Ejercicio11/SearchForm';
import NewsList from '../components/Ejercicio11/NewsList';

// Traer la API key desde las variables de entorno
// No puede estar hardcodeada en el codigo porque el codigo es accesible por cualquiera
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const Ejercicio11 = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchNews = async (query) => {
    // Cambiar un estado de carga para mostrar el mensaje e inhabilitar el botón de envío
    setIsLoading(true);

    try {
      const res = await fetch(
        `https://newsapi.org/v2/everything?language=es&q=${query}&pageSize=15&apiKey=${API_KEY}`
      );
      const data = await res.json();

      if (data.articles) {
        setNews(data.articles);
      }
    } catch (error) {
      alert('Ocurrio un error al buscar las noticias');
    }

    setIsLoading(false);
  };

  return (
    <>
      <h1>Noticias</h1>
      <div className='alert alert-warning w-100 mt-2'>
        <p className='mb-0'>
          Aviso: no funciona la llamada a la API desde Netlify. Mas información{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://stackoverflow.com/questions/62157026/error-426-from-newsapi-org-once-i-deployed-my-site-on-netlify'
          >
            acá
          </a>
        </p>
      </div>
      <SearchForm fetchNews={fetchNews} isLoading={isLoading} type='news' />
      <NewsList news={news} isLoading={isLoading} />
    </>
  );
};

export default Ejercicio11;