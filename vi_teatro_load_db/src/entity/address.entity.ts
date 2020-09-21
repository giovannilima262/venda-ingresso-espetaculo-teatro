import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";
import { Localite } from "./localite.entity";

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

  @Column({name: "number"})
  number: string

  @Column({name: "streetName"})
  streetName: string

  @OneToMany((type) => Client, (client) => client.address)
  clients: Client[];

  @OneToMany((type) => Localite, (localite) => localite.address)
  localites: Localite[];
}
