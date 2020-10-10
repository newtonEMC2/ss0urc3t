import { Router } from 'express'
import jwt from 'express-jwt'
import uploadData from '../handlers/uploadData'
import config from '../config'

import fileValidator from './validation/file.validation'

const router = Router()

router.post('/uploadData', jwt({ secret: config.SECRET, algorithms: ['HS256'] }), fileValidator, uploadData.uploadData)

export default router
