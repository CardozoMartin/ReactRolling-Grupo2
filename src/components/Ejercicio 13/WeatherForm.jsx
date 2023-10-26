import WeatherList from "./WeatherList";

import { useQuery } from "@tanstack/react-query";

import { useState } from "react";

const WeatherForm = (props) => {
    const { data } = useQuery({ queryKey: ['weather'], location, country, queryFn: getInfo});

   const { getInfo } = props;

    const [searchValue, setSearchValue] = useState('');
    // const [isInvalid, setIsInvalid] = useState(false);
  
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
  
      getInfo(searchValue);
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
                // className={`form-control ${isInvalid ? 'is-invalid' : ''}`}
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