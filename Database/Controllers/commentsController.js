import Comment from '../Models/CommentModels.js'
// import Project, { projectSchema } from '../Models/ProjectModels.js'

export const getComments = async (req,res) =>{
    try {
            const comments = await Comment.find({})
            res.json(comments)
    } catch (error) {
        console.log('error: ', error)
    }
}

export const getComment = async (req,res) =>{
    try {
        const {id} = req.params
        const singleComment = await Comment.findById(id)
        if(singleComment){
            res.json(singleComment)
        }else{
            res.send('record does not exist')
        }
    } catch (error) {
        console.log('error: ', error)
    }
}

export const addComment = async (req,res) => {
try {
    const newComment = new Comment(req.body)
    await newComment.save()
    await res.send(`${newComment}\n\bwas entered into the DB\b`)
} catch (error) {
    console.log('error: ', error)
}
}

export const updateComment = async(req,res) => {
    try {
        const {id} = req.params
        const oldOne = await Comment.findById(id)
        const edits = await Comment.findByIdAndUpdate(id, req.body)
        await edits.save()
        const newOne = await Comment.findById(id)
        await res.send(`${oldOne} \nwas changed to\n ${newOne}`)
    } catch (error) {
        console.log('error: ', error)
    }
}

export const deleteComment = async (req,res) =>{
    try{
    const {id} =req.params
    const deleted = await Comment.findById(id)
    await Comment.findByIdAndDelete(id)
    await res.send(`Deleted:\n ${deleted}`)
    }catch (error) {
        console.log('error: ', error)
    }
}

