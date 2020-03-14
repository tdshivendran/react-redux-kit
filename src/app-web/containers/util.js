/* eslint-disable import/prefer-default-export */

export const arrayIsEqual = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
  }
  return false;
};
