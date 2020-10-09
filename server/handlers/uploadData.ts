import { Request, Response } from 'express'
import { errorHandler } from '../utils'

const UploadDataFactory = () => {
  /**
     *
     * @param req
     * @param res
     */
  const uploadData = (req: Request, res: Response): Response => {
    try {
      const { csvfile, csvfile: { name } } = req.files!

      csvfile.mv(`${process.cwd()}/tmp/${name}`, (e) => {
        if (e) errorHandler(res, e.message)
      })

      return res.status(200).json({ success: true, message: 'file upload successfully' })
    } catch (e) {
      return errorHandler(res, e.message)
    }
  }

  return {
    uploadData
  }
}

export default UploadDataFactory()
