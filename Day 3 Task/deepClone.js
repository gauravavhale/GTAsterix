var obj = {
    name : "John Doe",
    position : "Developer",
    loca : {
        street : "Street 101",
        city : "Barcelona",
        country : "Spain"
    }
}

function deepCopy(obj){

    if( typeof obj !== 'object' || obj === null){
        return obj 
    }

    var copiedVal = Array.isArray(obj) ? [] : {}
    var keys = Object.keys(obj)

    for( var i=0; i < keys.length; i++){
        copiedVal[keys[i]] = deepCopy(obj[keys[i]])
        }
    return copiedVal;
}

var copy = deepCopy(obj);
copy.loca.street = 'Street 102'
console.log(obj);
console.log(copy);