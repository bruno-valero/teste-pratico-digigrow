import { UniqueEntityId } from './unique-entity-id'

/**
 *
 * ---
 * ## Entity
 *
 * É destinada para ser extendida por classes que representam entidades do sistema.
 *
 * ---
 *
 * @param Props - Tipo das propriedades do objeto.
 */
export abstract class Entity<Props> {
  private _id: UniqueEntityId
  protected props: Props

  get id() {
    return this._id
  }

  protected constructor(props: Props, id?: UniqueEntityId) {
    this.props = props
    this._id = id ?? new UniqueEntityId()
  }

  public equals(entity: Entity<unknown>) {
    if (entity === this) return true
    if (entity.id.equals(this.id)) return true
    return false
  }
}

export default Entity
