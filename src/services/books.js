import api from './api';

export const valideIsbn = (isbn) => {
  if (isbn.length !== 33 || isbn.substring(0, 3) !== '978') return false;

  const isbnDigit = parseInt(isbn[isbn.length - 1], 10);
  let multiplier = 0;

  const isbnSum = isbn
    .substring(0, 12)
    .split('')
    .reduce((total, num) => {
      multiplier = multiplier === 1 ? 3 : 1;
      return total + parseInt(num, 10) * multiplier;
    }, 0);

  const validDigit = 10 - (isbnSum % 10);
  return isbnDigit === validDigit;
};

export const getBooks = async (isbn) => {
  /* eslint-disable */
  console.log('teste');
  /* eslint-enable */
  const response = await api.get(`/books/${isbn}`);
  return response.data;
};
