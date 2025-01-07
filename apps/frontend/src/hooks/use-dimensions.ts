import { useEffect, useState } from 'react'

/**
 * ---
 *
 * ## Hook
 *
 * Um hook é uma função que pode ser usada em um componente ou em um componente filho. Eles são úteis para reutilizar código e para lidar com eventos específicos.
 *
 * ---
 *
 * ### useDimensions
 *
 * Retorna as dimensões da tela (Largura e Altura) do navegador.
 *
 * ---
 *
 */
export function useDimensions() {
  const [dimensions, setDimensions] = useState<{
    width: number
    height: number
  }>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return dimensions
}
