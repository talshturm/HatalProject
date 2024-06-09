import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({ name: 'user_id' })
    id: number;

    @Column({ name: "username" })
    username: string;

    @Column({ name: "first_name" })
    firstName: string;

    @Column({ name: 'last_name' })
    lastName: string;

    @Column({ name: 'password'})
    password: string;

    @Column({ name: 'address'})
    address: string;

    @Column({ name: 'email' })
    email: string;
}
