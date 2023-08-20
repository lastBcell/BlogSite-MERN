
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "./pages/home";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/create" element={<CreateBlog />}/>
      
     </Routes>
    </BrowserRouter>
    </>
  )
}
