const mongoose = require('mongoose')
// Since we are connecting our database(MongoDB) to our server(Node + Express) we are working with a asyncrounous way
// Creating data
const userSchema = mongoose.Schema({
    name : {type : String , validation : true , unique : true},
    age : {type : Number , default : 18},
    country : {type : String , required : true, enum : ["USA","India","Maldives"],default : "India"}
})
const UserModule = mongoose.model('user',userSchema)

const main = async() => {
    try{
        const connection = await mongoose.connect('mongodb://127.0.0.1:27017/mgnclass')
        console.log("Connected to database")
        // Inserting data is so simple by creating schemas
        await UserModule.insertMany([{name : "Arbaz"}])
        console.log("Data inserted")
        // It's so simple to read data
        // const data = await UserModule.find()
        // console.log(data)
        connection.disconnect()
    }catch(e){
        console.log("Error connecting to DB")
        console.log(e)
    }
    
}
main()