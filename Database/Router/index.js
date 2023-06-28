import { Router } from "express";
import projectRoutes from './projectRoutes.js'
import commentRoutes from './commentRoutes.js'

const router = Router()

router.get('/',(req, res) =>{
    res.send('API Root')
})

router.use('/projects', projectRoutes)
router.use('/comments', commentRoutes)

export default router