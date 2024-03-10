import {react, useEffect, useState} from "react"
import axios from "axios"
export default function BookComponent(){
    const [books , setBooks] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/books/getbooks").then((res)=>{
            console.log(res.data.data);
            setBooks(res.data.data);
        })
    },[])
    return <div>
        "Hello"
    </div>
}
