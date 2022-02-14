import { NextFunction, Response, Request } from 'express';

import {
  visitCardMock,
  visitCardMock2,
  visitCardMock4,
} from '../../../MOCK/visitCardMock';
import { createVisitCardService } from '../services/createVisitCard.service';
import { updateVisitCardService } from '../services/updateVisitCard.service';

export const updateVisitCardController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const visitCard = await updateVisitCardService(visitCardMock4);
    return res.status(200).json(visitCard);
  } catch (error) {
    return next(error);
  }
};
