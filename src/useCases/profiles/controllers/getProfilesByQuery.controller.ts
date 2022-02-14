import { NextFunction, Response, Request } from 'express';

import { getAllProfilesService } from '../services/getAllProfiles.service';
import { getProfilesByQueryService } from '../services/getProfilesByQuery.service';

export const getProfilesByQueryController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const profiles = await getProfilesByQueryService();

    return res.status(200).json(profiles);
  } catch (error) {
    return next(error);
  }
};
