import { useParams } from "react-router-dom"

export default function Movies (){
    const params=useParams();
    const {movies_name} = params
    
    return(
        <>
        {movies_name}
        <h1>This is a great movie </h1>
        </>
    )
}