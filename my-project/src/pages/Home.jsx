import {AiFillDelete} from "react-icons/ai"
import {MdOutlineModeEditOutline} from "react-icons/md"

export const Home = () => {

  return( 
     <div className="mt-10">
    <div className="w-[40vw]   mx-auto p-2 rounded-md shadow-md">
<div className="flex justify-end  gap-3 m-2">
<AiFillDelete className="text-gray-400 hover:text-red-500 cursor-pointer hover:scale-110 transition-all"/>
<MdOutlineModeEditOutline className="text-gray-400 hover:text-red-500 cursor-pointer hover:scale-110 transition-all"/>
</div>
<h2 className="text-lg font-bold my-2">
  Lorem ipsum dolor sit, amet consectetur adipisicing.
</h2>
<h3 className="text-gray-500 font-semibold">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quidem harum, deserunt, vitae ratione dicta expedita quaerat velit, assumenda nesciunt fuga id amet cupiditate cumque!
</h3>
    </div>
  </div>
 );
};
export default Home