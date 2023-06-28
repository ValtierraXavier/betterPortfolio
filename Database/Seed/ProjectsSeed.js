import Project from "../Models/ProjectModels.js";
import mongoose from "mongoose"
import data from "../DB/projectData.json" assert{type: 'json'}
import chalk from "chalk";
import db from '../DB/connection.js'

try{
    await Project.deleteMany()
    await Project.create(data)
    console.log(chalk.yellowBright('Done!'))
    await mongoose.disconnect()
}catch(error){console.log('Error: ', error)}