function math(){
    return{
        double(n){
            return n*2;
        },
        square(n){
            return n*n;
        },
        cube(n){
            return n*n*n;
        }
    }
}

const utils = math()

utils.double(6)  // 12
utils.square(7)   // 49
utils.cube(5)  // 125