import Entity from '@core/entities/entity'
import UniqueEntityId from '@core/entities/unique-entity-id'

export interface TaskProps {
  title: string
  description: string
  createdAt: Date
  updatedAt: Date | null
}

export interface TaskCreationProps {
  title: string
  description: string
  createdAt?: Date
  updatedAt?: Date | null
}

/**
 * ---
 *
 * ## Task
 *
 * Representa uma tarefa.
 *
 * ---
 */
export class Task extends Entity<TaskProps> {
  /**
   * ---
   *
   * ## Task.create
   *
   * Cria uma nova tarefa.
   *
   * ---
   *
   * @param props - Propriedades da tarefa
   * @param id - ID da tarefa
   * @returns - Uma nova instância da tarefa
   */
  static create(props: TaskCreationProps, id?: string) {
    return new Task(
      {
        ...props,
        createdAt: props.createdAt ? props.createdAt : new Date(),
        updatedAt: props.updatedAt ? props.updatedAt : null,
      },
      new UniqueEntityId(id),
    )
  }

  /**
   * ---
   *
   * ## Task.title
   *
   * Título da tarefa
   *
   * ---
   */
  get title() {
    return this.props.title
  }

  set title(title: string) {
    this.props.title = title
    this.touch()
  }

  /**
   * ---
   *
   * ## Task.description
   *
   * Descrição da tarefa
   *
   * ---
   */
  get description() {
    return this.props.description
  }

  set description(description: string) {
    if (description.length > 255) {
      throw new Error('Description must be less than 255 characters')
    }

    this.props.description = description
    this.touch()
  }

  /**
   * ---
   *
   * ## Task.createdAt
   *
   * A data e hora em que a tarefa foi criada
   *
   * ---
   */
  get createdAt() {
    return this.props.createdAt
  }

  /**
   * ---
   *
   * ## Task.updatedAt
   *
   * A data e hora em que a tarefa foi atualizada pela última vez
   *
   */
  get updatedAt() {
    return this.props.updatedAt
  }

  /**
   * ---
   *
   * ## Task.touch
   *
   * Atualiza a data e hora da última atualização da tarefa
   *
   * ---
   */
  protected touch() {
    this.props.updatedAt = new Date()
  }

  /**
   * ---
   *
   * ## Task.toObject
   *
   * Converte a tarefa para um objeto
   *
   * ---
   *
   * @returns - Um objeto com as propriedades da tarefa
   */
  toObject() {
    return {
      id: this.id.value,
      title: this.title,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }
  }

  /**
   * ---
   *
   * ## Task.tojson
   *
   * Converte a tarefa para uma string JSON
   *
   * ---
   *
   * @returns - Uma string JSON do objeto
   */
  tojson() {
    return JSON.stringify(this.toObject())
  }
}
