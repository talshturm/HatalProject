import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';
import { OrderStatus } from './orderStatus';

@Entity("orders")
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.orders)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ type: 'numeric', name:'total_price' })
    totalPrice: number;

    @Column({
        type: 'enum',
        enum: OrderStatus,
        default: OrderStatus.PENDING
    })
    status: OrderStatus;

    @Column({ name:'order_date' })
    orderDate: Date;

    @ManyToMany(() => Product)
    @JoinTable({
        name: 'order_products',
        joinColumn: { name: 'order_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'product_id', referencedColumnName: 'id' }
    })
    products: Product[];
}
