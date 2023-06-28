import mongoose, { Schema } from 'mongoose'
import Comment,{commentSchema} from './CommentModels.js'


export let projectSchema = new mongoose.Schema({
        projectName: String,
        url: String,
        imgUrl: String,
        point1: String,
        point2: String,
        point3: String,
        comments: [{
                type: Schema.Types.ObjectId,
                ref: 'Comments'
            }],
        })
        
let Project = mongoose.model('Project', projectSchema)

// let aComment = new Comment({
//     commentAuthor: 'kojo',
//     commentText:'Some text.',
// })
// let aProject = new Project({
//     projectName:"A name",
//     url:'url.com',
//     imgUrl: 'image.com',
//     point1:'1',
//     point2:'2',
//     point3:'3', 
//     comments:[aComment]
// })

export default Project
