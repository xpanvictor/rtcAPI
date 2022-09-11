import { Router } from 'express';
import userRouter from './user-router';


// Init
const apiRouter = Router();

// Add api routes
// apiRouter.use('/auth', authRouter);
// apiRouter.use('/users', adminMw, userRouter);


// **** Export default **** //

export default apiRouter;
