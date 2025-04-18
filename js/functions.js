// Проверка длины строки
const checkLenght = (string, lenght) => {
  const result = (string <= lenght);
  return result;
  /*   if (string <= lenght){
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
