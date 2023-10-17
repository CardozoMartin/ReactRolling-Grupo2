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
  // const date = dateRef.current?.value;
  // if (!date || !isValidDate(new Date(date) || isPastDate(date))) {
  //   hasError = true;
  //   dateRef.current?.classList.add('is-invalid');
  // } else {
  //   dateRef.current?.classList.remove('is-invalid');
  // }

  // // Tiempo
  // const time = timeRef.current?.value;
  // if (
  //   !time ||
  //   time.trim().length !== 5 ||
  //   time.split(':')[0] > 23 ||
  //   time.split(':')[1] > 59
  // ) {
  //   hasError = true;
  //   timeRef.current?.classList.add('is-invalid');
  // } else {
  //   timeRef.current?.classList.remove('is-invalid');
  // }


  if (symptoms.trim().length < 8){
    return false;
  }
  return true;
};