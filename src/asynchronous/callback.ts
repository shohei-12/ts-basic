export const callbackSample = () => {
  const url = 'https://api.github.com/users/shohei-12';

  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        console.log(1, res);
        res
          .json()
          .then((json) => {
            console.log(2, json);
            return json;
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const profile = fetchProfile();
  console.log(3, profile);
};
