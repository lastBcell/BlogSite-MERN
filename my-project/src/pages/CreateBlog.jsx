

export const CreateBlog = () => {
  return (
    <div className=" w-[60vw] mx-auto mt-10 "> 
        <h1 className="text-xl font-bold text-center">CreateBlog</h1>
          <form className=" flex flex-col gap-2">
            <label className="font-semibold text-lg" htmlFor="title">Title:</label>
            <input type="text" name="title" placeholder="Enter the blog title" className="px-3 py-2 rounded-md outline-none border-2 border-gray-300" />
          </form>
    </div>    
       
  
  )
}
 export default CreateBlog
 