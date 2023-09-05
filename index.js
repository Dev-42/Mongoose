const mongoose = require('mongoose')
const blogSchema = new mongoose.Schema({
    author : {type: String , required: true },
    title : String,
    createAt: Date,
    content: String,
    tags: [String]
})
const Blog = mongoose.model('blog',blogSchema)
const main = async () => {
    try{
    const conn = await mongoose.connect("mongodb://localhost:27017/website")
    
    console.log("Connected")
    
    // const blog = new Blog({
    //     author: "Jenna Doe",
    //     title: "Learn Mongo",
    //     createdAt: new Date(),
    //     content: "Mongo is good...",
    //     tags: ["mongo","tech"]
    // })
    const data = await Blog.find().sort({title: -1})    
    console.log(data)
    // await blog.save()

    conn.disconnect()
    }catch(e){
        console.log(e)
    }
}
main()