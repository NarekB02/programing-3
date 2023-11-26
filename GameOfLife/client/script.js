let socket = io();

let grassColor = "green"
let grassEaterColor = "#969997"
let predatorColor = "red"
let carrotColor = "#ff8810"
let rabbColor = "white"
let predator2Color = "#ff4d4d"
let dogColor = "#994e18"

let garun = document.getElementById("Spring");
garun.addEventListener("click", handleSpring)

let amar = document.getElementById("Summer");
amar.addEventListener("click", handleSummer)

let ashun = document.getElementById("Fall");
ashun.addEventListener("click", handleFall)

let cmer = document.getElementById("Winter");
cmer.addEventListener("click", handleWinter)

let avart = document.getElementById("Game Over");
avart.addEventListener("click",  handleGameOver)

let skizp = document.getElementById("Game Start");
skizp.addEventListener("click",  handleGameStart)


function handleGameOver(event){
        socket.emit("GameOver", "avart")

}

function handleGameStart(event){
        socket.emit("GameStart", "skizp")
}

function handleSpring(event) {

        grassColor = "green"
        grassEaterColor = "#969997"
        predatorColor = "red"
        carrotColor = "#ff8810"
        rabbColor = "white"
        predator2Color = "#ff4d4d"
        dogColor = "#994e18"

        socket.emit("spring", "garun")
}

function handleSummer(event) {

        grassColor = "#169c37"
        grassEaterColor = "#737574"
        predatorColor = "#a30303"
        carrotColor = "#f5761b"
        rabbColor = "#fcebeb"
        predator2Color = "#e66565"
        dogColor = "#de6b18"

        socket.emit("summer", "amar")
}

function handleFall(event) {
        grassColor = "orange"
        grassEaterColor = "#b5bab7"
        predatorColor = "#b85c5c"
        carrotColor = "#fa9b4d"
        rabbColor = "#f5eee9"
        predator2Color = "#ff7d7d"
        dogColor = "#bd601e"

        socket.emit("fall", "ashun")
}

function handleWinter(event) {
        grassColor = "#ebf7ee"
        grassEaterColor = "#cacfcc"
        predatorColor = "#bf7171"
        carrotColor = "#fcc292"
        rabbColor = "#fff0e6"
        predator2Color = "#ffb0b0"
        dogColor = "#ad500e"

        socket.emit("winter", "cmer")
}

side = 30;

function setup() {
        createCanvas(25 * side, 25 * side);
}



function nkarel(matrix) {
        
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        let toBot = side - side * 0.2
                        textSize(toBot);
                        let obj = matrix[y][x];
                        if (obj == 1) {
                                if (grassColor == "green") {
                                        fill(grassColor)
                                        rect(x * side, y * side, side, side);
                                        text('🌿', x * side, y * side + toBot);
                                } else if (grassColor == "#169c37") {
                                        fill(grassColor)
                                        rect(x * side, y * side, side, side);
                                        text('☘️', x * side, y * side + toBot);
                                }else if(grassColor == "orange"){
                                        fill(grassColor)
                                        rect(x * side, y * side, side, side);
                                        text('🍀', x * side, y * side + toBot);
                                } else if(grassColor == "#ebf7ee"){
                                        fill(grassColor)
                                        rect(x * side, y * side, side, side);
                                        text('❄️', x * side, y * side + toBot);
                                }
                        } else if (obj == 2) {
                                if (grassEaterColor == "#969997") {
                                        fill(grassEaterColor)
                                        rect(x * side, y * side, side, side);
                                        text('🐑', x * side, y * side + toBot);
                                } else if (grassEaterColor == "#737574") {
                                        fill(grassEaterColor)
                                        rect(x * side, y * side, side, side);
                                        text('🐏', x * side, y * side + toBot);
                                }else if(grassEaterColor == "#b5bab7"){
                                        fill(grassEaterColor)
                                        rect(x * side, y * side, side, side);
                                        text('🐑', x * side, y * side + toBot);
                                } else if(grassEaterColor == "#cacfcc"){
                                        fill(grassEaterColor)
                                        rect(x * side, y * side, side, side);
                                        text('🐏', x * side, y * side + toBot);
                                }
                        } else if (obj == 3) {
                                fill(predatorColor)
                                rect(x * side, y * side, side, side);
                        } else if (obj == 4) {
                                fill(carrotColor)
                                rect(x * side, y * side, side, side);
                                text('🥕', x * side, y * side + toBot);
                        } else if (obj == 5) {
                                fill(rabbColor)
                                rect(x * side, y * side, side, side);
                                text('🐇', x * side, y * side + toBot);
                        } else if (obj == 6) {
                                fill(predator2Color)
                                rect(x * side, y * side, side, side);
                        } else if (obj == 7) {
                                if (dogColor == "#994e18") {
                                        fill(dogColor)
                                        rect(x * side, y * side, side, side);
                                        text('🐕', x * side, y * side + toBot);
                                } else if (dogColor == "#de6b18") {
                                        fill(dogColor)
                                        rect(x * side, y * side, side, side);
                                        text('🐶', x * side, y * side + toBot);
                                }else if(dogColor == "#bd601e"){
                                        fill(dogColor)
                                        rect(x * side, y * side, side, side);
                                        text('🐩', x * side, y * side + toBot);
                                } else if(dogColor == "#ad500e"){
                                        fill(dogColor)
                                        rect(x * side, y * side, side, side);
                                        text('🐕', x * side, y * side + toBot);
                                }
                        } else {
                                fill("gray")
                                rect(x * side, y * side, side, side)

                        }
                }
        }

}

setInterval(
        function () {
                socket.on('send matrix', nkarel)
        }, 1000
)