import express from 'express';

import { createVisitCardController } from '../useCases/profiles/controllers/createVisitCard.controller';
import { getAllprofilesController } from '../useCases/profiles/controllers/getAllprofiles.controller';
import { getProfilesByQueryController } from '../useCases/profiles/controllers/getProfilesByQuery.controller';
import { updateVisitCardController } from '../useCases/profiles/controllers/updateVisitCard.controller';

const profilesRouter = express.Router();

profilesRouter.get('/', getAllprofilesController);
profilesRouter.get('/query', getProfilesByQueryController);
profilesRouter.put('/', updateVisitCardController);
profilesRouter.post('/', createVisitCardController);

export { profilesRouter };
