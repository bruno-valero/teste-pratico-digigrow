import { Task } from '@entities/task'

import { TasksRepository } from './tasks-repository'

/**
 * ---
 *
 * ## InMemoryTasksRepository
 *
 * É destinada para o ambiente de testes, pois ela simula uma respositoria em memória relacionado a tarefas.
 *
 * ---
 */
export class InMemoryTasksRepository implements TasksRepository {
  private tasks: Task[] = []

  async findAll(): Promise<Task[]> {
    return this.tasks
  }

  async findById(id: string): Promise<Task | null> {
    return this.tasks.find((task) => task.id.value === id) ?? null
  }

  async findByTitle(title: string): Promise<Task | null> {
    return this.tasks.find((task) => task.title === title) ?? null
  }

  async create(task: Task): Promise<Task> {
    this.tasks.push(task)
    return task
  }

  async update(task: Task): Promise<Task> {
    const index = this.tasks.findIndex((t) => t.id.equals(task.id))
    if (index === -1) throw new Error('Task not found')

    this.tasks[index] = task
    return task
  }

  async delete(task: Task): Promise<Task> {
    const index = this.tasks.findIndex((t) => t.id === task.id)
    if (index === -1) throw new Error('Task not found')

    this.tasks.splice(index, 1)
    return task
  }
}
