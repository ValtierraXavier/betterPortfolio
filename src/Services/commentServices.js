import commentsApi from './commentsApi.js'
import chalk from 'chalk'

// Comments Services

export const getAllComments = async () =>{
    try{
        const data = await commentsApi.get('/comments/get');
        return data;
    }catch(error){
        console.log(chalk.redBright("Error: "), error);
    };
}

export const getOneComment = async (id) =>{
    try{
        const data = await commentsApi.get(`/comments/get/${id}`);
        return data
    }catch(error){
        console.log(chalk.redBright("Error: "), error);
    };
}

export const createComment = async (comment) =>{
    try{
       const data = await commentsApi.post(`comments/add`, comment)
       return data.data
    }catch(error){
        console.log(chalk.redBright("Error: "), error);
    };
}

export const editComment = async (id, edits) =>{
    try{
       const data = await commentsApi.put(`/comments/update/${id}`, edits)
       return data.data
    }catch(error){
        console.log(chalk.redBright("Error: "), error);
    };
}

export const deleteComment = async (id) =>{
    try{
      await commentsApi.delete(`/comments/delete/${id}`)
       console.log('deleted!', id)
    }catch(error){
        console.log(chalk.redBright("Error: "), error);
    };
}
