import { Model, DataTypes, Optional } from 'sequelize'
import sequelize from '../config/database'

interface TimeRecordsAttributes {
    id: number;
    user_id: number;
    record_date: Date;
    record_type: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at?: Date;
}

export type TimeRecordsInput = Optional<TimeRecordsAttributes, 'id'>
export type TimeRecordsOuput = Required<TimeRecordsAttributes>

class TimeRecords extends Model<TimeRecordsAttributes, TimeRecordsInput> implements TimeRecordsAttributes {
	public id!: number
	public user_id!: number
	public record_date!: Date
	public record_type!: string

	public readonly created_at!: Date
	public readonly updated_at!: Date
	public readonly deleted_at!: Date
}

TimeRecords.init({
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		autoIncrement: true,
		primaryKey: true
	},
	user_id: {
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
	},
	record_date: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	record_type: {
		type: DataTypes.STRING,
		allowNull: false,
	}
}, {
	timestamps: true,
	sequelize: sequelize,
	paranoid: true,
})

export default TimeRecords