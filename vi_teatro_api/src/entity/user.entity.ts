import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";
import { Show } from "./show.entity";

@Entity("app_user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: "name", type: "varchar"})
  name: String;

  @Column({name: "email", type: "varchar", unique:true })
  email: String;

  @Column({name: "password", type: "varchar"})
  password: String;

  @Column({ name: "type", type: "text" })
  type: UserType;

  @OneToOne((type) => Client, (client) => client.user)
  client: Client;

  @OneToMany((type) => Show, (show) => show.user)
  shows: Show[];
}
