/**
 *
 * ---
 * ## ValueObject
 *
 * É destinada para ser extendida por classes que representam valor objetos do sistema.
 *
 * ---
 *
 * @param Props - Tipo das propriedades do objeto.
 */
export abstract class ValueObject<Props> {
  protected props: Props

  protected constructor(props: Props) {
    this.props = props
  }

  public equals(vo: ValueObject<unknown>) {
    if (vo === null || vo === undefined) {
      return false
    }

    if (vo.props === undefined) {
      return false
    }

    return JSON.stringify(vo.props) === JSON.stringify(this.props)
  }
}
