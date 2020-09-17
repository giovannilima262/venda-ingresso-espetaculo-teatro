import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {Show} from "./show.entity";
import {Armchair} from "./armchair.entity";
import {Ticket} from "./ticket.entity";

@Entity("show_armchair")
export class ShowArmchair extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "word", type: "varchar"})
    word: String;

    @Column({name: "number", type: "varchar"})
    number: String;

    @Column({name: "status", type: "text"})
    status: ShowArmchairType;

    @Column({name: "price", type: "varchar"})
    price: String;

    @ManyToOne((type) => Show, (show) => show.showArmchair)
    show: Show;

    @ManyToOne((type) => Armchair, (armchair) => armchair.showArmchair)
    armchair: Armchair;

    @OneToMany(type => Ticket, ticket => ticket.showArmchair)
    tickets: Ticket[]
}
