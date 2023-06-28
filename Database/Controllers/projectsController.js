import Project from '../Models/ProjectModels.js'
import Comments, {commentSchema} from '../Models/CommentModels.js'

export const getProjects = async (req,res) =>{
    try {
        const projectInfo = await Project.find({})
        res.json(projectInfo)
    } catch (error) {
        console.log('error: ', error)
    }
}

export const getProject = async (req,res) =>{
    try {
        const {id} = req.params
        const singleProject = await Project.findById(id)
        if(singleProject){
            res.json(singleProject)
        }
    } catch (error) {
        console.log('error: ', error)
    }
}

export const addProject = async (req,res) => {
try {
    const quote = new Project(req.body)
    await quote.save()
    await res.send(`${quote}\n\bwas entered into the DB\b`)
} catch (error) {
    console.log('error: ', error)
}
}

export const updateProjects = async(req,res) => {
    try {
        const {id} = req.params
        const oldOne = await Project.findById(id)
        const projectInfo = await Project.findByIdAndUpdate(id, req.body)
        await projectInfo.save()
        const newOne = await Project.findById(id)
        await res.send(`${oldOne} \nwas changed to\n ${newOne}`)
    } catch (error) {
        console.log('error: ', error)
    }
}

export const deleteProjects = async (req,res) =>{
    try{
    const {id} =req.params
    const deleted = await Project.findById(id)
    const quote = await Project.findByIdAndDelete(id)
    await res.send(`Deleted:\n ${deleted}`)
    }catch (error) {
        console.log('error: ', error)
    }
}

