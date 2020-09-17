import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ShowArmchair } from "./show_armchair.entity";

@Entity("armchair")
export class Armchair extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "type", type: "varchar" })
  type: ArmchairType;

  @OneToMany((type) => ShowArmchair, (showArmchair) => showArmchair.armchair)
  showArmchair: ShowArmchair[];
}
