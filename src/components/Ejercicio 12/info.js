export const getInfo = async () => {
    
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_3143146ebee9fb25425be88240281bf6f847a`);

    
    if(!response.ok){
      throw new Error ('An error occurred while bringing the news.');
    }
    const data = await response.json();
    
    console.log(data)
    return data;
  };