import 'package:enum_to_string/enum_to_string.dart';

enum UserEnum { CLIENT, MANAGER }

class UserModel {
  UserModel({
    this.id,
    this.firebaseCode,
    this.type,
    this.email,
    this.name,
    this.password,
  });

  final int id;
  String firebaseCode;
  UserEnum type;
  String email;
  String name;
  String password;

  static List<UserModel> convertJsonList(dynamic values) {
    var list = List<UserModel>();
    var userModel;
    for (var item in values) {
      userModel = UserModel(
        id: item['id'],
        firebaseCode: item['firebaseCode'],
        type: EnumToString.fromString(UserEnum.values, item['type']),
        email: item['email'],
        name: item['name'],
        password: item['password'],
      );
      list.add(userModel);
    }
    return list;
  }

  Map<String, dynamic> toMap() => {
        'firebaseCode': this.firebaseCode,
        'type': EnumToString.parse(this.type),
        'email': this.email,
        'name': this.name,
        'password': this.password,
      };
}
