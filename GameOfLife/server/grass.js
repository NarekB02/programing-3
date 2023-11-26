let LivingCreature = require('./LivingCreature')

module.exports = class grass extends LivingCreature {
    constructor(x, y, speed) {
        super(x, y);
        this.speed = speed;
    }

    mul() {
        this.multiply++
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell && this.multiply >= this.speed) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 1

            let gr = new grass(newX, newY);
            grassArr.push(gr)

            this.multiply = 0
        }
    }
}