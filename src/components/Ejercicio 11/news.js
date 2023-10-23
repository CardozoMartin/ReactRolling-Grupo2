const NEWS_URL = import.meta.env.VITE_NEWS_URL;

const API_KEY = import.meta.env.VITE_API_KEY;


export const getNews = async () => {
    
    const response = await fetch(`${NEWS_URL}${API_KEY}`);
  
    if(!response.ok){
    throw new Error ('An error occurred while bringing the news.');
    }
    const data = await response.json();
  
    return data.article;
  };


  export const postNewFn = async (data) => {
    const res = await fetch(`${NEWS_URL}${API_KEY}`, {
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
    const res = await fetch(`${NEWS_URL}${API_KEY}/${articleId}`, {
      method: 'DELETE',
    });

    if (!res.ok){
      throw new Error('An error occurred while deleting the news.');
  }
  }