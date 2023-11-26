let LivingCreature = require('./LivingCreature')

module.exports = class carrot extends LivingCreature {
    constructor(x, y, speed) {
        super(x, y);
        this.speed = speed;

    }

    mul() {
        this.multiply++
        let emptyCells = super.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.multiply >= this.speed) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let carr = new carrot(newX, newY);
            carrotArr.push(carr)

            this.multiply = 0
        }
    }

}