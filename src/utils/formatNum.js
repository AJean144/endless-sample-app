const formatNum = (num) => {
  return parseInt(num) < 10 ? `0${num}` : num;
};

export default formatNum;
