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
 *
 * ---
 *
 * Represents a task
 *
 * ---
 *
 */
export class Task extends Entity<TaskProps> {
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
   * The title of the task
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
   * The description of the task
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
   * The date the task was created
   *
   * ---
   */
  get createdAt() {
    return this.props.createdAt
  }

  /**
   * ---
   *
   * The date the task was last updated
   *
   * ---
   */
  get updatedAt() {
    return this.props.updatedAt
  }

  /**
   * ---
   *
   * Updates the `updatedAt` property of the task
   *
   * ---
   */
  protected touch() {
    this.props.updatedAt = new Date()
  }

  /**
   * ---
   *
   * Converts the task to an object
   *
   * ---
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
   * Converts the task to a JSON string
   *
   * ---
   */
  tojson() {
    return JSON.stringify(this.toObject())
  }
}
