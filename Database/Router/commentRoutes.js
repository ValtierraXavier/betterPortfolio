import { Router } from "express";
import * as controller from '../Controllers/commentsController.js'

const router = Router()
router.get('/get/',controller.getComments)
router.get('/get/:id',controller.getComment)
router.post('/add',controller.addComment)
router.put('/update/:id',controller.updateComment)
router.delete('/delete/:id',controller.deleteComment)

export default router