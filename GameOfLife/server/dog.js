let LivingCreature = require('./LivingCreature')

module.exports = class dog extends LivingCreature {
    constructor(x, y) {
        super(x, y);
        this.energy = 15
    }

    chooseCell(character, character1) {
        this.getNewCoordinates()
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
        console.log(newCell, 'dog');
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 7

            let Dog = new dog(newX, newY)
            dogArr.push(Dog)

        }
    }

    eat() {
        let dogCells = super.chooseCell(3, 6)
        let food = dogCells[Math.floor(Math.random() * dogCells.length)]

        if (food) {
            this.energy++

            let newX = food[0]
            let newY = food[1]

            for (let i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1)
                    break;
                }
            }

            for (let i in predator2Arr) {
                if (newX == predator2Arr[i].x && newY == predator2Arr[i].y) {
                    predator2Arr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 7

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


            matrix[newY][newX] = 7;
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

        for (let i in dogArr) {
            if (this.x == dogArr[i].x && this.y == dogArr[i].y) {
                dogArr.splice(i, 1);
                break;
            }
        }
    }

}