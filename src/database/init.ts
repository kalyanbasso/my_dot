import { TimeRecords } from '../models'

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => Promise.all([
	TimeRecords.sync({ alter: isDev })
])

export default dbInit