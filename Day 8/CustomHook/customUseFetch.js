function useFetch ( url ) {

    const { useState, useEffect } = React;

    const [data,setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        let isMounted = true;
        setLoading(true)

        fetch(url)
        .then( res =>{
            if(!res.ok){
                throw new Error ('Something went wrong')
            }
            return res.json();
        })
        .then( (json) =>{
            if(isMounted){
                setData(json);
                setLoading(false);
            }
        })
        .catch( (error) =>{
            if(isMounted){
                setError(error);
                setLoading(false);
            }
        });

        return () => {
            isMounted = false;
        };
        
    },[url])

    return { data, error , loading };
}