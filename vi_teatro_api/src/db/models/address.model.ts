import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Client} from "./client.model";

@Entity("address")
export class Address extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "cep" })
    cep: string;

    @Column({ name: "neighborhood" })
    neighborhood: string;

    @Column({ name: "city" })
    city: string;

    @Column({ name: "state" })
    state: string;

    @OneToMany(type => Client, client => client.address)
    clients: Client[];
}
