import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import { toast } from 'sonner';

import { createRandomId } from '../../Utils';
import { postNew } from '../../endpoints/endpoints';

const SearchForm = (props) => {
  const { getNews, isLoading, isError} = props;

  const [searchValue, setSearchValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const addNew = useMutation(postNew);


//   // Para reutilizar el componente en el ejercicio 13
//   const isNews = type === 'news';

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim().length === 0) {
      setIsInvalid(true);
      return;
    } else {
      setIsInvalid(false);
    }
    getNews(searchValue);
  };

  const handleClick = () => {
    addNew.mutate({
      id: createRandomId(0, 5000),
      userId: createRandomId(0, 5000),
      title: 'News',
      completed: false,
    });
  };

  if (isError) {
    toast.error('An unexpected error occurred');
  }

  if (addNew.isError) {
    toast.error('An error occurred while searching for the news');
  }

  return (
    <form className='card container p-4 form-news text-center' onSubmit={handleSubmit}>
      <fieldset className='d-flex ms-4'>
        <label htmlFor='input-search' className="d-flex justify-content align-items-center">
          Search:
        </label>
        <div className='ms-2 input-search'>
          <input
            type='text'
            id='input-search'
            placeholder="Type to search..."
            className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
            value={searchValue}
            onChange={handleChange}
            disabled={isLoading}
          />
          <div className='invalid-feedback'>
          Enter a search parameter
          </div>
        </div>
      </fieldset>
      <div className='text-end'>
        <button
          type='button'
          disabled={isLoading}
          className='btn-search mt-2'
          onClick={handleClick}>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;