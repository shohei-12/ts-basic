export const genericAdvancedSample = (): void => {
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[];

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result[i] = fn(item);
    }
    return result;
  };
  const numbers = mapStringsToNumbers(['123', '456', '789'], (item: string) => Number(item));
  console.log(numbers);

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result[i] = fn(item);
    }
    return result;
  };
  const strings = mapNumbersToStrings([123, 456, 789], (item: number) => String(item));
  console.log(strings);
};
