import { Model, Column, DataType, Table, PrimaryKey, HasMany, Length, ForeignKey, HasOne, BelongsTo } from "sequelize-typescript";
import { Optional } from "sequelize";
import { IUser } from "../../models/user";
import { IBlog } from "../../models/blog";
import { User } from "./user";

interface IBlogAttributes extends Optional<IBlog,'id'> {}

@Table({
    tableName: "blogs"
})
export class Blog extends Model<IBlog,IBlogAttributes>{

    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        unique: true,
    })    
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    content!: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    authorId!: string;

    @BelongsTo(() => User)
    author: User;
}