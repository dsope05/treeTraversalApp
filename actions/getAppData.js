const getAppData = () => {
  return fetch('http://songz.llip.life/')
    .then((response) => response.json())
    .then((resData)=> {
      return resData;
    })
    .catch((error) => {
      console.error(error);
    });
}


export default getAppData;
