const API_URL = import.meta.env.VITE_API_URL;

export const getBlogsFn = async () => {
    const res = await fetch(`${API_URL}/blogs`);
  
    if(!res.ok){
      throw new Error ('An error occurred while bringing the blogs');
    }
  
    const data = await res.json();
  
    return data;
  };

  export const postBlogFn = async (data) => {
    const res = await fetch(`${API_URL}/blogs`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!res.ok){
        throw new Error('An error occurred while saving the blog.');
    }
  };

  export const putBlogFn = async (data) => {
    const res = await fetch(`${API_URL}/blogs/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!res.ok){
        throw new Error('An error occurred while updating the blog.');
    }
  };

  export const deleteBlogFn = async (blogId) => {
    const res = await fetch(`${API_URL}/blogs/${blogId}`, {
      method: 'DELETE',
    });

    if (!res.ok){
      throw new Error('An error occurred while deleting the blog.');
  }
  }