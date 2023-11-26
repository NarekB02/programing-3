let LivingCreature = require('./LivingCreature')


module.exports = class rabbit extends LivingCreature {
    constructor(x, y, speed) {
        super(x, y);
        this.energy = 8
        this.speed = speed;

    }

    mul() {

        let emptyCells = super.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 5

            let rabb = new rabbit(newX, newY)
            rabbitArr.push(rabb)

        }
    }

    eat() {
        let foods = super.chooseCell(4)
        let food = foods[Math.floor(Math.random() * foods.length)]

        if (food) {
            this.energy++

            let newX = food[0]
            let newY = food[1]

            for (let i in carrotArr) {
                if (newX == carrotArr[i].x && newY == carrotArr[i].y) {
                    carrotArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 5

            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            if (this.energy >= this.speed) {
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


            matrix[newY][newX] = 5;
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

        for (let i in rabbitArr) {
            if (this.x == rabbitArr[i].x && this.y == rabbitArr[i].y) {
                rabbitArr.splice(i, 1);
                break;
            }
        }
    }


}

