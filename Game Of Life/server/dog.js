class Dog{
    constructor(x, y) {
        this.x = x
        this.y = y
        this.energy = 15
        this.directions = [];
        
    }

    getNewCoordinates() {
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

    chooseCell(character, character1) {
        this.getNewCoordinates()
        var found = [];
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
    
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        
        if (newCell) {
        let newX = newCell[0]
        let newY = newCell[1]
        
        matrix[newY][newX] = 7
        
        let dog= new Dog(newX, newY)
        dogArr.push(dog)
        
        }
        }
        
        eat() {
        let foods = this.chooseCell(3,6)
        let food = random(foods)
        
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
            this.energy--;
            let emptyCell = this.chooseCell(0);
            let newCell = random(emptyCell);
            
            if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];
            
            
            matrix[newY][newX] = 7;
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
                
                for (let i in dogArr) {
                if (this.x == dogArr[i].x && this.y == dogArr[i].y) {
                dogArr.splice(i, 1);
                break;
                }
                }
                }

}