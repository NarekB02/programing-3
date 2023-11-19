
let socket = io();
let grassColor = "green"
let ashun = document.getElementById("Fall");
ashun.addEventListener("click", handleFall)


function handleFall(event){
        // io.emit("send weather", val);
        grassColor = "orange"
        alert(grassColor)
}

side = 30;

function setup() {
        createCanvas(25 * side, 25 * side);
    }



    function nkarel(matrix) {
        console.log(matrix);

        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++){
                        let toBot = side - side * 0.2
                        textSize(toBot);
                        let obj = matrix[y][x];
                        if (obj == 1) {
                                fill(grassColor)
                                rect(x * side, y * side, side, side);
                                text('🌿', x * side, y * side + toBot);
                        } else if (obj == 2) {
                                fill(172, 176, 174)
                                rect(x * side, y * side, side, side);
                                text('🐑', x * side, y * side + toBot);
                        } else if (obj== 3) {
                                fill("red")
                                rect(x * side, y * side, side, side);
                        } else if (obj == 4) {
                                fill(255, 136, 16)
                                rect(x * side, y * side, side, side);
                                text('🥕', x * side, y * side + toBot);
                        } else if (obj == 5) {
                                fill("white")
                                rect(x * side, y * side, side, side);
                                text('🐇', x * side, y * side + toBot);
                        } else if (obj == 6) {
                                fill(255, 77, 77)
                                rect(x * side, y * side, side, side);
                        } else if (obj == 7) {
                                fill(153, 78, 24)
                                rect(x * side, y * side, side, side);
                                text('🐕', x * side, y * side + toBot);
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
        },1000
    )
    




//     function main() {
//         let socket = io();
//         let button = document.getElementById('Fall');
        
//         function handleSubmit() {
//         let val = input.value;
//         if (val != "") {
//         socket.emit("send message", val);
//         }
//         }
//         button.onclick = handleSubmit;