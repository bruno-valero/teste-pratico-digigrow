import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent, CardHeader } from '../ui/card'

export function Banner() {
  return (
    <header className="relative mb-10 flex w-full items-center justify-center bg-gradient-to-r from-background from-10% via-primary-foreground/60 via-50% to-background to-90% text-white shadow-lg shadow-chart-1/20">
      {/* <ThemeToggle /> */}
      <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-9 sm:px-6 lg:px-8">
        {/* <h1 className="font-sans text-3xl font-bold">Banner</h1> */}
        <Link href="/">
          <Image
            alt="logo digigrow"
            src="/task-app-logo.svg"
            width={456}
            height={100}
          />
        </Link>
      </div>
      <Card className="absolute -bottom-6 items-center justify-center border-none bg-primary-foreground shadow-lg shadow-chart-1/20">
        <CardHeader className="py-3">
          {/* <CardTitle>Título do Card</CardTitle> */}
          <CardContent className="m-0 p-0">Gerencie suas tarefas</CardContent>
        </CardHeader>
      </Card>
    </header>
  )
}
// 4,566666666666667
