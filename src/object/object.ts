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

  // index signature
  const capitals: {
    [countryName: string]: string;
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  };

  capitals.China = 'Beijing';
  capitals.Canada = 'Ottawa';

  console.log(capitals);

  // intersection
  type Knight = {
    hp: number;
    mp: number;
    weapon: string;
    swordSkill: string;
  };

  type Wizard = {
    hp: number;
    mp: number;
    weapon: string;
    magicSkill: string;
  };

  type Paladin = Knight & Wizard;

  const tom: Paladin = {
    hp: 300,
    mp: 200,
    weapon: '魔法の剣',
    swordSkill: '三連斬り',
    magicSkill: 'メラ',
  };

  console.log(tom);
};
