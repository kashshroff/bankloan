import { Router } from 'express'
import { createUser, login, verifyUser } from '../../Components/User'
import { auth } from '../../Middleware/auth'

// For internal router
const router = Router({ mergeParams: true });

router.post('/login', login)

router.post('/', createUser)
router.get('/', auth, verifyUser)

export default router