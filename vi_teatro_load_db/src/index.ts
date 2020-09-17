import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/user.entity";
import {Client} from "./entity/client.entity";
import {Address} from "./entity/address.entity";
import {UserType} from "./enum/user.type";
import {ClientType} from "./enum/client.type";

createConnection()
    .then(async (connection) => {
        createUsers()
    })
    .catch((error) => console.log("TypeORM connection error: ", error));


async function createUsers() {
    const people = require('../pessoas.json')
    for (const person of people) {
        let client = parsePersonToClient(person)
        await client.save()

    }
}

function parsePersonToClient(person): Client {
    let client = new Client()
    let user = new User()
    let address = new Address()
    address.cep = person.cep
    address.city = person.cidade
    address.state = person.estado
    address.neighborhood = person.bairro
    user.email = person.email
    user.name = person.nome
    user.password = person.senha
    user.type = UserType.CLIENT
    client.cpf = person.cpf
    client.user = user
    client.type = ClientType.COMMON
    client.address = address
    console.log(client)
    return client
}