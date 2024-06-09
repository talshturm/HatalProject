import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity()
export class OrderProduct {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Order, order => order.orderProducts, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ManyToOne(() => Product, product => product.orderProducts)
    @JoinColumn({ name: 'product_id' })
    product: Product;

    @Column()
    quantity: number;
}