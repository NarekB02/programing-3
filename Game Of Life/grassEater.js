class GrassEater extends LivingGreature{
    constructor(x, y,) {
        super(x, y);
        this.energy = 8
    }



    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }

    chooseCell(character) {
        this.getNewCordinates()
        return super.chooseCell(character)
    }


    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 2

            let grEat = new GrassEater(newX, newY)
            grassEaterArr.push(grEat)



        }
    }

    eat() {
        let foods = this.chooseCell(1)
        let food = random(foods)

        if (food) {
            this.energy++

            let newX = food[0]
            let newY = food[1]

            for (let i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                    grassArray.splice(i, 1)
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
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell);

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