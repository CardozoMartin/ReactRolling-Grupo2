// import { setFirstLetterToUpperCase } from '../../helpers/helpers';

// ---------------------------
// Ejercicio 13: Crea una aplicación web, que permita escribir una ubicación y un país, luego
// presione un botón consultar y muestre el clima del lugar ingresado, consultar el
// clima utilizando la API https://openweathermap.org/. Si la ubicación ingresada no
// existe, mostrar un cartel de error indicando que no se encontraron datos de la
// ciudad ingresada.
// ---------------------------

import { useState } from 'react';
import axios from 'axios';

const API_KEY = 'TU_CLAVE_DE_API'; // Reemplaza 'TU_CLAVE_DE_API' con tu clave de OpenWeatherMap

function ClimaApp() {
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const consultarClima = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError('No se encontraron datos para la ubicación ingresada');
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Consulta el Clima</h1>
      <div>
        <input
          type="text"
          placeholder="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="País"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button onClick={consultarClima}>Consultar</button>
      </div>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>Información del Clima</h2>
          <p>Ciudad: {weatherData.name}</p>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Clima: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default ClimaApp;






// const Weather = (props) => {
//   const { isLoading, location, weather } = props;

//   if (isLoading) {
//     return <p className='mt-3 text-center text-bold'>Cargando...</p>;
//   }

//   if (!weather) {
//     // Si no hay datos, no mostrar nada
//     return null;
//   }

//   return (
//     <section className='mt-3 card text-center'>
//       <header className='card-header px-5'>
//         <h2>{location.name}</h2>
//         <p>
//           {setFirstLetterToUpperCase(weather.current.weather[0].description)}
//         </p>
//       </header>
//       <div className='card-body'>
//         <h3>{weather.current.temp}°C</h3>
//         <p>Humedad: {weather.current.humidity}%</p>
//         <img
//           src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
//           alt={weather.current.weather[0].description}
//           width={100}
//           height={100}
//         />
//       </div>
//     </section>
//   );
// };
// export default Weather;