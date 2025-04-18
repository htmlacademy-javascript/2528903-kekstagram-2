// Проверка длины строки
const checkLength = (string, length) => {
  const result = (string <= length);
  return result;
  /*   if (string <= length){
    return true;
  }
  return false; */
};

// Является ли строка палиндромом
const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let emptyString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    const symbol = normalizedString[i];
    emptyString += symbol;
  }
  return emptyString === normalizedString;
};
