import {Entity, model, property} from '@loopback/repository';

@model()
export class MensajesEmpleados extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  idEmpleado: string;

  @property({
    type: 'string',
    required: true,
  })
  cuerpoMensaje: string;


  constructor(data?: Partial<MensajesEmpleados>) {
    super(data);
  }
}

export interface MensajesEmpleadosRelations {
  // describe navigational properties here
}

export type MensajesEmpleadosWithRelations = MensajesEmpleados & MensajesEmpleadosRelations;
