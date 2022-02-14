import { NextFunction, Response, Request } from 'express';

import { getAllProfilesService } from '../services/getAllProfiles.service';

export const getAllprofilesController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { from, size } = req.query;
    const profiles = await getAllProfilesService(Number(from), Number(size));

    return res.status(200).json(profiles);
  } catch (error) {
    return next(error);
  }
};
