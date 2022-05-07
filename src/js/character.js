const parametersCharacter = {
  Bowman: '25/25',
  Swordsman: '40/10',
  Magician: '10/40',
  Undead: '25/25',
  Zombie: '40/10',
  Daemon: '10/40',
};

export default function Character(name, type) {
  // TODO: add logic here

  this.type = type;
  this.health = 100;
  this.level = 1;

  if (name.length >= 2 && name.length <= 10) {
    this.name = name;
  } else {
    throw new Error('Имя должно иметь длинну от 2 до 10 знаков');
  }

  if ((type in parametersCharacter)) {
    this.attack = Number(parametersCharacter[type].split('/')[0]);
    this.defence = Number(parametersCharacter[type].split('/')[1]);
  } else {
    throw new Error('Неправильный тип');
  }
}
