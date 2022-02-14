import { NextFunction, Response, Request } from 'express';

import { visitCardMock, visitCardMock3 } from '../../../MOCK/visitCardMock';
import { createVisitCardService } from '../services/createVisitCard.service';

export const createVisitCardController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const visitCard = await createVisitCardService(visitCardMock3);
    return res.status(200).json(visitCard);
  } catch (error) {
    return next(error);
  }
};
