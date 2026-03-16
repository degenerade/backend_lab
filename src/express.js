import express from 'express'
import { router } from './route/index.js'
import logger from 'morgan'
import { errorHandler } from './middleware/errorHandler.js'

export const app = express()

app.use(express.json())

app.use(logger('dev', { immediate: true, skip: () => process.env.NODE_ENV === 'test' }))

app.use('/', router)

app.use(express.static('public'))

// 404 handler
app.use(errorHandler.notFoundDefault)

// Global error handler
app.use(errorHandler.errorDefault)
