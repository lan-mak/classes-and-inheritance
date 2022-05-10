export default class Character {
  constructor(name, type) {
    const typeCharacter = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Undead',
      'Zombie',
      'Daemon',
    ];

    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя должно иметь длинну от 2 до 10 знаков');
    }

    if (typeCharacter.includes(type) && typeof type === 'string') {
      this.type = type;
    } else {
      throw new Error('Выбран несуществующий персонаж');
    }

    this.health = 100;
    this.level = 1;
  }
}
