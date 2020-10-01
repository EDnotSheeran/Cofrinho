// Users Route
import Auth from  '../../Auth'
import Router from 'express-promise-router'
const router = Router()

import UsersController from '../controllers/users'

router.route('/signup')
    .post(UsersController.signUp)

router.route('/signin')
    .post(UsersController.signIn)

router.route('/secret')
    .get(Auth.authenticate('jwt', { session: false }), UsersController.secret)

export default router