
import WeatherCard from "./WeatherCard";



const WeatherList = (props) => {
    const {data} = props;

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