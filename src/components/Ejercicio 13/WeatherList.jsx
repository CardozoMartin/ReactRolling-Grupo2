
import { useQuery } from "@tanstack/react-query";

import { getWeatherFn } from "./weather";

import WeatherCard from "./WeatherCard";


const WeatherList = () => {

  const { data } = useQuery({ queryKey: ['weather'], location, queryFn: getWeatherFn});

    const news = data.sources
  
    return (
      <section className="container">
      <div className='row mt-3 w-100'>
      {news.map((article, index) => (
        <WeatherCard key={index} article={article} />
      ))}
    </div>
    </section>
    )
}
export default WeatherList;