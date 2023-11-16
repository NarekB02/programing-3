class Child extends Parents{
    constructor(name, age, gen){
        super(name, age, gen)
        this.hige = 158;
    }

    walk(){
        super.walk();
        console.log("Es im uzacov kqelem");
    }

    jump(){
        console.log("jump" + this.hige)
    }
}