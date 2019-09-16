const sum = (augend = 0) => {
  const sumTotal = (addend = 0) => {
    return sum(addend + sumTotal.valueOf());
  };
  sumTotal.toString = sumTotal.valueOf = () => {
    return augend;
  };
  return sumTotal;
};

export default sum;
