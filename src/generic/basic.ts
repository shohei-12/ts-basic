export const genericBasicSample = (): void => {
  // Case of not using generic type
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log(stringReduce(['a', 'b', 'c'], ''));

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log(numberReduce([1, 2, 3], 0));

  // Case of using generic type
  type Reduce<T> = {
    (array: T[], initialValue: T): T;
  };

  const genericStringReduce: Reduce<string> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log(genericStringReduce(['d', 'e', 'f'], ''));

  const genericNumberReduce: Reduce<number> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log(genericNumberReduce([-1, -2, -3], 0));
};
