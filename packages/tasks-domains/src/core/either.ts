/**
 * ---
 *
 * ## Left
 *
 * É destinada para ser utilizada quando ocorrer um erro.
 *
 * ---
 */
export class Left<L, R> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }

  /**
   * ---
   *
   * ## (Left / Right).isRight
   *
   * Verifica se o valor do objeto é do tipo Right.
   *
   * ---
   *
   * @returns - Retorna true se o valor for do tipo Right, false caso contrário.
   */
  isRight(): this is Right<L, R> {
    return false
  }

  /**
   * ---
   *
   * ## (Left / Right).isLeft
   *
   * Verifica se o valor do objeto é do tipo Left.
   *
   * ---
   *
   * @returns - Retorna true se o valor for do tipo Left, false caso contrário.
   */
  isLeft(): this is Left<L, R> {
    return true
  }

  //   getRight() {
  //     return this.value as unknown as Right<L, R>['value']
  //   }

  //   getLeft() {
  //     return this.value as Left<L, R>['value']
  //   }
}

/**
 * ---
 *
 * ## Right
 *
 * É destinada para ser utilizada quando ocorrer um sucesso.
 *
 * ---
 */
export class Right<L, R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }

  /**
   * ---
   *
   * ## (Left / Right).isRight
   *
   * Verifica se o valor do objeto é do tipo Right.
   *
   * ---
   *
   * @returns - Retorna true se o valor for do tipo Right, false caso contrário.
   */
  isRight(): this is Right<L, R> {
    return true
  }

  /**
   * ---
   *
   * ## (Left / Right).isLeft
   *
   * Verifica se o valor do objeto é do tipo Left.
   *
   * ---
   *
   * @returns - Retorna true se o valor for do tipo Left, false caso contrário.
   */
  isLeft(): this is Left<L, R> {
    return false
  }

  //   getRight() {
  //     return this.value as Right<L, R>['value']
  //   }

  //   getLeft() {
  //     return this.value as unknown as Left<L, R>['value']
  //   }
}

/**
 * ---
 *
 * ## Either
 *
 * É destinada para ser utilizada quando há um resultado de uma operação que pode ser sucesso ou erro.
 *
 * ---
 */
export type Either<L, R> = Left<L, R> | Right<L, R>

/**
 * ---
 *
 * ## left
 *
 * É destinada para ser utilizada quando ocorrer um erro.
 *
 * ---
 * @param value - Valor do erro.
 * @returns - Uma instância do tipo `Left`.
 */
export const left = <L, R>(value: L): Either<L, R> => new Left(value)

/**
 * ---
 *
 * ## right
 *
 * É destinada para ser utilizada quando ocorrer um sucesso.
 *
 * ---
 *
 * @param value - Valor do sucesso.
 * @returns - Uma instância do tipo `Right`.
 */
export const right = <L, R>(value: R): Either<L, R> => new Right(value)
