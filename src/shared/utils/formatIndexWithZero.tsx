const formatIndexWithZero = (index: number): string => {
  return index < 9 ? `0${index + 1}` : `${index + 1}`;
};

export default formatIndexWithZero;
