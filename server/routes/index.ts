import { Router } from 'express'
import jwt from 'express-jwt'
import uploadData from '../handlers/uploadData'
import config from '../config'

import fileValidator from './validation/file.validation'

// import HandlerFactory from '../handlers'
// import validationManager from './middleware/validationManager'
// import countriesValidator from './validators/countries.validator'
// import appendValidator from './validators/headTail.validator'

const router = Router()

router.post('/uploadData', jwt({ secret: config.SECRET, algorithms: ['HS256'] }), fileValidator, uploadData.uploadData)

// router.get('/countries', countriesValidator, validationManager, HandlerFactory.getAllCountries)
// router.get('/reverse/:str', HandlerFactory.reverseString)
// router.get('/append', appendValidator, validationManager, HandlerFactory.headTail)

export default router
