import { Task, TasksRepository } from '@digigrow/tasks-domains'

import { PrismaTaskMapper } from '../mappers/prisma-task-mapper'
import { prisma } from '../prisma-config'

export class PrismaTasksRepository implements TasksRepository {
  async findAll(): Promise<Task[]> {
    const tasks = await prisma.task.findMany()

    const mappedTasks = tasks.map(PrismaTaskMapper.toDomain)
    return mappedTasks
  }

  async findById(id: string): Promise<Task | null> {
    const task = await prisma.task.findUnique({ where: { id } })

    if (!task) {
      return null
    }

    const mappedTask = PrismaTaskMapper.toDomain(task)
    return mappedTask
  }

  async findByTitle(title: string): Promise<Task | null> {
    const task = await prisma.task.findUnique({ where: { title } })

    if (!task) {
      return null
    }

    const mappedTask = PrismaTaskMapper.toDomain(task)
    return mappedTask
  }

  async create(task: Task): Promise<Task> {
    const newTask = PrismaTaskMapper.toPrisma(task)

    const createdTask = await prisma.task.create({
      data: newTask,
    })

    const mappedTask = PrismaTaskMapper.toDomain(createdTask)
    return mappedTask
  }

  async update(task: Task): Promise<Task> {
    const { id, ...taskToUpdate } = PrismaTaskMapper.toPrisma(task)

    const updatedTask = await prisma.task.update({
      data: taskToUpdate,
      where: { id },
    })

    const mappedTask = PrismaTaskMapper.toDomain(updatedTask)
    return mappedTask
  }

  async delete(task: Task): Promise<Task> {
    const deletedTask = await prisma.task.delete({
      where: { id: task.id.value },
    })

    const mappedTask = PrismaTaskMapper.toDomain(deletedTask)
    return mappedTask
  }
}
