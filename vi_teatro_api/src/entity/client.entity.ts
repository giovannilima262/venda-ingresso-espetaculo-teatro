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

@Entity("client")
export class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "cpf", unique: true })
  cpf: string;

  @Column({ name: "type", type: "varchar" })
  type: ClientType;

  @OneToOne((type) => User, (user) => user.client)
  @JoinColumn()
  user: User;

  @ManyToOne((type) => Address, (address) => address.clients)
  address: Address;

  @OneToMany((type) => Purchase, (purchase) => purchase.client)
  purchases: Purchase[];

  @OneToMany((type) => Ticket, (ticket) => ticket.client)
  tickets: Ticket[];
}
