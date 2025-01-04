import { Task } from '@entities/task'
import { faker } from '@faker-js/faker'

interface MakeTaskProps {
  title?: string
  description?: string
  createdAt?: Date
  updatedAt?: Date | null
}

/**
 *
 * ---
 *
 * ## Factory Function
 *
 * Creates a new Task instance with random data.
 *
 * ---
 *
 * @param prop - Task properties for the new Task instance. Allow to customize the title, description, createdAt and updatedAt. If not provided, random data will be generated.
 * @param id - Task id. If not provided, a random id will be generated.
 * @returns - A new Task instance with the provided properties.
 *
 */
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
