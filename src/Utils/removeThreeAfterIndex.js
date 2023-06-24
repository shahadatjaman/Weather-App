const removeThreeAfterIndex = (array) => {
  let newArray = [];

  if (array && array.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      const count = parseFloat(array[i].time.split(" ")[1]);
      if (isFactorOfFour(count)) {
        newArray = [...newArray, array[i]];
      }
    }
  }

  return newArray;
};

const isFactorOfFour = (number) => {
  return number % 4 === 0;
};

export default removeThreeAfterIndex;
