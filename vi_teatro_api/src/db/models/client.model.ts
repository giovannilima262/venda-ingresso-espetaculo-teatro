import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Address} from "./address.model";
import {User} from "./user.model";
import {Purchase} from "./purchase.model";
import {Ticket} from "./ticket.model";

@Entity("client")
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User, user => user.client)
    @JoinColumn()
    user: User;

    @ManyToOne(type => Address, address => address.clients)
    address: Address;

    @Column({name: "cpf", unique: true})
    cpf: string;

    @Column({name: "type", type: "varchar2"})
    type: ClientType;

    @OneToMany(type => Purchase, purchase => purchase.client)
    purchases: Purchase[];

    @OneToMany(type => Ticket, ticket => ticket.client)
    tickets: Ticket[];
}
