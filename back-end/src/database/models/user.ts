import { Model, Column, DataType, Table, PrimaryKey, HasMany, Length } from "sequelize-typescript";
import { Optional } from "sequelize";
import { IUser } from "../../models/user";

interface IUserAttributes extends Optional<IUser,'id'> {}

@Table({
    tableName: "users"
})
export class User extends Model<IUser,IUserAttributes>{

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        unique: true
    })    
    id!: string;

    @Column({
        primaryKey: true,
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string;

    @Column({
        primaryKey: true,
        type: DataType.STRING,
        allowNull: false
    })
    password!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName!: number;



}