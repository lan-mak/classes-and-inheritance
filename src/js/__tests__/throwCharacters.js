import Character from '../character';

test('Проверка неправильного имени до 2 симовлов', () => {
  expect(() => {
    const result = new Character('D', 'Bowman');
    return result;
  }).toThrowError(new Error('Имя должно иметь длинну от 2 до 10 знаков'));
});

test('Проверка неправильного имени более 10 симовлов', () => {
  expect(() => {
    const result = new Character('Lorem ipsum dolor sit amet', 'Bowman');
    return result;
  }).toThrowError(new Error('Имя должно иметь длинну от 2 до 10 знаков'));
});

test('Проверка неправильного имени более 10 симовлов', () => {
  expect(() => {
    const result = new Character('lan', 'Bow');
    return result;
  }).toThrowError(new Error('Выбран несуществующий персонаж'));
});
