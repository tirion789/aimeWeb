export const getAnimeFromLocalStorage = () => {
  const massive = localStorage.getItem('favorite');
  return massive ? JSON.parse(massive) : [];
};
