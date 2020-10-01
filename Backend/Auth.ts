import passport from 'passport'
import { Strategy as JwtStrategy }  from 'passport-jwt'
// import LocalStrategy from 'passport-local'
import { ExtractJwt } from 'passport-jwt'
import db from './src/database/connection'

import { JWT_SECRET } from './src/configuration'

export default passport.use(new JwtStrategy({
        secretOrKey: JWT_SECRET,
        jwtFromRequest:ExtractJwt.fromHeader('authorization')
    }, async (payload, done) =>{
        try {
            //Find a user specifield in token
            const user = await db('users').select().where({id: payload.sub}) || null
    
            console.log(user)

            console.log(user[0])
            //If the user doesn't exits
            if(!user[0]) {
                return done(null, false)
            }
            
            //otherwise, return the user
            return done(null, user)
        } catch (error) {
            console.log(error)
            return done(error,  false)
        }
    }))