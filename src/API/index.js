export const getMap = () => {
  return fetch("/dummyjson/map.json").then((res) => res.json());
};



