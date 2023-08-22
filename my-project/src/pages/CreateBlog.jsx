

export const CreateBlog = () => {
  return (
    <div className="w-[60vw] mx-auto mt-10 "> 
        <h1 className="text-xl font-bold text-center">CreateBlog</h1>
          <form className=" flex flex-col gap-2">
            <label className="font-semibold text-lg" htmlFor="title">Title:</label>
            <input type="text" name="title" placeholder="Enter the blog title" className="px-3 py-2 rounded-md outline-none border-2 border-gray-300" />
            <label className="font-semibold text-lg" htmlFor="description">Description:</label>
            <textarea placeholder="Enter the content" name="" id="" cols="30" rows="10" className="px-3 py-2  rounded-md outline-none border-2 border-gray-300"></textarea>
            <button type="submit" className="bg-purple-300 hover:bg-purple-500 rounded-md text-lg text-white py-2 font-semibold">Submit </button>
          </form>
    </div>    
       
  
  )
}
 export default CreateBlog
 