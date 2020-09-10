import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Show } from "./show.model";
import { Armchair } from "./armchair.model";

@Entity("show_armchair")
export class ShowArmchair extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "word", type: "varchar2" })
  word: String;

  @Column({ name: "number", type: "varchar2" })
  number: String;

  @Column({ name: "status", type: "text" })
  status: ShowArmchairType;

  @Column({ name: "price", type: "varchar2" })
  price: String;

  @ManyToOne((type) => Show, (show) => show.showArmchair)
  show: Show;

  @ManyToOne((type) => Armchair, (armchair) => armchair.showArmchair)
  armchair: Armchair;
}
