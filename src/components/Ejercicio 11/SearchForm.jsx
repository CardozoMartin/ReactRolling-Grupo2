// import { useState } from 'react';

const SearchForm = () => {
//   const { getNews, isLoading, type } = props;

//   const [searchValue, setSearchValue] = useState('');
//   const [isInvalid, setIsInvalid] = useState(false);

//   // Para reutilizar el componente en el ejercicio 13
//   const isNews = type === 'news';

//   const handleChange = (e) => {
//     setSearchValue(e.target.value);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (searchValue.trim().length === 0) {
    //   setIsInvalid(true);
    //   return;
    // } else {
    //   setIsInvalid(false);
    // }

    // getNews(searchValue);
  };

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
            className="form-control"
            // className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
            // value={searchValue}
            // onChange={handleChange}
            // disabled={isLoading}
          />
          <div className='invalid-feedback'>
          Enter a search parameter
          </div>
        </div>
      </fieldset>
      <div className='text-end'>
        <button
          type='submit'
        //   disabled={isLoading}
          className='btn-search mt-2'
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;