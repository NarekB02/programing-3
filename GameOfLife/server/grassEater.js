let LivingCreature = require('./LivingCreature')

module.exports = class grassEater extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8
    }

    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 2

            let grEat = new grassEater(newX, newY)
            grassEaterArr.push(grEat)



        }
    }

    eat() {
        let foods = super.chooseCell(1);
        let food = foods[Math.floor(Math.random() * foods.length)]

        if (food) {
            this.energy++

            let newX = food[0]
            let newY = food[1]

            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 2

            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            if (this.energy >= 12) {
                this.mul()
            }

        } else {
            this.move()
        }
    }

    move() {
        this.energy--;
        let emptyCells = super.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];


            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }

        if (this.energy <= 0) {
            this.die()
        }

    }

    die() {
        matrix[this.y][this.x] = 0;

        for (let i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }


}