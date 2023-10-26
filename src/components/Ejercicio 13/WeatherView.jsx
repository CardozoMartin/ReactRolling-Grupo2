import { useQuery } from "@tanstack/react-query";

import { getWeather } from "./weather";

import WeatherForm from "./WeatherForm";

import { getInfo } from "../Ejercicio 12/info";

const WeatherView = (props) => {
    const { article } = props;

    const { isLoading, isError } = useQuery({ queryKey: ['weather'], queryFn: getInfo});

    // const { 
    //     isLoading, 
    //     isError ,
    //   } = useQuery({ queryKey: ['weather'], queryFn: getWeather });
    
      if (isLoading) {
        return (
            <>
            <div className="text-light text-center">Loading...</div>
            </>
            );
      }

      if (isError){
        return (
          <>
          <h1 className="text-center text-light mt-4">🌞 Rolling Weather ❄</h1>
          <hr className="w-50 container" />
          <div className="alert alert-danger w-50 container mt-3">
            Error fetching data</div>
          </>
        )
      }
    
      return (
        <>
        <h1 className="text-center text-light mt-4">🌞 Rolling Weather ❄</h1>
        <hr className="w-50 container" />
        <WeatherForm article={article} />
      </>
      )
}
export default WeatherView;