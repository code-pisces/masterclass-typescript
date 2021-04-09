import { Router } from 'express';

const routes = Router();

import UserController from './controllers/UserController'

routes.get('/users', UserController.index );
routes.post('/users/create', UserController.create);

export default routes;