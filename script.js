const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
 getPotions() {
    return this.potions
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name.includes(newPotion.name)) {
       return `Error! ${newPotion} breath is already in your inventory!`
      }
    }
   this.potions.push(newPotion)
  },
  removePotion(potionName) {
  for (const potion of this.potions) {
    const potion = this.potions.indexOf(potionName);
     if (potion === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }
}
    this.potions.splice(potion, 1);
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      const potionIndex = this.potions.indexOf(oldName);
    if (potionIndex === -1) {
      return `Potion ${oldName.name} is not in inventory!`;
    } 
    }
    this.potions.splice(potionIndex, 1, newName.name);
  },
  // Change code above this line
};

atTheOldToad.getPotions();
atTheOldToad.addPotion({ name: 'Stone skin', price: 240 });
atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 });
atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion');
atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
atTheOldToad.removePotion('Speed potion');
atTheOldToad.removePotion('Dragon breath');