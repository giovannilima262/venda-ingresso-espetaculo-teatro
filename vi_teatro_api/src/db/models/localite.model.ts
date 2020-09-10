import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Show } from "./show.model";

@Entity("localite")
export class Localite extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name" })
  name: String;

  //@ManyToOne(type => Address, address => address.localite)
  //address: Address;

  @OneToMany((type) => Show, (show) => show.localite)
  shows: Show[];
}
