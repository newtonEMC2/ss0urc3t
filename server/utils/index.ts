import { Response } from 'express'

/**
 *
 * @param res
 * @param message
 */
const errorHandler = (res: Response, message: String): Response => {
  return res.status(500).json({ error: 'Internal Server Error', message })
}

export {
  errorHandler
}
