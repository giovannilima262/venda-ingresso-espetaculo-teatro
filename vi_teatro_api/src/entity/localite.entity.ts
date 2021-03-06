import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Show } from "./show.entity";
import { Address } from "./address.entity";

@Entity("localite")
export class Localite extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "name" })
  name: String;

  @ManyToOne((type) => Address, (address) => address.localites)
  address: Address;

  @OneToMany((type) => Show, (show) => show.localite)
  shows: Show[];
}
