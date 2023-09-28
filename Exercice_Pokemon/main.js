  class Pokemon {
    constructor(name, attack, defense, hp, luck) {
      this.name = name;
      this.attack = attack;
      this.defense = defense;
      this.hp = hp;
      this.luck = luck;
    }
  
    isLucky() {
      return Math.random() < this.luck;
    }
  
    attackPokemon(target) {
      if (this.isLucky()) {
        const damage = this.attack - target.defense;
        if (damage > 0) {
          target.hp -= damage
        }
        return damage
      } else {
        return 0; // L'attaque a échoué
      }
    }
  }
  


  let pikachu = new Pokemon("Pikachu", 50, 30, 100, 0.7); // Exemple de stats


  let charizard = new Pokemon("Charizard", 40, 35, 120, 0.6); 


  console.log (pikachu)
  console.log (charizard)

  while (pikachu.hp > 0 && charizard.hp > 0) {
    // Pikachu attaque Charizard
    let pikachuDamage = pikachu.attackPokemon(charizard);
    console.log("Pikachu attaque Charizard et lui inflige " + pikachu.damage + " dégâts.")
    console.log("Charizard a maintenant " + charizard.hp + "points de vie.")
  }

// Vérifier si Charizard est mort
if (charizard.hp <= 0) {
  console.log(" Charizard est K.O. Pikachu gagne !")
  }

// Charizard attaque Pikachu
  let charizardDamage = charizard.attackPokemon(pikachu);
  console.log("Charizard attaque Pikachu et lui inflige " + charizard.Damage + " dégâts.")
  console.log("Pikachu a maintenant " + pikachu.hp + " points de vie.")

// Vérifier si Pikachu est mort
  if (pikachu.hp <= 0) {
    console.log(" Pikachu est K.O. Charizard gagne !")
  }
