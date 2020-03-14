const defaultOptions = {
  subtract: [],
  includeUnit: true
};

const sum = numbers => {
  const reducer = (result, current) => result + current;
  return numbers.reduce(reducer, 0);
};

export default (v, options = {}, vhResult) => {
  const normOptions = { ...defaultOptions, ...options };

  const height = vhResult.vh - vhResult.offset;
  const minsSum = sum(normOptions.subtract);
  const result = (v * height) / 100;
  const finalResult = result - minsSum;

  if (normOptions.includeUnit) {
    return `${finalResult}px`;
  }

  return finalResult;
};
