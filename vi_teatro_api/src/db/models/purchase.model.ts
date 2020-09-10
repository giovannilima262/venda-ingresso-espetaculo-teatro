import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Client} from "./client.model";
import {Ticket} from "./ticket.model";

@Entity("purchase")
export class Purchase extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Client, client => client.purchases)
    client: Client;

    @Column({name: "type", type: "varchar2"})
    status: PurchaseStatus;

    @OneToMany(type => Ticket, ticket => ticket.purchase)
    tickets: Ticket[];
}
