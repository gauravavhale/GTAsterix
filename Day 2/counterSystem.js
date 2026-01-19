function createCounter(){
    let count = 0

    return {
        increase(){
            return ++count
        },
        decrease(){
            return --count
        },
        reset(){
            count = 0;
            return count
        },
        get (){
            return count
        }
    };
}

const counter = createCounter();

counter.increase() // 1
counter.increase() // 2
counter.decrease() // 1
counter.get()   // 1
counter.reset()  // 0
