import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortController = new AbortController();
        fetch(url, {signal:abortController.signal})
        .then((res) => {
            if (!res.ok){
                throw Error("data fetching failed!")
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch((err)=>{
            if(!err.name === "AbortError"){
                setError(err.message);
                setIsPending(false);
            }
        })
        return()=>abortController.abort();
    }, [url]);
    
    return {data, isPending, error};
}
 
export default useFetch;