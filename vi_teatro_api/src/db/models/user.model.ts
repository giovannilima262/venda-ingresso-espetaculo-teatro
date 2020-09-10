import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("app_user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "firebase_code", unique: true })
  firebaseCode: String;

  @Column({ name: "type" })
  type: String;
}
