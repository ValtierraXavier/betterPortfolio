import mongoose, {Schema} from 'mongoose'
import Project, { projectSchema } from './ProjectModels.js'

   export let commentSchema = new mongoose.Schema([{
        commentAuthor: String,
        commentText: String,
        whatProject: String,
        date: String,
        time: String

    }])
    

    let Comments = mongoose.model('Comments',commentSchema)

    // const currentTime = Date.now()
    // const time = new Date(currentTime).toLocaleTimeString()
    // console.log(time)

    // const newEntry = new Comments({
    //     commentAuthor: "Xavier",
    //     commentText: "This is a test of the new Modal",
    //     whatProject: "Rick n Morty",
    //     date: time
    // })
    // try{
    //     await newEntry.save()
    //     mongoose.disconnect()
    // }catch(error){console.log(error)}
    
    export default Comments
    