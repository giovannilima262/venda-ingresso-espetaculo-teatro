import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";
import { ShowArmchair } from "./show_armchair.entity";
import { Purchase } from "./purchase.entity";

@Entity("ticket")
export class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "status", type: "varchar" })
  status: TicketStatus;

  @Column({ name: "type", type: "varchar" })
  type: TicketType;

  @ManyToOne((type) => ShowArmchair, (showArmchair) => showArmchair.tickets)
  showArmchair: ShowArmchair;

  @ManyToOne((type) => Purchase, (purchase) => purchase.tickets)
  purchase: Purchase;

  @ManyToOne((type) => Client, (client) => client.tickets)
  client: Client;
}
