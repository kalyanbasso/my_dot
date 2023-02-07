import { Router } from 'express'

const timeRecordRouter = Router()

timeRecordRouter.get('/', (req, res) => {
	res.json({ message: 'get all time records' })
})

timeRecordRouter.get('/:id', (req, res) => {
	res.json({ message: 'get time record' })
})

timeRecordRouter.put('/:id', (req, res) => {
	res.json({ message: 'update time record' })
})

timeRecordRouter.delete('/:id', (req, res) => {
	res.json({ message: 'delete time record' })
})

timeRecordRouter.post('/', (req, res) => {
	res.status(201).json({ message: 'created' })
})

export default timeRecordRouter