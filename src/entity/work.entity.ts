import { Address } from './address.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

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

   @Column({ type: "enum", enum: LocationEnum})
   location!: string;

   @OneToOne( () => Address ) @JoinColumn()
   address!: Address;

   @Column()
   monk!: number;

   @Column({type: "date"})
   time!: Date;

   @Column()
   detail!: string;

   @Column()
   time_edit!: Date;
 
   @Column()
   user_edit!: string;
}