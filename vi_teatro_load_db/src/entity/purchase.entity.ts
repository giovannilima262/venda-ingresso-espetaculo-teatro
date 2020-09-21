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
import {PurchaseStatus} from "../enum/purchase.status";

@Entity("purchase")
export class Purchase extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "type", type: "enum", enum:PurchaseStatus })
  status: PurchaseStatus;

  @ManyToOne((type) => Client, (client) => client.purchases)
  client: Client;

  @OneToMany((type) => Ticket, (ticket) => ticket.purchase)
  tickets: Ticket[];
}
