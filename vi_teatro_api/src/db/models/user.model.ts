import {BaseEntity, Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Client} from "./client.model";

@Entity("app_user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "firebase_code", unique: true })
  firebaseCode: String;

  @Column({ name: "type" })
  type: String;

  @OneToOne(type => Client, client => client.user)
  client: Client;
}
