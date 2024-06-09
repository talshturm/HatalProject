import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { OrderProduct } from './order-product.entity';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.orders)
    user: User;

    @Column({name: 'total_price'})
    totalPrice: number;

    @Column({name: 'order_date'})
    orderDate: Date;

    @OneToMany(() => OrderProduct, orderProduct => orderProduct.order)
    orderProducts: OrderProduct[];
}