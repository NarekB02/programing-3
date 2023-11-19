let LivingCreature = require('./LivingCreature')

module.exports = class carrot extends LivingCreature {
    constructor(x, y) {
        super(x, y);
    }

    mul() {
        this.multiply++
        let emptyCells = super.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        //console.log(newCell, 'carrot');
        if (newCell && this.multiply >= 4) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let carr = new carrot(newX, newY);
            carrotArr.push(carr)

            this.multiply = 0
        }
    }

}