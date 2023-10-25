// const NEWS_URL = import.meta.env.VITE_NEWS_URL;

// const API_KEY = import.meta.env.VITE_API_KEY;


export const getNews = async () => {
    
    const response = await fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=fd9d20daf1584f91986695cf3838612a`);

    
    if(!response.ok){
      throw new Error ('An error occurred while bringing the news.');
    }
    const data = await response.json();
    
    console.log(data)
    return data;
  };


  export const postNewFn = async (data) => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=fd9d20daf1584f91986695cf3838612a`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!res.ok){
        throw new Error('An error occurred while saving the news.');
    }
  };


  export const deleteNewFn = async (articleId) => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines/sources?apiKey=fd9d20daf1584f91986695cf3838612a/${articleId}`, {
      method: 'DELETE',
    });

    if (!res.ok){
      throw new Error('An error occurred while deleting the news.');
  }
  }