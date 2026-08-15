import request from 'supertest';
import { createApp } from '../src/app';
import { _resetStore } from '../src/services/tasks.service';

const app = createApp();

beforeEach(() => {
  _resetStore();
});

describe('GET /health', () => {
  it('returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok' });
  });
});

describe('/tasks', () => {
  it('creates and fetches a task', async () => {
    const createRes = await request(app).post('/tasks').send({ title: 'Test the API' });
    expect(createRes.status).toBe(201);
    expect(createRes.body.title).toBe('Test the API');

    const getRes = await request(app).get(`/tasks/${createRes.body.id}`);
    expect(getRes.status).toBe(200);
    expect(getRes.body.id).toBe(createRes.body.id);
  });

  it('returns 404 for an unknown task', async () => {
    const res = await request(app).get('/tasks/does-not-exist');
    expect(res.status).toBe(404);
  });
});
