import mongoose from 'mongoose'
import chalk from 'chalk'

let connectConfig = {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}

mongoose.set('strictQuery', false)

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/Portfolio'

mongoose.connect(url, connectConfig)

mongoose.connection.on('connected', () => console.log(chalk.green('Connected!')))
mongoose.connection.on('disconnected', () => console.log(chalk.green('Disconnected.')))
mongoose.connection.on('error', (error) => console.log(chalk.red('Error:', error)))

export default mongoose.connection;