import {
  BaseEntity,
  Column,
  Entity, JoinColumn,
  ManyToOne, OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";
import { ShowArmchair } from "./show_armchair.entity";
import { Purchase } from "./purchase.entity";
import {TicketStatus} from "../enum/ticket.status";
import {TicketType} from "../enum/ticket.type";

@Entity("ticket")
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "status", type: "enum", enum: TicketStatus })
  status: TicketStatus;

  @Column({ name: "type", type: "enum", enum: TicketType })
  type: TicketType;

  @OneToOne((type) => ShowArmchair, (showArmchair) => showArmchair.ticket, {cascade:true})
  @JoinColumn({name:"show_armchair_id"})
  showArmchair: ShowArmchair;

  @ManyToOne((type) => Purchase, (purchase) => purchase.tickets, {cascade:true})
  purchase: Purchase;

  @ManyToOne((type) => Client, (client) => client.tickets)
  client: Client;
}
