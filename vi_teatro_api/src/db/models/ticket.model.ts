import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Client} from "./client.model";
import {ShowArmchair} from "./show_armchair.model";
import {Purchase} from "./purchase.model";

@Entity("ticket")
export class Ticket extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => ShowArmchair, showArmchair => showArmchair.tickets)
    showArmchair: ShowArmchair;

    @ManyToOne(type => Purchase, purchase => purchase.tickets)
    purchase: Purchase;

    @ManyToOne(type => Client, client => client.tickets)
    client: Client;

    @Column({name: 'status', type: "varchar2"})
    status: TicketStatus

    @Column({name: 'type', type: "varchar2"})
    type: TicketType
}
