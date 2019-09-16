const mean = (array: number[]) => {
  return array.reduce((a, c) => a + c) / array.length;
};

export default mean;
