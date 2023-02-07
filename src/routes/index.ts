import { Router } from 'express'
import { testConnection } from '../config/database'

import timeRecordRouter from './timeRecord'

const router = Router()

router.use('/healthDb', async (_, res) => {
	const { status, message } = await testConnection()
	res.status(status).json({ message })
})

router.use('/timeRecord', timeRecordRouter)


export default router