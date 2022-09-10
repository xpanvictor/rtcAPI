import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';

import userService from '@services/user-service';
import { ParamMissingError } from '@shared/errors';
import { IUser } from '@models/user-model';
import { IReq } from 'src/types/express';


// **** Variables **** //

// Misc
const router = Router(),
  { CREATED, OK } = StatusCodes;

// Paths
export const p = {
  get: '/all',
  add: '/add',
  update: '/update',
  delete: '/delete/:id',
} as const;


// **** Routes **** //

/**
 * Get all users.
 */
router.get(p.get, async (_: Request, res: Response) => {
  const users = await userService.getAll();
  return res.status(OK).json({ users });
});

/**
 * Add one user.
 */
router.post(p.add, async (req: IReq<{user: IUser}>, res: Response) => {
  const { user } = req.body;
  if (!user) {
    throw new ParamMissingError();
  }
  await userService.addOne(user);
  return res.status(CREATED).end();
});

/**
 * Update one user.
 */
router.put(p.update, async (req: IReq<{user: IUser}>, res: Response) => {
  const { user } = req.body;
  if (!user) {
    throw new ParamMissingError();
  }
  await userService.updateOne(user);
  return res.status(OK).end();
});

/**
 * Delete one user.
 */
router.delete(p.delete, async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    throw new ParamMissingError();
  }
  await userService.delete(Number(id));
  return res.status(OK).end();
});


// **** Export default **** //

export default router;
