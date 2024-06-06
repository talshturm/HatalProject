import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('products')
export class Product {
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

    @Column({ name: 'email' })
    email: string;
}