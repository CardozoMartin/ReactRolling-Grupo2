
import { useQuery } from '@tanstack/react-query';

import { createRandomId } from '../../Utils';
import SearchForm from './SearchForm';
import NewsList from './NewsList';

// ---------------------------
// Ejercicio 11: Crear una aplicación web con react, que consuma la API provista por
// https://newsapi.org/ o https://newsdata.io/docs
// ---------------------------

const TQueryFetch = () => {
  const { data, isLoading, isError } = useQuery(['news'], getNews);

  const addNew = useMutation(postNew);

  const handleClick = () => {
    addNew.mutate({
      id: createRandomId(0, 5000),
      userId: createRandomId(0, 5000),
      title: 'News',
      completed: false,
    });
  };

  if (isError) {
    toast.error('Ocurrió un error');
  }

  if (addNew.isError) {
    toast.error('Ocurrió un error al agregar la tarea');
  }

  return (
    <>
    <h1 className='text-center bg-news p-4'>ROLLING NEWS 📰</h1>
    <hr />
    <SearchForm fetchNews={fetchNews} isLoading={isLoading} type='news' />
    <NewsList news={news} isLoading={isLoading} />
    </>
  );
};
export default TQueryFetch;