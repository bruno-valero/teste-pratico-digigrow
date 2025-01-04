/**
 * ---
 *
 * ## FuncArgs
 *
 * Infere o tipo de argumentos de uma função.
 *
 * ---
 */
export type FuncArgs<T> = T extends (...args: infer U) => unknown ? U : never
