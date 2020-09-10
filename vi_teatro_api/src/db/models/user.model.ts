import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Show } from "./show.model";

@Entity("app_user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "firebase_code", unique: true })
  firebaseCode: String;

  @Column({ name: "type", type: "text" })
  type: UserType;

  @OneToMany(type => Show, show => show.user)
  shows: Show[];
}
