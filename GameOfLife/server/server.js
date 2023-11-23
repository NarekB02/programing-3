// const { Console } = require('console');
let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");

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


matrix = matrixGenerator(25, 20, 15, 10, 20, 15, 10, 4);

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


function handleWinter(data){
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y, 20)
                                grassArr.push(gr);
                        }
                }
        }
        io.sockets.emit('send matrix', matrix)
}

function createObject(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[0].length; x++) {
                if (matrix[y][x] == 1) {
                        let gr = new Grass(x, y, 4)
                        grassArr.push(gr);
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

    io.sockets.emit('send matrix', matrix)
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

setInterval(game, 1000)

io.on('connection', function (socket) {
    createObject(matrix);

    socket.on("winter", handleWinter);
})


// io.on('connection', function (socket) {
//     for (let i in messages) {
//     }
//     socket.on("send message", function (data) {
//         messages.push(data);
//         io.sockets.emit("display message", data);
//     });
// });