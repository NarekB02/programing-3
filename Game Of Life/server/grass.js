let LivingCreature = require('./LivingCreature')

module.exports = class Grass extends LivingCreature{
    constructor(x, y) {
        super(x, y);
    }
    mul(){
     this.multiply++
     let emptyCells = this.chooseCell(0)
     let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
     console.log(newCell, 'GRASSSSS');

       if(newCell && this.multiply >=4){
            let newX = newCell[0]
            let newY = newCell[1]
 
            matrix[newY][newX] = 1

            let gr = new Grass(newX, newY);
            grassArray.push(gr)

            this.multiply = 0
       }
    }
}