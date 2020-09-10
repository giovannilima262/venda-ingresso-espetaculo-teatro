import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {ShowArmchair} from "./show_armchair.model";

@Entity("armchair")
export class Armchair extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "type", type: "varchar2"})
    type: ArmchairType;

    @OneToMany((type) => ShowArmchair, (showArmchair) => showArmchair.armchair)
    showArmchair: ShowArmchair[];
}
