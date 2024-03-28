import EditTopicForm from "../../../../Component/EditTopicForm";

const getTopicById = async(id:string)=>{
    try{
        const res = await fetch(`http://localhost:3000/api/topics/${id} `,{
            cache:"no-cache"
        });


        if(!res.ok){
            throw new Error("Failed to fetch Topic");
        }
        const data = await res.json();
        return data;
    }
    catch(error){
        console.log(error);
    }
}


interface Params {
    params:{

        id: string;
    }
  }
export default async function  editTopic({params}:Params){


    const {id} = params;
  const {topic} =  await getTopicById(id);
  const {title,description} = topic;
    return <EditTopicForm id={id} title={title} description={description} />
}