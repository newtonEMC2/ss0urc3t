import request from 'supertest'
import { createToken } from './helpers'

process.env.NODE_ENV = 'test'

describe('auth tests', () => {
  let server: any

  beforeEach(() => {
    delete require.cache[require.resolve('../server/server.ts')]
    server = require('../server/server.ts')
  })

  afterEach(async () => {
    await server.close()
  })

  /**
   * data upload
   */
  it('fails when file is not .csv on POST /uploadData', async function () {
    return request(server)
      .post('/uploadData')
      .set('Authorization', `bearer ${createToken()}`)
      .set('Accept', 'application/json')
      .attach('csvfile', './test/mockFiles/hola.txt')
      .expect('Content-Type', 'application/json; charset=utf-8')

      .expect(422)
  })

  it('fails when no file is attached on POST /uploadData', async function () {
    return request(server)
      .post('/uploadData')
      .set('Authorization', `bearer ${createToken()}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')

      .expect(422)
  })
})
