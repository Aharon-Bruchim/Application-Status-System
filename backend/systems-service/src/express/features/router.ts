import { Router } from 'express';
import { validateRequest, wrapController } from '../../utils/express/wrappers.js';
import { SystemsController } from './controller.js';
import {
    createOneRequestSchema,
    deleteOneRequestSchema,
    getByIdRequestSchema,
    getByQueryRequestSchema,
    getCountRequestSchema,
    updateOneRequestSchema,
} from './validations.js';

export const systemRouter = Router();

systemRouter.get('/', validateRequest(getByQueryRequestSchema), wrapController(SystemsController.getByQuery));

systemRouter.get('/count', validateRequest(getCountRequestSchema), wrapController(SystemsController.getCount));

systemRouter.get('/:id', validateRequest(getByIdRequestSchema), wrapController(SystemsController.getById));

systemRouter.post('/', validateRequest(createOneRequestSchema), wrapController(SystemsController.createOne));

systemRouter.put('/:id', validateRequest(updateOneRequestSchema), wrapController(SystemsController.updateOne));

systemRouter.delete('/:id', validateRequest(deleteOneRequestSchema), wrapController(SystemsController.deleteOne));
