const API_URL = import.meta.env.VITE_API_URL;

// Función que simula el comportamiendo del backend
export const postLoginFn = async (formData) => {
const response = await fetch (`${API_URL}/users`);

if (!response.ok){
    throw new Error('An error occurred while logging in.')
}

const users = await response.json();

const foundUser = users.find(
    (item) => item.username === formData.username 
    && item.password === formData.password
    );

    if (!foundUser){
        throw new Error('Invalid username or password.')
    }

    return {...foundUser, password: undefined};
};