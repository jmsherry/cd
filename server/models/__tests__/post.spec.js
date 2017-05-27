import test from 'ava';
import request from 'supertest';
import app from '../../server';
import Service from '../service';
import { connectDB, dropDB } from '../../util/test-helpers';

// Initial services added into test db
const services = [
  new Service({ name: 'Prashant', title: 'Hello Mern', slug: 'hello-mern', cuid: 'f34gb2bh24b24b2', content: "All cats meow 'mern!'" }),
  new Service({ name: 'Mayank', title: 'Hi Mern', slug: 'hi-mern', cuid: 'f34gb2bh24b24b3', content: "All dogs bark 'mern!'" }),
];

test.beforeEach('connect and add two service entries', (t) => {
  connectDB(t, () => {
    Service.create(services, (err) => {
      if (err) t.fail('Unable to create services');
    });
  });
});

test.afterEach.always((t) => {
  dropDB(t);
});

test.serial('Should correctly give number of Services', async (t) => {
  t.plan(2);

  const res = await request(app)
    .get('/api/services')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.deepEqual(services.length, res.body.services.length);
});

test.serial('Should send correct data when queried against a cuid', async (t) => {
  t.plan(2);

  const service = new Service({ name: 'Foo', title: 'bar', slug: 'bar', cuid: 'f34gb2bh24b24b2', content: 'Hello Mern says Foo' });
  service.save();

  const res = await request(app)
    .get('/api/services/f34gb2bh24b24b2')
    .set('Accept', 'application/json');

  t.is(res.status, 200);
  t.is(res.body.service.name, service.name);
});

test.serial('Should correctly add a service', async (t) => {
  t.plan(2);

  const res = await request(app)
    .service('/api/services')
    .send({ service: { name: 'Foo', title: 'bar', content: 'Hello Mern says Foo' } })
    .set('Accept', 'application/json');

  t.is(res.status, 200);

  const savedService = await Service.findOne({ title: 'bar' }).exec();
  t.is(savedService.name, 'Foo');
});

test.serial('Should correctly delete a service', async (t) => {
  t.plan(2);

  const service = new Service({ name: 'Foo', title: 'bar', slug: 'bar', cuid: 'f34gb2bh24b24b2', content: 'Hello Mern says Foo' });
  service.save();

  const res = await request(app)
    .delete(`/api/services/${service.cuid}`)
    .set('Accept', 'application/json');

  t.is(res.status, 200);

  const queriedService = await Service.findOne({ cuid: service.cuid }).exec();
  t.is(queriedService, null);
});
