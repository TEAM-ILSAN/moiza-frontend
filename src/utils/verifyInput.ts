export const verifyInput = (isRegExp: RegExp, value: string) => {
  return isRegExp.test(value);
};
