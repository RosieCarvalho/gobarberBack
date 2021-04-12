
import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Agendamento';
import AppointmentsRepository from '../repositories/AgendamentosRepository';
import AppError from '../errors/AppError';

//DTO
interface Request {
  date: Date;
  provider_id: string;
}

class CreateAppointmentService {
    //principio do SOLID- uso de uma outra instancia dentro da classe
        //não instanciar sempre quando precisar usar, mas só importar


    public async execute({ date, provider_id }: Request): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(AppointmentsRepository);
        const appointmentDate = startOfHour(date);

        const findAppointmentInSameDate = await appointmentsRepository.findByDate(
            appointmentDate,
          );

    if (findAppointmentInSameDate) {
        throw new AppError('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });
    await appointmentsRepository.save(appointment);
    return appointment;
}
}

export default CreateAppointmentService;
