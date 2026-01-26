import { useState } from "react"

export const ListCloth=()=>{
    const[cloth,setCloth]=useState([
        {id:1,title:"shirt",price:500},
         {id:2,title:"pant",price:700},
    ],)
    // const addNewCloth={id:Date.now(),title:"shawl",price:200}
    const addCloth=()=>{
        setCloth([...cloth,{id:Date.now(),title:"shawl",price:200},])
      
    }
//console.log(cloth[0]);
cloth.forEach((cloth))

return(
    <>
    <button onClick={addCloth}>add cloth</button>

   {cloth.map(c=>(
    <p key={c}>{c.id}
    {c.title}{c.price}</p>
   ))}

   
    </>
)

}