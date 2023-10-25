export const getWeather = async () => {
    
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=5f870f3e90ea027a8f09f1ebe9733809`);

    
    if(!response.ok){
      throw new Error ('An error occurred while bringing the info.');
    }
    const data = await response.json();
    
    console.log(data)
    return data;
  };