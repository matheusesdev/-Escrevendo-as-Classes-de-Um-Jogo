class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.types = ["Guerreiro", "Mago", "Monge", "Ninja"];
    this.attacks = ["Magia", "Espada", "Artes Marciais", "Shuriken"];
    this.type = type % this.types.length;
  }
  getType() {
    return this.types[this.type];
  }
  getAttack() {
    return this.attacks[this.type];
  }
  attack() {
    console.log(`O ${this.getType()} atacou usando ${this.getAttack()}`);
  }
  info() {
    console.log(
      `Nome: ${this.name}, idade: ${this.age}, Tipo: ${this.getType()}`
    );
  }
}

for (let i = 0; i < 4; i++) {
  let matheus = new Hero("matheus", 0, i);
  matheus.attack();
}
