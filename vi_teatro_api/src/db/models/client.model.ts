import {BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Address} from "./address.model";
import {User} from "./user.model";

@Entity("client")
export class Client extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User, user => user.client)
    @JoinColumn()
    user: User;

    @ManyToOne(type => Address, address => address.clients)
    address: Address;

    @Column({ name: "cpf", unique: true })
    cpf: string;

    @Column({ name: "type" })
    type: string;
}
