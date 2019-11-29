const newFather = class Father {
    constructor(name) {
        this.name = name;
    }
    static age = 45;
    sayage() {
        console.log(this.age);
    }
    static height = 170;
    sayheight() {
        console.log(this.height)
    }

}
class child extends newFather {
    constructor(name) {
        super(name);
    }
    age = 15;
    sayage() {
        super.sayage()
    }
    height = 180;
    sayheight() {
        super.sayheight()
    }
}
let child1 = new child('Mr.mihiki');
child1.sayage();
child1.sayheight();
console.log(child1.name);