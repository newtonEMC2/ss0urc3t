import jsonwebtoken from 'jsonwebtoken'
import config from '../server/config'

const createToken = () => jsonwebtoken.sign({ name: 'alexis' }, config.SECRET)

export {
  createToken
}
