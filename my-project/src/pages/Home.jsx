import {useState, useEffect} from "react";
import {AiFillDelete} from "react-icons/ai";
import {MdOutlineModeEditOutline} from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';

export const Home = () => {
 
  const [posts, setPosts] = useState([]);
  const [editPost, seteditPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");

  useEffect(() => {
    getPosts();
  }, [posts]);
  
  const getPosts =  async()=>{
  const response = await fetch("http://localhost:5000/get-blogs");
  const data = await response.json();
  setPosts(data.blogs);
}

const deletePost = async(id)=>{
const response = await fetch(`http://localhost:5000/delete-blog/${id}`,{method:"DELETE",});

if(response.status === 200){
  toast.success("post deleted successfully");
}else{
  toast.error("something went wrong");
}};

const updatePost = async(id)=>{
console.log(title,description,id);
const response = await fetch(`http://localhost:5000/update-blog/${id}`,{method:"PUT",headers:{"content-Type":"application/json"},body:JSON.stringify({title, description}),});
if (response.status === 200){
  toast.success(" Blog Post Updated");
}else{
  toast.error("Something Went Wrong");
}
};

  return( 
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
     <div className="my-10">
      {
        posts.map((post) =>{
          return(
                <div className="w-[40vw]   mx-auto p-2 rounded-md shadow-md" key={post._id}>
<div className="flex justify-end  gap-3 m-2">
<AiFillDelete className="text-gray-400 hover:text-red-500 cursor-pointer hover:scale-110 transition-all" onClick={()=>deletePost(post._id)}/>
<MdOutlineModeEditOutline className={`${selectedPost === post._id && editPost?"text-red-400 scale-110" :"text-gray-400"} text-gray-400 hover:text-red-500 cursor-pointer hover:scale-110 transition-all`}onClick={()=>{seteditPost(!editPost);setSelectedPost(post._id);}}/>
</div>
<h2 className="text-lg font-bold my-2 selection:bg-green-400 outline-none focus:bg-gray-100" contentEditable={editPost}suppressContentEditableWarning={true} onInput={(e)=>setTitle(e.target.innerText)}>
 {post.title}
</h2>
<h3 className="text-gray-500 font-semibold selection:bg-green-400 outline-none focus:bg-gray-100" contentEditable={editPost} suppressContentEditableWarning={true} onInput={(e)=>setDescription(e.target.innerText)}>
 {post.description}
</h3>
<button  className={`${selectedPost === post._id && editPost?"block": "hidden"} bg-purple-400 px-3 py-1 my-1 rounded-md hover:bg-purple-600 font-bold text-white`} onClick={()=> updatePost(post._id)}>Save</button>
    </div>
          );
        })
      }

  </div>
  </>
 );
};
export default Home