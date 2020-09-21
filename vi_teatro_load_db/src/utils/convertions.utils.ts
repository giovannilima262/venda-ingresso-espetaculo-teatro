import {Client} from "../entity/client.entity";
import {User} from "../entity/user.entity";
import {Address} from "../entity/address.entity";
import {UserType} from "../enum/user.type";
import {ClientType} from "../enum/client.type";
import {adjectives, animals, colors, uniqueNamesGenerator} from "unique-names-generator";

export function parsePersonToClient(person): Client {
    let client = new Client()
    client.cpf = person.cpf
    client.user = convertUser(person, UserType.CLIENT)
    client.type = ClientType.COMMON
    client.address = convertAddress(person)
    return client
}

export function convertAddress(address): Address {
    let typedAddress = new Address()
    typedAddress.cep = address.cep
    typedAddress.city = address.cidade
    typedAddress.state = address.estado
    typedAddress.neighborhood = address.bairro
    typedAddress.streetName = address.endereco
    typedAddress.number = address.numero
    return typedAddress
}

function convertUser(user, userType: UserType): User {
    let typedUser = new User()
    typedUser.email = user.email
    typedUser.name = user.nome
    typedUser.password = user.senha
    typedUser.type = userType
    return typedUser
}

export function parseManagerToUserManager(manager): User {
    return convertUser(manager, UserType.MANAGER)
}


export function generateShowName() {
    return uniqueNamesGenerator({
        dictionaries: [colors, adjectives, animals],
        separator: " ",
        style: "capital"
    });
}