"use client"
import { url } from "inspector";
import Image from "next/image";
import { useState } from "react";

export default function Card(){

    const [isHovered, setIsHovered] = useState(false);

let touch = ()=>{
console.log("touch")

}
     

    return (
        <div className="border-solid border-2 border-inherit  p-2 m-1" onMouseEnter={()=>setIsHovered(true)}  onMouseLeave={() => setIsHovered(false)}>

<div>
<Image

      src={"https://hifis-pk.stackstaging.com/wp-content/uploads/2024/02/e5f99a17-e8fd-43ef-907c-fa59016f21c9-copy.jpg"}
      width={180}
      height={180}
      alt="Picture of the author"
    />

    <div>
    {isHovered && (
    <div>
        
    </div>


      )}
    </div>
</div>
            <p className="pt-2 text-sm">    
                Kids suit
            </p>
            <div className="flex items-center py-2 " style={{alignSelf:"center"}}>

        <p className=" text-sm" >Rs 750 </p>
        <p className="line-through text-sm">Rs 1,500</p>
            </div>
            <div className="bg-slate-700"> 


  </div>
        </div>
    )
}