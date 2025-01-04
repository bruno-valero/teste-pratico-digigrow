import { Task } from '@entities/task'

export interface TasksRepository {
  findAll(): Promise<Task[]>
  findById(id: string): Promise<Task | null>
  findByTitle(title: string): Promise<Task | null>
  create(task: Task): Promise<Task>
  update(task: Task): Promise<Task>
  delete(task: Task): Promise<Task>
}
