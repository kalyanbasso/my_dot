import { Dialect, Sequelize } from 'sequelize'

const DATABASE = process.env.DATABASE as string
const DB_USER = process.env.DB_USER as string
const DB_HOST = process.env.DB_HOST
const DB_DRIVER = process.env.DB_DRIVER as Dialect
const DB_PASS = process.env.DB_PASS


const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASS, {
	host: DB_HOST,
	dialect: DB_DRIVER
})

export const testConnection = async () => {
	try {
		await sequelize.authenticate()
		return { status: 200, message: 'Connection has been established successfully.' }
	} catch (error) {
		if (error instanceof Error)
			return { status: 500, message: error.message }
		return { status: 500, message: 'Something went wrong'}
	}
}

export default sequelize