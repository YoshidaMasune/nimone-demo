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
    tell!: string

    @Column({nullable: true})
    tell2!: string
}