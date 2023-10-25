export const getInfo = async () => {
    
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_3143146ebee9fb25425be88240281bf6f847a`);

    
    if(!response.ok){
      throw new Error ('An error occurred while bringing the news.');
    }
    const data = await response.json();
    
    console.log(data)
    return data;
  };


//   export const postNewFn = async (data) => {
//     const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_3143146ebee9fb25425be88240281bf6f847a`, {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     });

//     if (!res.ok){
//         throw new Error('An error occurred while saving the news.');
//     }
//   };


//   export const deleteNewFn = async (articleId) => {
//     const res = await fetch(`https://newsdata.io/api/1/news?apikey=pub_3143146ebee9fb25425be88240281bf6f847a`, {
//       method: 'DELETE',
//     });

//     if (!res.ok){
//       throw new Error('An error occurred while deleting the news.');
//   }
//   }