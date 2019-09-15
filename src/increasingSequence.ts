const increasingSequence = (sequence: number[]): number[] => {
  if (!sequence || sequence.length === 0) {
    return [];
  }
  if (sequence.every(element => element === sequence[0])) {
    return Array(10).fill(sequence[0]);
  }
  return [];
};
