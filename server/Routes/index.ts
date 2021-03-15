import { Router } from 'express';
import User from './Users'

// Declare router
const router = Router();

// For internal router
// const router = Router({ mergeParams: true });

// Users router
router.use('/users', User);

export default router;