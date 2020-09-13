import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn,} from "typeorm";
import {User} from "./user.entity";
import {Localite} from "./localite.entity";
import {ShowArmchair} from "./show_armchair.entity";

@Entity("theater_show")
export class Show extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "create_at", type: "timestamp"})
    createAt: Date;

    @Column({name: "end_at", type: "timestamp"})
    endAt: Date;

    @Column({name: "name", type: "varchar"})
    name: string;

    @Column({name: "prepare_minutes"})
    prepareMinutes: number;

    @ManyToOne((type) => User, (user) => user.shows)
    user: User;

    @ManyToOne((type) => Localite, (localite) => localite.shows)
    localite: Localite;

    @OneToMany((type) => ShowArmchair, (showArmchair) => showArmchair.show)
    showArmchair: ShowArmchair[];
}
