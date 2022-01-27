let count = 0;
let instance;

class Counter{

    constructor(){
        if(instance){
            throw new Error("Instance already present")
        }

        instance = this
    }

    getInstance(){
        return this;
    }

    getCount(){
        return count
    }

    increamentCount(){
        count++;
    }

    decrementCount(){
        count--;
    }

}

let C1 = Object.freeze(new Counter())
// let C2 = new Counter()

export default C1 