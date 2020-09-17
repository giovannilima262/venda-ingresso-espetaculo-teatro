import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";
import { Ticket } from "./ticket.entity";

@Entity("purchase")
export class Purchase extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "type", type: "varchar" })
  status: PurchaseStatus;

  @ManyToOne((type) => Client, (client) => client.purchases)
  client: Client;

  @OneToMany((type) => Ticket, (ticket) => ticket.purchase)
  tickets: Ticket[];
}
