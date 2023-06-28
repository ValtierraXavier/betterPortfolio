import api from './projectsApi.js'
import chalk from 'chalk'

export const getAllData = async () =>{
    try{
        const data = await api.get('/projects/get');
        return data;
    }catch(error){
        console.log(chalk.redBright("Error: "), error);
    };
}

export const getOneData = async (id) =>{
    try{
        const data = await api.get(`/projects/get/${id}`);
        return data;
    }catch(error){
        console.log(chalk.redBright("Error: "), error);
    };
}

export const createData = async (comment) =>{
    try{
       const data = await api.post(`projects/add`, comment)
       return data.data
    }catch(error){
        console.log(chalk.redBright("Error: "), error);
    };
}

export const editData = async (id, edits) =>{
    try{
       const data = await api.put(`/projects/update/${id}`, edits)
       return data.data
    }catch(error){
        console.log(chalk.redBright("Error: "), error);
    };
}

export const deleteData = async (id) =>{
    try{
       await api.delete(id)
       .then((res)=>console.log(res))
    }catch(error){
        console.log(chalk.redBright("Error: "), error);
    };
}

