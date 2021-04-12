import { Router } from 'express';
import  {parseISO}  from  'date-fns' ;
import AppointmentsRepository from '../repositories/AgendamentosRepository';
import CreateAppointmentService from '../services/CreateAgendamentoService';
import { getCustomRepository } from 'typeorm';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const AgendamentosRouter = Router();
AgendamentosRouter.use(ensureAuthenticated);

AgendamentosRouter.get('/', async (request, response) => {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointments = await appointmentsRepository.find();
    console.log('->passou aqui',appointments)
    return response.json(appointments);
  });


  AgendamentosRouter.post('/', async(request, response) => {
  try{
    const { provider_id, date } = request.body;

  const parsedDate = parseISO(date);
  const createAppointment = new CreateAppointmentService();



  const appointment = await createAppointment.execute({
    date: parsedDate,
    provider_id,
  });
  return response.json(appointment);
} catch(err){
    return response.status(400).json({error: err.message})
}
});

export default AgendamentosRouter;
