import { /* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * Add service methods here
   */

  EnviarNotificacionesPorSMS(telefono: string, nombre: string, email: string, clave: string): void {
    console.log("Persona y/o empleado creado");
    const accountSid = 'ACbbfc16f005fb4672595da45b8fca7d5e'; // Your Account SID from www.twilio.com/console
    const authToken = '951fed216d0a489ab934b14b3c280778'; // Your Auth Token from www.twilio.com/console

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: `Hola ${nombre}, su nombre de usuario es ${email} y su contraseña es ${clave}. ¡Bienvenido!`,
        to: telefono, // Text this number
        from: '+14787968580', // From a valid Twilio number
      })
      .then((message: any) => console.log(message.sid));
  }

  EnviarMensajesPorCorreoElectronico(): string {
    return '';
  }
}
