import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Address } from "./address.entity";
import { User } from "./user.entity";
import { Purchase } from "./purchase.entity";
import { Ticket } from "./ticket.entity";
import {ClientType} from "../enum/client.type";

@Entity("client")
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "cpf", unique: true })
  cpf: string;

  @Column({ name: "type", type: "enum", enum: ClientType })
  type: ClientType;

  @OneToOne((type) => User, (user) => user.client, {cascade: true})
  @JoinColumn()
  user: User;

  @ManyToOne((type) => Address, (address) => address.clients, {cascade: true})
  address: Address;

  @OneToMany((type) => Purchase, (purchase) => purchase.client)
  purchases: Purchase[];

  @OneToMany((type) => Ticket, (ticket) => ticket.client)
  tickets: Ticket[];
}
