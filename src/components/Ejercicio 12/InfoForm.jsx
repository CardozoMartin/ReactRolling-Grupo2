
const InfoForm = () => {
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
      </>
    )
}
export default InfoForm;

