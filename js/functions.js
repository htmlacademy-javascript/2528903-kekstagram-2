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
const workDayTime = (sHours, sMinutes, eHours, eMinutes, mHours, mMinutes, duration) => {
  const startWork = new Date();
  startWork.setHours(sHours, sMinutes);
  const hStart = startWork.getHours().toString();
  const mStart = startWork.getMinutes().toString();

  const endWork = new Date();
  endWork.setHours(eHours, eMinutes);
  const hEnd = endWork.getHours().toString();
  const mEnd = endWork.getMinutes().toString();

  const startMeeting = new Date();
  startMeeting.setHours(mHours, mMinutes);
  const hMeeting = startMeeting.getHours().toString();
  const mMeeting = startMeeting.getMinutes().toString();

  const minutesToAdd = Number(duration);
  const meetingDuration = new Date(startMeeting.getTime());
  meetingDuration.setMinutes(meetingDuration.getMinutes() + minutesToAdd);

  if (meetingDuration > endWork) {
    return `${hStart}:${mStart}, ${hEnd}:${mEnd}, ${hMeeting}:${mMeeting}, ${duration} false`;
  }
  return `${hStart}:${mStart}, ${hEnd}:${mEnd}, ${hMeeting}:${mMeeting}, ${duration} true`;
};
workDayTime();
