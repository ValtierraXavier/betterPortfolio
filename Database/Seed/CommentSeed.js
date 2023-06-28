import Comment from "../Models/CommentModels.js";
import mongoose from "mongoose"
import data from "../DB/commentData.json" assert{type: 'json'}
import chalk from "chalk";
import db from '../DB/connection.js'

try{
    await Comment.deleteMany()
    await Comment.create(data)
    console.log(chalk.yellowBright('Done!'))
    await mongoose.disconnect()
}catch(error){console.log('Error: ', error)}