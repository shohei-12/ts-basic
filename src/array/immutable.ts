export const immutableSample = (): void => {
  // mutable
  const mutableNumbers: number[] = [1, 2, 3];
  mutableNumbers.push(5);
  mutableNumbers[2] = 4;
  console.log(mutableNumbers);

  // immutable
  const immutableNumbers: readonly number[] = [1, 2, 3];
  //immutableNumbers.push(5)
  //immutableNumbers[2] = 4
  console.log(immutableNumbers);
};
