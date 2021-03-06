export const tupleSample = (): void => {
  let res: [number, string] = [200, 'OK'];
  //res = [400, 'Bad Request', 'Email parameter is missing']
  //res = ['400', 'Bad Request']
  res = [400, 'Bad Request'];
  console.log(res);

  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko'];
  girlfriends.push('Misa');
  girlfriends.push('Rika');
  console.log(girlfriends);
};
