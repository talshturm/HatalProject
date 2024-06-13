import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('feedbacks')
export class Feedback {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({name: 'phone_number'})
    phoneNumber: string;

    @Column()
    message: string;
}