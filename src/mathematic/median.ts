const median = (array: number[]) => {
  if (array.length === 0) {
    throw new TypeError('Array could not be empty.');
  }

  const middleIndex = Math.floor(array.length / 2);
  const sorted = [...array].sort((a, b) => a - b);
  return array.length % 2 !== 0
    ? sorted[middleIndex]
    : (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
};

export default median;
