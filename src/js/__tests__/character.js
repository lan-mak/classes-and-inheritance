import Character from '../character';

const dataTest = {
  type: 'Daemon',
  health: 100,
  level: 1,
  name: 'Goga',
  attack: 10,
  defence: 40,
};

test('Длинна name = 1', () => {
  expect(() => {
    const result = new Character('G', 'Daemon');
    return result;
  }).toThrowError(new Error('Имя должно иметь длинну от 2 до 10 знаков'));
});

test('Длинна name = 12', () => {
  expect(() => {
    const result = new Character('Gsdsdssdsdsdsdsdsd', 'Daemon');
    return result;
  }).toThrowError(new Error('Имя должно иметь длинну от 2 до 10 знаков'));
});

test('Неправильный тип персонажа', () => {
  expect(() => {
    const result = new Character('Goga', 'Tea');
    return result;
  }).toThrowError(new Error('Неправильный тип'));
});

test('Неправильный тип персонажа', () => {
  const result = new Character('Goga', 'Daemon');
  expect(result).toEqual(dataTest);
});
