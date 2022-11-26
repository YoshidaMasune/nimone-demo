import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    UID!: number

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    tell!: number

    @Column()
    tell2!: number
}