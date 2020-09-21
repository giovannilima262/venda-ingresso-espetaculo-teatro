import 'dart:collection';

import 'package:flutter/material.dart';
import 'package:vi_teatro_mobile/api/response.dart';
import 'package:http/http.dart' as http;
import 'package:vi_teatro_mobile/api/user.api.dart';
import 'package:vi_teatro_mobile/models/user.model.dart';

class UserProvider extends ChangeNotifier {
  final userApi = UserApi();
  final List<UserModel> _items = [];
  EnumResponse _statusFetching;

  UnmodifiableListView<UserModel> get items => UnmodifiableListView(_items);

  EnumResponse get statusFetching => _statusFetching;
  set statusFetching(value) => _statusFetching = value;

  void addUser({
    context,
    http.Client clientHttp,
    UserModel user,
  }) {
    userApi.addUser(clientHttp: clientHttp, user: user).then((data) {
      _statusFetching = data.status;
      if (_statusFetching != null) {
        print(_statusFetching);
        String text = _getValuesStatus()["text"];
        showDialog(
          context: context,
          builder: (_) => AlertDialog(
            title: Text("Mensagem"),
            content: Text(text),
          ),
        );
        _statusFetching = null;
      }
      notifyListeners();
    });
  }

  _getValuesStatus() {
    switch (_statusFetching) {
      case EnumResponse.error:
        return {
          'text': 'Já Registrado',
          'color': Colors.red,
        };
        break;
      case EnumResponse.success:
        return {
          'text': 'Registrado com sucesso',
          'color': Colors.green,
        };
        break;
      default:
    }
    return {
      'text': '',
      'color': Colors.blue,
    };
  }
}
