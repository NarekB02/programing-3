let LivingCreature = require('./LivingCreature')


module.exports = class predator extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
    }


    chooseCell(character, character1) {
        this.getNewCordinates()
        let found = [];
        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character || matrix[y][x] == character1) {
                    found.push(this.directions[i]);
                }
            }

        }
        return found;

    }

    mul() {

        let emptyCells = super.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        // console.log(newCell, 'predator');
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 3

            let pred = new predator(newX, newY)
            predatorArr.push(pred)

        }
    }

    eat() {
        let foods = super.chooseCell(1, 2)
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

            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 3

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
        let emptyCells = super.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];


            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }

        this.energy--;
        if (this.energy <= 0) {
            this.die()
        }

    }

    die() {
        matrix[this.y][this.x] = 0;

        for (let i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}
