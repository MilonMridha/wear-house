import { useEffect, useState } from "react"

const useHook = ()=>{
    const [perfumes, setPerfumes] = useState([]);
const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const url ="https://gentle-crag-55338.herokuapp.com/product";
        fetch(url)
        .then(res => res.json())
        .then(data => setPerfumes(data))
        setLoading(false);
    },[])

    return [perfumes, setPerfumes, loading];
}
export default useHook;