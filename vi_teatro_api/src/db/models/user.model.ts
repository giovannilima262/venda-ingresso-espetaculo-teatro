import {BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Client} from "./client.model";
import {Show} from "./show.model";

@Entity("app_user")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "firebase_code", unique: true})
    firebaseCode: String;

    @OneToOne(type => Client, client => client.user)
    client: Client;

    @Column({name: "type", type: "text"})
    type: UserType;

    @OneToMany(type => Show, show => show.user)
    shows: Show[];
}
