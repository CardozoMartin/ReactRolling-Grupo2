export const getWeatherFn = async (location, country) => {

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location},${country}&appid=5f870f3e90ea027a8f09f1ebe973380`
    );

    if (!response.ok) {
      throw new Error('Climate data could not be obtained.');
    }

    return response.json();
};
