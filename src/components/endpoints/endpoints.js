const URL = import.meta.env.VITE_TODOS_URL;

// GET, POST, PUT/PATCH, DELETE
export const getTodos = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  return data;
};

export const postTodo = async (body) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (!response.ok) throw new Error("Ocurrio un error");
};