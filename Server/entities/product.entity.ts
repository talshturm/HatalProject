import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"
import { Order } from "./order.entity";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column({name: 'image_url'})
    image: string;
}