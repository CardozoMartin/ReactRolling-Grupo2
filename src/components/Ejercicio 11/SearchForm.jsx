import { useState } from "react";
import NewsList from "./NewsList";


const SearchForm = (props) =>{

  const { fetchNews, isLoading} = props;

  const [searchValue, setSearchValue] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

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

    fetchNews(searchValue);
  };

  return (
    <>
    <form className='card container p-4 form-news text-center mb-4' onSubmit={handleSubmit}>
      <fieldset className='d-flex ms-2'>
        <label htmlFor='input-search' className="d-flex justify-content align-items-center ms-5">
          Search your news:
        </label>
        <div className='ms-4 input-search'>
          <input
            type='text'
            id='input-search'
            placeholder="Type to search..."
            className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
            value={searchValue}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
      </fieldset>
      <div className='text-end'>
        <button type="submit" className="mt-4 btn-news" disabled={isLoading}>
          Send
        </button>
      </div>
    </form>
    <hr />
    <NewsList />
    </>
  )
};

export default SearchForm;