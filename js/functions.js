// Проверка длины строки
const checkLength = (string, length) => string.length <= length;
checkLength();

// Является ли строка палиндромом
const isPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let emptyString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    emptyString += normalizedString[i];
  }
  return emptyString === normalizedString;
};
isPalindrome();

// Функция, которая принимает время начала и конца рабочего дня,
// а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня,
// и false, если выходит.
const workDayTime = (startWork, endWork, startMeeting, durationMeeting) => {
  const countTime = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const oneHour = 60;
    const total = hours * oneHour + minutes;
    return total;
  };

  const startWorkNumber = countTime(startWork);
  const endWorkNumber = countTime(endWork);
  const startMeetingNumber = countTime(startMeeting);

  return startMeetingNumber >= startWorkNumber &&
  startMeetingNumber + durationMeeting <= endWorkNumber;
};
workDayTime();
