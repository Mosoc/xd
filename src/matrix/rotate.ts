function rotate(matrix: number[][]): number[][] {
  const result = [];
  for (let index = 0; index < matrix.length; index++) {
    const row = matrix.map(element => element[index]).reverse();
    result.push(row);
  }
  return result;
}

export default rotate;
