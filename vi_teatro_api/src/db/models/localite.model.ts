import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {Show} from "./show.model";
import {Address} from "./address.model";

@Entity("localite")
export class Localite extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "name"})
    name: String;

    @ManyToOne(type => Address, address => address.localites)
    address: Address;

    @OneToMany((type) => Show, (show) => show.localite)
    shows: Show[];
}
