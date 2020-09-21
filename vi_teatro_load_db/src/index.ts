import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import {User} from "./entity/user.entity";
import {Client} from "./entity/client.entity";
import {
    convertAddress,
    generateShowName,
    parseManagerToUserManager,
    parsePersonToClient
} from "./utils/convertions.utils";
import {Localite} from "./entity/localite.entity";
import {Show} from "./entity/show.entity";
import {ShowArmchair} from "./entity/show_armchair.entity";
import {Armchair} from "./entity/armchair.entity";
import {ArmchairType} from "./enum/armchair.type";
import {DatabaseUtils} from "./utils/database.utils";
import {ShowArmchairStatus} from "./enum/show_armchair.status";
import {TicketStatus} from "./enum/ticket.status";
import {Purchase} from "./entity/purchase.entity";
import {PurchaseStatus} from "./enum/purchase.status";
import {Ticket} from "./entity/ticket.entity";

createConnection()
    .then(async (connection) => {
        // await createLocation()
        // await createManagers()
        // await createClients()
        // await createTheaterShow()
        await createPurchases()
    })
    .catch((error) => console.log("TypeORM connection error: ", error));


async function createClients() {
    const people = require('../pessoas.json')
    await Client.delete({})
    for (const person of people) {
        let client = parsePersonToClient(person)
        await client.save()
    }
}

async function createManagers() {
    const managers = require('../managers.json')
    await User.delete({})
    for (const manager of managers) {
        let userManager = parseManagerToUserManager(manager)
        await userManager.save()
    }
}

async function createLocation() {
    await Localite.delete({})
    const localite = new Localite()
    localite.name = "RandomTheater";
    localite.address = convertAddress({
        "cep": "41515-104",
        "endereco": "3ª Avenida Alto da Jamaica",
        "numero": "802",
        "bairro": "Bairro da Paz",
        "cidade": "Salvador",
        "estado": "BA",
    })
    await localite.save();
}

async function createTheaterShow() {
    await Show.delete({})
    const localite = await Localite.findOne({})
    for (let year = 2005; year <= 2020; year++) {
        let month = 1;
        for (month = 1; month <= 12; month++) {
            let day = 1;
            for (day = 1; day <= 29; day++) {
                let hour = 12;
                for (hour = 12; hour <= 24; hour++) {
                    let show = new Show();
                    show.createAt = new Date(year, month, day, hour, 0, 0, 0);
                    show.endAt = new Date(year, month, day, hour, 50, 0, 0)
                    show.localite = localite;
                    show.prepareMinutes = 10;
                    show.user = await DatabaseUtils.getRandomManager();
                    show.name = generateShowName()
                    show.showArmchair = await createArmchairs(year - 2000)
                    await show.save()
                }
            }
        }
    }
}

async function createArmchairs(yearCorrection: number): Promise<ShowArmchair[]> {
    let columnPrice: number = 120
    const showArmchairs = new Array<ShowArmchair>()
    for (let alphabet = "a"; alphabet != "g"; alphabet = getNextLetter(alphabet)) {
        for (let number = 1; number <= 10; number++) {
            let showArmchair = new ShowArmchair()
            showArmchair.word = alphabet;
            showArmchair.number = number.toString();
            showArmchair.status = ShowArmchairStatus.VAGUE
            showArmchair.price = (columnPrice + yearCorrection).toString()
            const armchair = new Armchair()
            if (number >= 9 || number <= 2) {
                armchair.type = ArmchairType.ESPECIAL
            }
            armchair.type = ArmchairType.NOT_ESPECIAL
            showArmchair.armchair = armchair
            showArmchairs.push(showArmchair)
        }
        columnPrice -= 10
    }
    return showArmchairs
}

function getNextLetter(char: String): string {
    let code = char.charCodeAt(0);
    code++;
    return String.fromCharCode(code);
}

async function createPurchases() {
    for (let i = 50000; i == 50000;) {
        await getConnection().query("SELECT * FROM ticket where \"purchaseId\" is null order by id desc limit 50000").then(async (tickets: Ticket[]) => {
            i = tickets.length
            console.log(i)
            tickets.forEach(async (ticket) => {
                let purchase = new Purchase()
                let client = await DatabaseUtils.getRandomClient()
                purchase.status = PurchaseStatus.COMPLETED
                purchase.client = client
                ticket.purchase = purchase
                ticket.client = client
                ticket.status = TicketStatus.WITHDRAWN
                await Ticket.save(ticket)
            })
        })
    }
}
