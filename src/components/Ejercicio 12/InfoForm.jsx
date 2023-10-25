// import InfoList from "./InfoList";

const InfoForm = () => {
    // const { fetchNews, isLoading} = props;

    // const [searchValue, setSearchValue] = useState('');
    // const [isInvalid, setIsInvalid] = useState(false);
  
    // const handleChange = (e) => {
    //   setSearchValue(e.target.value);
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
  
    //   if (searchValue.trim().length === 0) {
    //     setIsInvalid(true);
    //     return;
    //   } else {
    //     setIsInvalid(false);
    //   }
  
    //   fetchNews(searchValue);
    // };
  
    return (
      <>
      <form className='container p-4 form-news mb-4 bg-light'>
        <fieldset className='d-flex ms-2'>
          <label htmlFor='input-search' className="d-flex justify-content align-items-center ms-5">
            Search:
          </label>
          <div className='ms-3 input-search'>
            <input
              type='text'
              id='input-search'
              placeholder="Type to search..."
            //   className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
            //   value={searchValue}
            //   onChange={handleChange}
            //   disabled={isLoading}
            />
          </div>
        </fieldset>
        <div className='text-end'>
          <button type="submit" className="mt-4 btn-news" > 
            Send
          </button>
        </div>
      </form>
      <hr />
      {/* <InfoList/> */}
      </>
    )
}
export default InfoForm;

