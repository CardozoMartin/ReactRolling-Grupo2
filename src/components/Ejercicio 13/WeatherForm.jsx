import { useState } from "react";

import WeatherList from "./WeatherList";

// import { useEffect, useState } from "react";

const WeatherForm = (props) => {

   const { getWeatherFn, country, location } = props;

    const [searchValue, setSearchValue] = useState('');
    // const [isInvalid, setIsInvalid] = useState(false);

    // useEffect(()=>{
    //   getWeatherFn.then((newsArray)=>{setSearchValue(newsArray)});
    // },[]);
  
    const handleChange = (e) => {
      setSearchValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
    //   if (searchValue.trim().length === 0) {
    //     setIsInvalid(true);
    //     return;
    //   } else {
    //     setIsInvalid(false);
    //   }
  
      getWeatherFn(location, country);
      // pasarle los 2 parametros, ver por que me llega en objeto
    };
  
    return (
        <>
        <form className='container p-4 form-news mb-4 bg-light' onChange={handleSubmit}>
          <fieldset className='d-flex ms-2'>
            <label htmlFor='input-search' className="d-flex justify-content align-items-center ms-5">
              Search your country:
            </label>
            <div className='ms-3 input-search'>
              <input
                type='text'
                id='input-search'
                placeholder="Type to search..."
                className='form-control'
                value={searchValue}
                onChange={handleChange}
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
        <WeatherList/>
        </>
      )
}
export default WeatherForm;

// ${isInvalid ? 'is-invalid' : ''}`