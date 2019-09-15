const increasingSequence = (
  sequence: number[],
  extending: number = 10
): number[] => {
  if (!sequence || sequence.length === 0) {
    return [];
  }
  if (sequence.every(element => element === sequence[0])) {
    return Array(extending).fill(sequence[0]);
  }
  //  Get differences in the array
  const differences: number[] = [];
  for (let index = 1; index < sequence.length; index++) {
    differences.push(sequence[index] - sequence[index - 1]);
  }

  //  Arithmetic progression
  if (differences.every(element => element === differences[0])) {
    return Array(extending)
      .fill(sequence[0])
      .map((value, index) => value + index * differences[0]);
  }

  return [];
};

// console.log(increasingSequence([1, 2, 3]));
