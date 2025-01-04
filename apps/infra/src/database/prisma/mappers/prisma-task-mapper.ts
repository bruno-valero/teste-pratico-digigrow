import { Task } from '@digigrow/tasks-domains'
import { Task as PrismaTask } from '@prisma/client'

/**
 * ---
 *
 * ## PrismaTaskMapper
 *
 * É responsável por mapear objetos do domínio para objetos do banco de dados.
 *
 * ---
 */
export class PrismaTaskMapper {
  /**
   * ---
   *
   * ## PrismaTaskMapper.toDomain
   *
   * Mapeia um objeto do banco de dados para um objeto do domínio.
   *
   * ---
   *
   * @param task - Objeto do domínio
   * @returns - Objeto do banco de dados
   */
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

  /**
   * ---
   *
   * ## PrismaTaskMapper.toPrisma
   *
   * Mapeia um objeto do domínio para um objeto do banco de dados.
   *
   * ---
   *
   * @param task - Objeto do banco de dados
   * @returns - Objeto do domínio
   */
  static toPrisma(task: Task): PrismaTask {
    return task.toObject()
  }
}
