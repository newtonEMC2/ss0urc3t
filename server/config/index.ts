if (process.env.NODE_ENV !== 'production') { require('dotenv').config() }

const {
  PORT,
  PORT_TEST,
  NODE_ENV = 'development',
  SECRET = 'testsecret'
} = process.env

export default { PORT, NODE_ENV, PORT_TEST, SECRET }
