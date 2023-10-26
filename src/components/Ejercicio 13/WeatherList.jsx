import { useQuery } from "@tanstack/react-query";

import { getInfo } from "../Ejercicio 12/info";

import WeatherCard from "./WeatherCard";



const WeatherList = () => {
      const {data} = useQuery({queryKey: ['info'], queryFn: getInfo});

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