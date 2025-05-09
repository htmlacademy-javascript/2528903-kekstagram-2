const MESSAGES_LIST = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES_LIST = [
  'Виктория','Степан','Ирина','Андрей','Анастасия','Егор','Марина','Александр','Дарья','Дмитрий','Мария',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createId = () => {
  let currentId = 0;
  return () => ++currentId;
};
const showIdComment = createId();
const showIdPhoto = createId();
const showUrl = createId();

const createComment = () => {
  const id = showIdComment();
  return {
    id: id,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES_LIST),
    name: getRandomArrayElement(NAMES_LIST)};
};
createComment();

const createPhoto = () => {
  const id = showIdPhoto();
  return {
    id: id,
    url: `photos/${showUrl()}.jpg`,
    description: 'Очень красивая фотография',
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, createComment),
  };
};

const arrayPhoto = Array.from({length: 25}, createPhoto);
arrayPhoto();
