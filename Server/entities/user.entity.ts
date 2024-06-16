import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm"
import { Order } from "./order.entity";

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

    @OneToMany(() => Order, order => order.user)
    orders: Order[];
}
