//  Promise
fetch('https://fakestoreapi.com/users/1')
    .then( res => res.json())
    .then( data => console.log(data) )
    .catch( err =>{
    console.log(err)
})


// Async Await
const data = async() => {
    try{
        const res = await fetch('https://fakestoreapi.com/users/1')
        if(!res.ok){
            throw new Error ("Something went wrong")
        }
        const data = await res.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
data();