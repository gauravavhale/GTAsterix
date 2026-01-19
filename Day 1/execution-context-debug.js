function first(){
    console.log("First")
    second();
}

function second(){
    third();
}

function third(){
    console.trace('Third')
}

first();
