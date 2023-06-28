import db from './connection.js';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk'
import routes from '../Router/index.js'

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/', routes);

db.on('connected', () => {
console.clear()
console.log(chalk.greenBright.bold('Connected!'))
app.listen(PORT, () =>{
    console.log(chalk.yellowBright.bold(`Express is Running on ${PORT}`))
})
})