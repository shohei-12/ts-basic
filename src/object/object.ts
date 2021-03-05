export const object = (): void => {
  // optional and readonly
  const person: {
    lastName: string;
    readonly firstName: string;
    gender: string;
    age?: number;
  } = {
    lastName: 'Yamada',
    firstName: 'Taro',
    gender: 'male',
  };

  person.lastName = 'Kamado';
  //person.firstName = 'Tanjiro'
  person.age = 22;

  console.log(person);
};
