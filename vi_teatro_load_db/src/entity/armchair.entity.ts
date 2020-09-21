import {
    BaseEntity,
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import {ShowArmchair} from "./show_armchair.entity";
import {ArmchairType} from "../enum/armchair.type";

@Entity("armchair")
export class Armchair extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "type", type: "enum", enum: ArmchairType})
    type: ArmchairType;

    @OneToOne((type) => ShowArmchair, (showArmchair) => showArmchair.armchair)
    showArmchair: ShowArmchair;
}
