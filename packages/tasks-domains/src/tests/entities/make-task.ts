import { Task } from '@entities/task'
import { faker } from '@faker-js/faker'

interface MakeTaskProps {
  title?: string
  description?: string
  createdAt?: Date
  updatedAt?: Date | null
}

export function makeTask(prop?: MakeTaskProps, id?: string) {
  const task = Task.create(
    {
      description:
        prop?.description ?? faker.lorem.sentence({ min: 3, max: 5 }),
      title: prop?.title ?? faker.lorem.sentence({ min: 1, max: 3 }),
      createdAt: prop?.createdAt ?? faker.date.past(),
      updatedAt:
        prop?.updatedAt !== null
          ? (prop?.updatedAt ??
            (Math.random() > 0.5 ? faker.date.recent() : null))
          : null,
    },
    id,
  )

  return task
}
