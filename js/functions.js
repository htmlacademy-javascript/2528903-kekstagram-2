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
  const [startHours, startMinutes] = startWork.split(':').map(Number);
  const [endHours, endMinutes] = endWork.split(':').map(Number);
  const [meetingHours, meetingMinutes] = startMeeting.split(':').map(Number);

  const startTotalMinutes = startHours * 60 + startMinutes;
  const endTotalMinutes = endHours * 60 + endMinutes;
  const meetingTotalMinutes = meetingHours * 60 + meetingMinutes;

  return meetingTotalMinutes >= startTotalMinutes && meetingTotalMinutes + durationMeeting <= endTotalMinutes && true;
};
workDayTime();
