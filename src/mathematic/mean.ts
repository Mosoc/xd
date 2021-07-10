const mean = (array: number[]) => {
  if(array.length === 0){
    throw new TypeError('Array could not be empty.')
  }
  return array.reduce((a, c) => a + c) / array.length;
};

export default mean;
