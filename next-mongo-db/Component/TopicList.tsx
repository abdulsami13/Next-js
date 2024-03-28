import Link from "next/link";
import RemoveBTN from "./RemoveBTN";
import { HiPencilAlt } from "react-icons/hi";


const getTopic = async()=>{
    
    try{
        
const res= await fetch(`http://localhost:3000/api/topics `,{
    cache:"no-store"
})

if(!res){
throw new Error("Fail to Fatch"); 
}
return res.json();
    }catch(e){
        console.log("Error loading topic",e)
    }
}


export default async function TopicList() {
const {topics } = await getTopic();

// console.log(topics)

    return (
        <>
{topics.map((value:any,index:number):any =>(


            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start" key={index}>

                <div >
                    <h2 className="font-bold text-2xl ">{value.title}</h2>
                    <div>{value.description}</div>
                </div>
                <div className="flex gap-2">
<RemoveBTN id={value._id}/>
<Link href={`/editTopic/${value._id}`}> 
<HiPencilAlt size={24} />
</Link>
                </div>
            </div>
            ))}
        </>
    )
}