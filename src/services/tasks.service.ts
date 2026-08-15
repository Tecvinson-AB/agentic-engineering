import { randomUUID } from 'crypto';
import { CreateTaskInput, Task, UpdateTaskInput } from '../models/task.model';

export class TaskNotFoundError extends Error {
  constructor(id: string) {
    super(`Task not found: ${id}`);
    this.name = 'TaskNotFoundError';
  }
}

// In-memory store — intentional for this training repo, no database wiring.
const tasks = new Map<string, Task>();

export function listTasks(): Task[] {
  return Array.from(tasks.values());
}

export function getTask(id: string): Task {
  const task = tasks.get(id);
  if (!task) throw new TaskNotFoundError(id);
  return task;
}

export function createTask(input: CreateTaskInput): Task {
  const task: Task = {
    id: randomUUID(),
    title: input.title,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  tasks.set(task.id, task);
  return task;
}

export function updateTask(id: string, input: UpdateTaskInput): Task {
  const existing = getTask(id);
  const updated: Task = { ...existing, ...input };
  tasks.set(id, updated);
  return updated;
}

export function deleteTask(id: string): void {
  if (!tasks.has(id)) throw new TaskNotFoundError(id);
  tasks.delete(id);
}

// Exposed for tests only, to reset state between cases.
export function _resetStore(): void {
  tasks.clear();
}
