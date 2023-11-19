class Parents {
    constructor(name, age, gen) {
        this.name = name;
        this.age = age;
        this.gen = gen;
    }

    walk() {
        console.log(this.name + "is walking");
    }

    speak() {
        console.log(this.name + "is speak" + this.gen);
    }
}