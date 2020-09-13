import 'package:enum_to_string/enum_to_string.dart';

enum UserEnum { CLIENT, MANAGER }

class UserModel {
  UserModel({
    this.id,
    this.firebaseCode,
    this.type,
  });

  final int id;
  final String firebaseCode;
  final UserEnum type;

  static List<UserModel> convertJsonList(dynamic values) {
    var list = List<UserModel>();
    var userModel;
    for (var item in values) {
      userModel = UserModel(
        id: item['id'],
        firebaseCode: item['firebaseCode'],
        type: EnumToString.fromString(UserEnum.values, item['type']),
      );
      list.add(userModel);
    }
    return list;
  }

  Map<String, dynamic> toMap() => {
        'firebaseCode': this.firebaseCode,
        'type': EnumToString.parse(this.type),
      };
}
