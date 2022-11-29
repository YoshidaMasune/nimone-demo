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

   @Column({nullable: true})
   Khet!: string;

   @Column({nullable: true})
   Ampao!: string;

   @Column({nullable: true})
   city!: string;

   @OneToOne ( () => User)
   @JoinColumn()
   user!: User;
}