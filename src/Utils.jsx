export const createRandomId = () => {
  return self.crypto.randomUUID();
};

export const generateRandomAvatar = (style = 'big-smile') => {
  const randomSeed = Math.floor(Math.random() * 1000);
  return `https://api.dicebear.com/7.x/${style}/svg?seed=${randomSeed}`;
};