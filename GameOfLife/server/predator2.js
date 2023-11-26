let LivingCreature = require('./LivingCreature')


module.exports = class predator2 extends LivingCreature {
    constructor(x, y, speed) {
        super(x, y);
        this.energy = 8;
        this.speed = speed;
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

        let foods = super.chooseCell(0)
        let food = foods[Math.floor(Math.random() * foods.length)]
        if (food) {
            let newX = food[0]
            let newY = food[1]

            matrix[newY][newX] = 6

            let pred2 = new predator2(newX, newY)
            predator2Arr.push(pred2)

        }
    }

    eat() {
        let foods = super.chooseCell(4, 5)
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

            for (let i in rabbitArr) {
                if (newX == rabbitArr[i].x && newY == rabbitArr[i].y) {
                    rabbitArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 6

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
        let foods = super.chooseCell(0);
        let food = foods[Math.floor(Math.random() * foods.length)]

        if (food) {
            let newX = food[0];
            let newY = food[1];


            matrix[newY][newX] = 6;
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

        for (let i in predator2Arr) {
            if (this.x == predator2Arr[i].x && this.y == predator2Arr[i].y) {
                predator2Arr.splice(i, 1);
                break;
            }
        }
    }
}