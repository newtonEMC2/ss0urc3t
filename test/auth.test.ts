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
  it('fails when token is wrong on POST /uploadData', async function () {
    return request(server)
      .post('/uploadData')
      .set('Authorization', `bearer ${createToken()}88`)
      .attach('csvfile', './test/mockFiles/bye.csv')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(401)
  })

  it('fails when token is empty on POST /uploadData', async function () {
    return request(server)
      .post('/uploadData')
      .attach('csvfile', './test/mockFiles/bye.csv')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(401)
  })
})
