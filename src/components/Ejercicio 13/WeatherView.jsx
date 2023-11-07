import { useMutation } from "@tanstack/react-query";

import { getWeatherFn } from "./weather";

import WeatherForm from "./WeatherForm";
import WeatherCard from "./WeatherCard";


const WeatherView = () => {
    const {
    mutate: getWeather,
    country,
    location, 
    // pasarle parametros location country string
    } = useMutation({mutationFn: getWeatherFn})

    //onSuccess, onError

    // const { data: weatherData, isLoading, isError } = useQuery({ queryKey: ['weather'], queryFn: getWeather});
    
    //   if (isLoading) {
    //     return (
    //         <>
    //         <div className="text-light text-center">Loading...</div>
    //         </>
    //         );
    //   }

    //   if (isError){
    //     return (
    //       <>
    //       <h1 className="text-center text-light mt-4">🌤 Rolling Weather 🌦</h1>
    //       <hr className="w-50 container" />
    //       <div className="alert alert-danger w-50 container mt-3">
    //         Error fetching data.</div>
    //       </>
    //     )
    //   }
    
      return (
        <>
        <h1 className="text-center text-light mt-4">🌤 Rolling Weather 🌦</h1>
        <hr className="w-50 container" />
        <WeatherForm getWeather={getWeather}/>
        {weatherData && <WeatherCard weatherData={weatherData}/>}
      </>
      );
};
export default WeatherView;
