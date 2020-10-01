import db from '../database/connection'

interface UserIterface {
    name: string
    email: string
    password: string
}
interface ResponseData {
    msg: string,
    id: number | null
    error: boolean
}

export default {
    new: async (user: UserIterface):Promise<ResponseData> => {
        // 1. Validar Nome, Email e Senha 
        const { name, email, password } = user
        if(!name || !email || !password) return {msg:'Please fill in all required fields!',error:true, id: null}
        
        const alreadyExists = await db('users').where({email}).select() 
        if(alreadyExists[0]) return {msg:'User Already exists!',error:true, id: null}
        
        const userId = await db('users').insert({name, email, password})
        return {msg:'New user created!', id:userId[0], error: false}
    },
    update: async () => {
    },
    delete: async () => {
    },
    find: async() => {
    }
}