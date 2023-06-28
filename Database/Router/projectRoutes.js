import { Router } from "express";
import * as controller from '../Controllers/projectsController.js'

const router = Router()
router.get('/get/',controller.getProjects)
router.get('/get/:id',controller.getProject)
router.post('/add',controller.addProject)
router.put('/update/:id',controller.updateProjects)
router.delete('/delete/:id',controller.deleteProjects)

export default router