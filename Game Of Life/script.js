function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, carrotCount, rabbitCount, predator2Count, dogCount) {
        let matrix = [];
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([]);
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0);
                }
        }

        //Grass
        for (let i = 0; i < grassCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                if (matrix[y][x] == 0) {
                        matrix[y][x] = 1
                }


        }

        //GrassEater
        for (let i = 0; i < grassEaterCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                if (matrix[y][x] == 0) {
                        matrix[y][x] = 2
                }


        }

        //Predator
        for (let i = 0; i < predatorCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                if (matrix[y][x] == 0) {
                        matrix[y][x] = 3
                }


        }

        //Carrot
        for (let i = 0; i < carrotCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                if (matrix[y][x] == 0) {
                        matrix[y][x] = 4
                }


        }

        //Rabbit
        for (let i = 0; i < rabbitCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                if (matrix[y][x] == 0) {
                        matrix[y][x] = 5
                }


        }

        //Predator2
        for (let i = 0; i < predator2Count; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                if (matrix[y][x] == 0) {
                        matrix[y][x] = 6
                }


        }

        //Dog
        for (let i = 0; i < dogCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                if (matrix[y][x] == 0) {
                        matrix[y][x] = 7
                }


        }

        return matrix;
}

let matrix = matrixGenerator(25, 20, 15, 10, 20, 15, 10, 4);
let side = 30;

///creature arrays
let grassArray = [];
let grassEaterArr = [];
let predatorArr = [];
let carrotArr = [];
let rabbitArr = [];
let predator2Arr = [];
let dogArr = [];

function setup() {
        frameRate(15);

        createCanvas(matrix[0].length * side, matrix.length * side);
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArray.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pred = new Predator(x, y)
                                predatorArr.push(pred)
                        } else if (matrix[y][x] == 4) {
                                let carr = new Carrot(x, y)
                                carrotArr.push(carr)
                        } else if (matrix[y][x] == 5) {
                                let rabb = new Rabbit(x, y)
                                rabbitArr.push(rabb)
                        } else if (matrix[y][x] == 6) {
                                let pred2 = new Predator2(x, y)
                                predator2Arr.push(pred2)
                        } else if (matrix[y][x] == 7) {
                                let dog = new Dog(x, y)
                                dogArr.push(dog)

                        }

                }
        }
        console.log("helo vorld");
}

function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {    var toBot = side - side * 0.2
                        textSize(toBot);
                        if (matrix[y][x] == 1) {
                                fill("green")
                                rect(x * side, y * side, side, side);
                                text('🌿', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 2) {
                                fill(172, 176, 174)
                                rect(x * side, y * side, side, side);
                                text('🐑', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 3) {
                                fill("red")
                                rect(x * side, y * side, side, side);
                        } else if (matrix[y][x] == 4) {
                                fill(255, 136, 16)
                                rect(x * side, y * side, side, side);
                                text('🥕', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 5) {
                                fill("white")
                                rect(x * side, y * side, side, side);
                                text('🐇', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 6) {
                                fill(255, 77, 77)
                                rect(x * side, y * side, side, side);
                        } else if (matrix[y][x] == 7) {
                                fill(153, 78, 24)
                                rect(x * side, y * side, side, side);
                                text('🐕', x * side, y * side + toBot);
                        } else {
                                fill("gray")
                                rect(x * side, y * side, side, side)

                        }
                }
        }

        for (let i in grassArray) {
                grassArray[i].mul()
        }

        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }

        for (let i in predatorArr) {
                predatorArr[i].eat()
        }

        for (let i in carrotArr) {
                carrotArr[i].mul()
        }

        for (let i in rabbitArr) {
                rabbitArr[i].eat()
        }

        for (let i in predator2Arr) {
                predator2Arr[i].eat()
        }

        for (let i in dogArr) {
                dogArr[i].eat()
        }
}

