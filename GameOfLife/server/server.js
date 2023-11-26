// const { Console } = require('console');
let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");
const { clearInterval } = require('timers');
const grassEater = require('./grassEater');
const rabbit = require('./rabbit');

app.use(express.static("../client"));

app.get('/', function (req, res) {
        res.redirect('index.html');
});
server.listen(3000, () => {
        console.log('connected');
});


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

matrix = matrixGenerator(25);

io.sockets.emit('send matrix', matrix)

grassArr = [];
grassEaterArr = [];
predatorArr = [];
carrotArr = [];
rabbitArr = [];
predator2Arr = [];
dogArr = [];



Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Carrot = require("./carrot")
Rabbit = require("./rabbit")
Predator2 = require("./predator2")
Dog = require("./dog")


let gameId;


function handleSpring() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y, 8)
                                grassArr.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y, 18)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pred = new Predator(x, y, 15)
                                predatorArr.push(pred)
                        } else if (matrix[y][x] == 4) {
                                let carr = new Carrot(x, y, 8)
                                carrotArr.push(carr)
                        } else if (matrix[y][x] == 5) {
                                let rabb = new Rabbit(x, y, 18)
                                rabbitArr.push(rabb)
                        } else if (matrix[y][x] == 6) {
                                let pred2 = new Predator2(x, y, 15)
                                predator2Arr.push(pred2)
                        } else if (matrix[y][x] == 7) {
                                let dog = new Dog(x, y, 19)
                                dogArr.push(dog)
                        }
                }
        }
        io.sockets.emit('send matrix', matrix)
}

function handleSummer() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y, 6)
                                grassArr.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y, 16)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pred = new Predator(x, y, 13)
                                predatorArr.push(pred)
                        } else if (matrix[y][x] == 4) {
                                let carr = new Carrot(x, y, 6)
                                carrotArr.push(carr)
                        } else if (matrix[y][x] == 5) {
                                let rabb = new Rabbit(x, y, 16)
                                rabbitArr.push(rabb)
                        } else if (matrix[y][x] == 6) {
                                let pred2 = new Predator2(x, y, 13)
                                predator2Arr.push(pred2)
                        } else if (matrix[y][x] == 7) {
                                let dog = new Dog(x, y, 21)
                                dogArr.push(dog)
                        }
                }
        }
        io.sockets.emit('send matrix', matrix)
}

function handleFall() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y, 10)
                                grassArr.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y, 20)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pred = new Predator(x, y, 19)
                                predatorArr.push(pred)
                        } else if (matrix[y][x] == 4) {
                                let carr = new Carrot(x, y, 10)
                                carrotArr.push(carr)
                        } else if (matrix[y][x] == 5) {
                                let rabb = new Rabbit(x, y, 20)
                                rabbitArr.push(rabb)
                        } else if (matrix[y][x] == 6) {
                                let pred2 = new Predator2(x, y, 19)
                                predator2Arr.push(pred2)
                        } else if (matrix[y][x] == 7) {
                                let dog = new Dog(x, y, 22)
                                dogArr.push(dog)
                        }
                }
        }

        io.sockets.emit('send matrix', matrix)
}

function handleWinter() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y, 15)
                                grassArr.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y, 23)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pred = new Predator(x, y, 22)
                                predatorArr.push(pred)
                        } else if (matrix[y][x] == 4) {
                                let carr = new Carrot(x, y, 15)
                                carrotArr.push(carr)
                        } else if (matrix[y][x] == 5) {
                                let rabb = new Rabbit(x, y, 23)
                                rabbitArr.push(rabb)
                        } else if (matrix[y][x] == 6) {
                                let pred2 = new Predator2(x, y, 22)
                                predator2Arr.push(pred2)
                        } else if (matrix[y][x] == 7) {
                                let dog = new Dog(x, y, 25)
                                dogArr.push(dog)
                        }
                }
        }
        io.sockets.emit('send matrix', matrix)
}


function createObject(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y, 5)
                                grassArr.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y, 15)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pred = new Predator(x, y, 12)
                                predatorArr.push(pred)
                        } else if (matrix[y][x] == 4) {
                                let carr = new Carrot(x, y, 5)
                                carrotArr.push(carr)
                        } else if (matrix[y][x] == 5) {
                                let rabb = new Rabbit(x, y, 15)
                                rabbitArr.push(rabb)
                        } else if (matrix[y][x] == 6) {
                                let pred2 = new Predator2(x, y, 12)
                                predator2Arr.push(pred2)
                        } else if (matrix[y][x] == 7) {
                                let dog = new Dog(x, y, 12)
                                dogArr.push(dog)
                        }
                }
        }

        io.sockets.emit('send matrix', matrix)
}

function handleGameOver() {
        matrix = matrixGenerator(25)

        io.sockets.emit("send matrix", matrix);

        clearInterval(gameId)
}


function handleGameStart() {
        matrix = matrixGenerator(25, 20, 15, 10, 20, 15, 10, 4);
        
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y, 5)
                                grassArr.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y, 15)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pred = new Predator(x, y, 12)
                                predatorArr.push(pred)
                        } else if (matrix[y][x] == 4) {
                                let carr = new Carrot(x, y, 5)
                                carrotArr.push(carr)
                        } else if (matrix[y][x] == 5) {
                                let rabb = new Rabbit(x, y, 15)
                                rabbitArr.push(rabb)
                        } else if (matrix[y][x] == 6) {
                                let pred2 = new Predator2(x, y, 12)
                                predator2Arr.push(pred2)
                        } else if (matrix[y][x] == 7) {
                                let dog = new Dog(x, y, 12)
                                dogArr.push(dog)
                        }
                }
        }

        io.sockets.emit("send matrix", matrix);
        gameId = setInterval(game, 1000)

}


function game() {
        for (let i in grassArr) {
                grassArr[i].mul()
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

        io.sockets.emit("send matrix", matrix);
}


io.on('connection', function (socket) {
        createObject(matrix);

        socket.on("winter", handleWinter);
        socket.on("spring", handleSpring);
        socket.on("summer", handleSummer);
        socket.on("fall", handleFall);
        socket.on("GameOver", handleGameOver);
        socket.on("GameStart", handleGameStart);
})



let statisticsObj = {
        Grass: 0,
        GrassEater: 0,
        Predator: 0,
        Carrot: 0,
        Rabbit: 0,
        Predator2: 0,
        Dog: 0
}


function main() {
        statisticsObj.Grass = grassArr.length
        statisticsObj.GrassEater = grassEaterArr.length
        statisticsObj.Predator2 = predator2Arr.length
        statisticsObj.Carrot = carrotArr.length
        statisticsObj.Rabbit = rabbitArr.length
        statisticsObj.Predator2 = predator2Arr.length
        statisticsObj.Dog = dogArr.length
        fs.writeFile("statistik.json", JSON.stringify(statisticsObj), function (err) {
                console.log("fs.writeFile ended");
        });

}

setInterval(main, 6000)