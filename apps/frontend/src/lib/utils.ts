import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * ---
 *
 * ## cn
 *
 * Combina classes com tailwind-merge.
 *
 * @param inputs - Array de classes para serem combinadas separadas por espaço.
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
