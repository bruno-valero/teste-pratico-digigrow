import { Task } from '@digigrow/tasks-domains'
import { Task as PrismaTask } from '@prisma/client'

export class PrismaTaskMapper {
  static toDomain(task: PrismaTask): Task {
    const newTask = Task.create(
      {
        title: task.title,
        description: task.description,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
      },
      task.id,
    )

    return newTask
  }

  static toPrisma(task: Task): PrismaTask {
    return task.toObject()
  }
}
