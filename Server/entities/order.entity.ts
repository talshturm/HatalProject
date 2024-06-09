import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.entity';
import { Product } from './product.entity';

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

    @Column()
    status: string;

    @ManyToMany(() => Product, product => product.orders)
    @JoinTable()
    products: Product[];
}