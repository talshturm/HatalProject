import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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