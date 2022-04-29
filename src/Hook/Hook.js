import { useEffect, useState } from "react"

const useHook = ()=>{
    const [perfumes, setPerfumes] = useState([]);

    useEffect(()=>{
        const url ="https://gentle-crag-55338.herokuapp.com/product";
        fetch(url)
        .then(res => res.json())
        .then(data => setPerfumes(data))
    },[])

    return [perfumes, setPerfumes];
}
export default useHook;