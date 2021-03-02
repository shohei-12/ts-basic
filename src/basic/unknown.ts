export default function unknownSample(): void {
  const maybeNumber: unknown = 10;
  console.log(typeof maybeNumber);

  //const sum = maybeNumber + 10

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10;
    console.log(sum);
  }
}
