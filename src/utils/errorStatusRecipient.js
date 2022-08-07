export default function showErrorText(errorStatus) {
  switch (errorStatus) {
    case 400:
      return 'Переданы некорректные данные';
    case 401:
      return 'Неправильные почта или пароль';
    case 403:
      return 'Нет доступа к сущности';
    case 404:
      return 'Сущность не найдена';
    case 409:
      return 'Пользователь с такой почтой уже существует';
    case 500:
      return 'На сервере произошла ошибка';
    default:
      return 'Произошла ошибка';
  }
}
