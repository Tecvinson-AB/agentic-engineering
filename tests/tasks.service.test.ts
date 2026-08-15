import * as tasksService from '../src/services/tasks.service';

beforeEach(() => {
  tasksService._resetStore();
});

describe('tasks.service', () => {
  it('creates and lists tasks', () => {
    tasksService.createTask({ title: 'Write AGENTS.md' });
    expect(tasksService.listTasks()).toHaveLength(1);
  });

  it('throws TaskNotFoundError for an unknown id', () => {
    expect(() => tasksService.getTask('missing')).toThrow(tasksService.TaskNotFoundError);
  });

  it('updates a task in place', () => {
    const task = tasksService.createTask({ title: 'Draft exercise' });
    const updated = tasksService.updateTask(task.id, { status: 'done' });
    expect(updated.status).toBe('done');
    expect(updated.id).toBe(task.id);
  });

  it('deletes a task', () => {
    const task = tasksService.createTask({ title: 'Temp task' });
    tasksService.deleteTask(task.id);
    expect(() => tasksService.getTask(task.id)).toThrow(tasksService.TaskNotFoundError);
  });
});
