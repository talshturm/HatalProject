import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm"

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

    @ManyToMany(() => OrderProduct, OrderProduct => orderProduct.product)
    orderProduct: OrderProduct[];
}