class Grass extends LivingGreature{
 

    mul(){
     this.multiply++
     let emptyCells = this.chooseCell(0)
    let newCell = random(emptyCells)

       if(newCell && this.multiply >=4){
            let newX = newCell[0]
            let newY = newCell[1]
 
            matrix[newY][newX] = 1

            let gr = new Grass(newX, newY);
            grassArray.push(gr)

            this.multiply = 0
       }
    }

}