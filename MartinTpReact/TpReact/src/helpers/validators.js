export const validateCampos = (name, lastName, dni, email) => {
    if (name.trim().length < 4) {
    return false;
  }

    if (lastName.trim().length < 4) {
    return false;
  }

    if (dni.trim().length < 7 || dni.trim().length > 8) {
    return true;
  }

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(email)) {
    return false;
  }
  return true;

  };

  export const ValidatePets = (name, type, age, symptoms) => {
    if (name.trim() === "" || name.length < 5) {
      alert("El nombre es inválido (debe tener al menos 5 caracteres).");
      return false;
    }
    if (type.trim() === "" || type.length < 3) {
      alert("El tipo es inválido (debe tener al menos 3 caracteres).");
      return false;
    }
    if (!age || isNaN(parseInt(age))) {
      alert("La edad es inválida (debe ser un número).");
      return false;
    }
    if (symptoms.trim() === "" || symptoms.length < 20) {
      alert("Los síntomas son inválidos (deben tener al menos 20 caracteres).");
      return false;
    }
    return true;
  };
  

  export const ValidateMovie = (name, description, genero) => {
    // name
    if (name.trim().length < 2) {
        return false;
    }

    // description
    if (description.trim().length < 2) {
        return false;
        }

    //genre
    if (genero === '') {
        return false;
    }

    return true;
};