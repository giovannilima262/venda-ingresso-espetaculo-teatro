import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn,} from "typeorm";
import {Show} from "./show.entity";
import {Armchair} from "./armchair.entity";
import {Ticket} from "./ticket.entity";
import {ShowArmchairStatus} from "../enum/show_armchair.status";

@Entity("show_armchair")
export class ShowArmchair extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "word", type: "varchar"})
    word: String;

    @Column({name: "number", type: "varchar"})
    number: String;

    @Column({name: "status", type: "enum", enum: ShowArmchairStatus})
    status: ShowArmchairStatus;

    @Column({name: "price", type: "varchar"})
    price: String;

    @ManyToOne((type) => Show, (show) => show.showArmchair)
    show: Show;

    @OneToOne((type) => Armchair, (armchair) => armchair.showArmchair, {cascade: true, onDelete:"CASCADE"})
    @JoinColumn()
    armchair: Armchair;

    @OneToOne(type => Ticket, ticket => ticket.showArmchair)
    ticket: Ticket
}
