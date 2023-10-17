export const createRandomId = () => {
  return self.crypto.randomUUID();
};

export const generateRandomAvatar = (style = 'big-smile') => {
  const randomSeed = Math.floor(Math.random() * 1000);
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${randomSeed}`;
};

export const setFirstLetterToUpperCase = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const isValidForm = (namePet, owner, phone, symptoms) => {
  if (namePet.trim().length < 2){
    return false;
  }
  if (owner.trim().length < 5){
    return false;
  }
  if (isNaN(Number(phone))){
    return false;
  }
  if (symptoms.trim().length < 8){
    return false;
  }
  return true;
};