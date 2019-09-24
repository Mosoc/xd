function reflect(matrix: number[][]): number[][] {
  const result = matrix.map(row => row.reverse());
  return result;
}

export default reflect;
