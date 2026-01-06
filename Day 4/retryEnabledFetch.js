
function wait(ms){
    return new Promise (resolve => setTimeout(resolve,ms))
}

const customFetch = async (url , option={}, retries=3, delay=2000) => {
    try{
        const res = await fetch(url , option)
        if(!res.ok){
            throw new Error ("Something went wrong..")
        }
        return await res.json()
    } catch (error){
        if(retries > 0){
            console.log(`${retries} retry attempts left`);
            await wait(delay)
            return customFetch(url, option, retries-1,delay);
        } else {
            throw new Error ("Out of Retry attempts")
        }
    }
}

customFetch('https://fastoreapi.com/us/1')
// customFetch('https://fakestoreapi.com/users/1')
.then( data => console.log(data))
.catch( error => console.log(error))
