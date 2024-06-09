import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"
import { OrderProduct } from './order-product.entity';

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

    @ManyToMany(() => OrderProduct, orderProduct => orderProduct.product)
    orderProducts: OrderProduct[];
}