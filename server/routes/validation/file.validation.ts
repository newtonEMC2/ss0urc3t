
import { Response, Request, NextFunction } from 'express'
import { errorHandler } from '../../utils'

/**
 * Check if file is as expected
 * @param req
 * @param res
 * @param next
 */
const fileValidation = (req: Request, res: Response, next: NextFunction) => {
  try {
    const files = req.files

    // if no file, return
    if (!files || !files.csvfile) return res.status(422).json({ success: false, error: 'unprocessable entity', message: 'no file sent' })

    // just one file at a time can be sent
    const { csvfile } = files
    if (Array.isArray(csvfile)) return res.status(422).json({ success: false, error: 'unprocessable entity', message: 'just one file at at time is allowed' })

    // just csv allowed
    const { mimetype } = csvfile
    if (mimetype !== 'text/csv') return res.status(422).json({ success: false, error: 'unprocessable entity', message: 'just csv files allowed' })

    next()
  } catch (e) {
    errorHandler(res, e.message)
  }
}

export default fileValidation
