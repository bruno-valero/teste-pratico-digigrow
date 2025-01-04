import { randomUUID } from 'node:crypto'

import z from 'zod'

// eslint-disable-next-line
export const uniqueEntityIdInstanceSchema = z.custom<UniqueEntityId>(
  (data) => data instanceof UniqueEntityId,
  'must be an UniqueEntityId',
)

/**
 *
 * ---
 *
 * ## UniqueEntityId
 *
 * É destinada para ser utilizada como identificador exclusivo para entidades do sistema.
 *
 * ---
 *
 * @param id - Identificador exclusivo para a entidade. Se não for fornecido, será gerado um identificador aleatório.
 */
export class UniqueEntityId {
  private _value: string

  constructor(id?: string) {
    this._value = id ?? randomUUID()
  }

  get value() {
    return this._value
  }

  public equals(id: UniqueEntityId) {
    return id.value === this.value
  }
}

export default UniqueEntityId
