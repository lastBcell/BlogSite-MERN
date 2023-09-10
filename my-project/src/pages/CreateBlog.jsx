import {useNavigate} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
export const CreateBlog = () => {

  const navigate = useNavigate();
const postData = async(e)=>{
  e.preventDefault();
  const title = e.target.title.value;
  const description = e.target.description.value;
  // console.log(title, description);
  const blog = {
    title : title,
    description : description,
  };

  // code for sending data to backend
  const response = await fetch("http://localhost:5000/post-blog", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body: JSON.stringify(blog),
  
  });
  if(response.status == 200){
    toast.success("blog posted succesfully");
    e.target.title.value = "";
    e.target.description.value ="";
    setTimeout(()=> navigate("/") ,2000);
   
  }else{
    toast.error("something went wrong");
  }
};

  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
  />

    <div className="w-[60vw] mx-auto mt-10 "> 
        <h1 className="text-xl font-bold text-center">CreateBlog</h1>
          <form className=" flex flex-col gap-2" onSubmit={postData}>
            <label className="font-semibold text-lg" htmlFor="title">Title:</label>
            <input type="text" name="title" placeholder="Enter the blog title" className="px-3 py-2 rounded-md outline-none border-2 border-gray-300" />
            <label className="font-semibold text-lg" htmlFor="description">Description:</label>
            <textarea placeholder="Enter the content" name="description"  cols="30" rows="10" className="px-3 py-2  rounded-md outline-none border-2 border-gray-300"></textarea>
            <button type="submit" className="bg-purple-300 hover:bg-purple-500 rounded-md text-lg text-white py-2 font-semibold">Submit </button>
          </form>
    </div>    
    </>
       
  
  )
}
 export default CreateBlog
 