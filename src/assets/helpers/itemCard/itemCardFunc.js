export const getHideNumber = (number) => {
  const arrNumbers=String(number).split('');
  const array = [];
  arrNumbers.map((elem, index) =>
    index < 4 || index > 11 ? array.push(elem) : array.push('*')
  );
  const arrayFirst = [];
  const arraySecond = [' '];
  const arrayThird = [' '];
  const arrayFour = [' '];
  array.forEach((elem, index) => {
    if (index < 4) {
      arrayFirst.push(elem);
    }
    if (index >= 4 && index < 8) {
      arraySecond.push(elem);
    }
    if (index >= 8 && index < 12) {
      arrayThird.push(elem);
    }
    if (index >= 12) {
      arrayFour.push(elem);
    }
  });
  return arrayFirst
    .join('')
    .concat(arraySecond.join(''))
    .concat(arrayThird.join(''))
    .concat(arrayFour.join(''));
}

export const getShowNumber = (number) => {
    const array=String(number).split('');
  const arrayFirst = [];
  const arraySecond = [' '];
  const arrayThird = [' '];
  const arrayFour = [' '];
  array.forEach((elem, index) => {
    if (index < 4) {
      arrayFirst.push(elem);
    }
    if (index >= 4 && index < 8) {
      arraySecond.push(elem);
    }
    if (index >= 8 && index < 12) {
      arrayThird.push(elem);
    }
    if (index >= 12) {
      arrayFour.push(elem);
    }
  });
  return arrayFirst
    .join('')
    .concat(arraySecond.join(''))
    .concat(arrayThird.join(''))
    .concat(arrayFour.join(''));
}