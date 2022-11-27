import { Address } from './address.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

export enum LocationEnum {
   WIHAN =  "วิหาร",
   SALA = "ศาลา"
}

@Entity()
export class Work {

   @PrimaryGeneratedColumn()
   WID!: number;

   @Column()
   workType!: string;

   @Column()
   location!: string;

   @OneToOne( () => Address ) @JoinColumn()
   address!: Address;

   @OneToOne( () => User ) @JoinColumn()
   user!: User;

   @Column()
   monk!: number;

   @Column({nullable: true})
   time!: Date;

   @Column({default: ''})
   detail!: string;

   @Column({nullable: true})
   time_edit!: Date;
 
   @Column({default: ''})
   user_edit!: string;
}