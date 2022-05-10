import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';

test('Проверка создания персонажа Bowman', () => {
  const result = new Bowman('lan');
  const value = {
    name: 'lan',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(value);
});

test('Проверка создания персонажа Swordsman', () => {
  const result = new Swordsman('lan');
  const value = {
    name: 'lan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(value);
});

test('Проверка создания персонажа Magician', () => {
  const result = new Magician('lan');
  const value = {
    name: 'lan',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(value);
});

test('Проверка создания персонажа Undead', () => {
  const result = new Undead('lan');
  const value = {
    name: 'lan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(value);
});

test('Проверка создания персонажа Zombie', () => {
  const result = new Zombie('lan');
  const value = {
    name: 'lan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(value);
});

test('Проверка создания персонажа Daemon', () => {
  const result = new Daemon('lan');
  const value = {
    name: 'lan',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(value);
});
