const express = require("express");
const cors = require("cors");
const { connectDb } = require("./connection");
const BlogPost = require("./models/BlogPost");
const app = express();
const port = 5000;
//  connect databse
connectDb();
//middlewares

app.use(express.json());
app.use(cors());

// routers
// route for post a blog
app.post("/post-blog", async(req, res) => {
    let blog = new BlogPost({
        title: req.body.title,
        description: req.body.description,
    });

    await blog.save();

    res.json({ messsage: "blog post saved successfully", blog});

});
// route for get blogs
app.get("/get-blogs", async(req,res)=>{
    let blogs = await BlogPost.find();
    if(!blogs){
        res.status(404).json({message:"no blogs found"});
    }
    res.json({blogs});

});
//  routes for delete the post
app.delete("/delete-blog/:id", async(req,res)=>{
let blog = await  BlogPost.findByIdAndDelete(req.params.id);
if(!blog){
    res.status(404).json({message:"no blog found"});
}
res.status(200).json({message:"blog deleted successfully"});
});
// route for udate the post
app.put("/update-blog/:id", async(req,res)=>{
    let blog = await BlogPost.findByIdAndUpdate(req.params.id);
    if(!blog){
        res.status(404).json({message:"no blog found"});
    }
  
    if(!req.body.title && !req.body.description){
        res.json({messaage:"plz enetr the title or description"});
    }else if(!req.body.title){
         blog.description =req.body.description;   
    }
    else if(!req.body.description){
         blog.title =req.body.title;   
    }
    else{
    blog.title = req.body.title;
    blog.description =req.body.description;
    }
await blog.save();
res.status(200).json({message:"blog updated succesfully"})
});
// listen


app.listen(port,() => {
    console.log(`server is listening to the port ${port}`);
});
