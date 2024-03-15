// class Data {

//     qqq = 3

//     getFullYear(){

//     }

//     getMonth(){

//     }
// }

const data = new Date()
console.log(data.getFullYear()); 
console.log(data.getMonth() + 1); 

class Monster {

    power = 10

    constructor(qqq){
        this.power = qqq
    }

    attact = () => {
        console.log("공격하자!!");
        console.log("내 공격력은" + this.power + "야!!!");
    }
    run = () => {
        console.log("도망가자!!");
    }
}

const mymonster1 = new Monster(20)
mymonster1.attact()
mymonster1.run()

const mymonster2 = new Monster(50)
mymonster2.attact()
mymonster2.run()