export type FuncArgs<T> = T extends (...args: infer U) => unknown ? U : never
