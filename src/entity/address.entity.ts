import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, JoinColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity() 
export class Address {
   @PrimaryGeneratedColumn()
   AID!: number;

   @Column() 
   Home_number!: number;

   @Column()
   Muu_number!: number;

   @Column({default: ''})
   Khet!: string;

   @Column({default: ''})
   Ampao!: string;

   @Column({default: ''})
   city!: string;

   @OneToOne ( () => User)
   @JoinColumn()
   user!: User;
}