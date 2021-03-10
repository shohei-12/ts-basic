export const promiseSample = (): void => {
  const url = 'https://api.github.com/users/shohei-12';

  type Profile = {
    login: string;
    id: number;
  };

  type FetchProfile = () => Promise<Profile | null>;

  const fetchProfile: FetchProfile = () => {
    return new Promise((resolve, reject) => {
      return fetch(url)
        .then((res) => {
          console.log(1, res);
          res
            .json()
            .then((json) => {
              console.log(2, json);
              resolve(json);
            })
            .catch((error) => {
              console.error(error);
              reject(null);
            });
        })
        .catch((error) => {
          console.error(error);
          reject(null);
        });
    });
  };

  fetchProfile()
    .then((profile: Profile | null) => {
      if (profile) {
        console.log(3, profile);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
