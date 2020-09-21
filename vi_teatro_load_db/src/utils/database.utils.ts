import {User} from "../entity/user.entity";
import {isNullOrUndefined} from "util";
import {Client} from "../entity/client.entity";
export class DatabaseUtils {
    static managers: User[]
    static clients: Client[]

    static async getRandomManager(): Promise<User> {
        if(isNullOrUndefined(this.managers)){
            this.managers = await User.createQueryBuilder("user").where("user.type = 'MANAGER'").getMany()
        }
        return this.managers[Math.floor(Math.random() * (this.managers.length))]
    }

    static async getRandomClient(): Promise<Client> {
        if(isNullOrUndefined(this.clients)){
            this.clients = await Client.createQueryBuilder("client").where("client.type = 'COMMON'").getMany()
        }
        return this.clients[Math.floor(Math.random() * (this.clients.length))]
    }
}
