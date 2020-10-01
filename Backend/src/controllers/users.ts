// Users Controller
import JWT from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import User from '../models/users'
import { JWT_SECRET } from '../configuration'

const signToken = (data: {id:number | null}) => {
    return JWT.sign({
        iss: 'Cofrinho',
        sub: data.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET)
}

export default {
    signUp: async (req:Request, res:Response, _:NextFunction) => {
        const { name, email, password } = req.body 
        const data = await User.new({name, email, password})

        if(data.error) return res.status(409).send(data)

        const token = signToken(data)

        return res.status(200).send({token})
    },
    signIn: async (__:Request, res:Response, _:NextFunction) => {
        res.send('ok')
    },
    secret: async (__:Request, res:Response, _:NextFunction) => {
        res.send('ok')
    }
}