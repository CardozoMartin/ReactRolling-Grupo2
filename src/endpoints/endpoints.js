// const URL = import.meta.env.VITE_NEWS_URL;

// // GET, POST, PUT/PATCH, DELETE
// export const getNews = async () => {
//   const response = await fetch(URL);
//   const data = await response.json();

//   return data;
// };

// export const postNew = async (body) => {
//   const response = await fetch(URL, {
//     method: 'POST',
//     body: JSON.stringify(body),
//   });

//   if (!response.ok) throw new Error("An unexpected error occurred");
// };