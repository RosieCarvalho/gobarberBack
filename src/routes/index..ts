import { Router } from 'express';
import agendamentosRouter from './agendamentos.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
const routes = Router();
routes.use('/agendamentos', agendamentosRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
