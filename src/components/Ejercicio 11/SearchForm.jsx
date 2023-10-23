import NewsList from "./NewsList";


const SearchForm = () =>{

  return (
    <>
    <form className='card container p-4 form-news text-center mb-4'>
      <fieldset className='d-flex ms-2'>
        <label htmlFor='input-search' className="d-flex justify-content align-items-center">
          Search:
        </label>
        <div className='ms-2 input-search'>
          <input
            type='text'
            id='input-search'
            placeholder="Type to search..."
            className="form-control"
          />
        </div>
      </fieldset>
      <div className='text-end'>
        <button className="mt-4 btn-news">
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