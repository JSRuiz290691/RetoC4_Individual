import { /* inject, */ BindingScope, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class NotificacionesService {
  constructor(/* Add @inject to inject parameters */) { }

  /*
   * Add service methods here
   */

  EnviarNotificacionesPorSMS(): void {
    console.log("Hola");
    const accountSid = 'ACbbfc16f005fb4672595da45b8fca7d5e'; // Your Account SID from www.twilio.com/console
    const authToken = 'bb12c42d9510483dd2b832eb18dd0818'; // Your Auth Token from www.twilio.com/console

    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
      .create({
        body: 'Hello prueba twlio',
        to: '+573183903019', // Text this number
        from: '+14787968580', // From a valid Twilio number
      })
      .then((message: any) => console.log(message.sid));
  }

  EnviarMensajesPorCorreoElectronico(): string {
    return '';
  }
}
